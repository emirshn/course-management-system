import pypyodbc as pyodbc

connStr = (
    r'Driver={SQL Server};'
    r'Server=cse3055.mssql.somee.com;'
    #r'Server=(local)\SQLEXPRESS;'
    r'Database=cse3055;'
    r'UID=marmaracse_SQLLogin_1;'
    r'PWD=l182ft8rur;'
   
)
conn = pyodbc.connect(connStr)


def row_count(sql):
    try:
        cursor = conn.cursor()
        cursor.execute(sql)
        ret = cursor.rowcount
    except pyodbc.Error as e:
        print(e)
        ret = 0

    return ret


def run_query(sql, params, response):
    try:
        cursor = conn.cursor()
        cursor.execute(sql, params)
        conn.commit()
    except pyodbc.Error as e:
        response.status_code = 400
        print(f'SQL Query Failed: {e}')
        return {"error": str(e)}


def fetch(sql, params=(), return_dict=True):
    try:
        cursor = conn.cursor()
        cursor.execute(sql, params)
        if return_dict:
            ret = mssql_result2dict(cursor)
        else:
            ret = cursor.fetchall()
        conn.commit()
    except pyodbc.Error as e:
        print(f'SQL Query Failed: {e}')
        ret = {"message": "system error"}

    return ret


# Function to return the sql results as a dict.
# It also maps the column names and values for the dict
# Returns no results found if there are no records
def mssql_result2dict(cursor):
    try:
        result = []
        columns = [column[0] for column in cursor.description]

        for row in cursor.fetchall():
            result.append(dict(zip(columns, row)))

        # print(result)

        # Check for results
        if len(result) > 0:
            ret = result
        else:
            ret = {"message": "no results found"}
    except pyodbc.Error as e:
        print(e)
        ret = {"message": "Internal Database Query Error"}

    return ret


# CLRUD aka CRUD model to update your database
# Create - Create record in the database
# List - List all records
# Read - Read one record
# Update - Update one record
# Delete - Delete one record
class TableModel:
    # Database table
    table = "dbo."

    # Incase you use sql views
    view = "dbo."

    def __init__(self, table=None):
        self.table += table
        self.view += table

    def create(self, data):
        sql = f'INSERT INTO {self.table} ([name],[value],[date], [comment]) OUTPUT INSERTED.id VALUES (?,?,?,?);'

        try:
            cursor = conn.cursor()
            row = cursor.execute(sql, data.name, data.value, data.date, data.comment).fetchone()
            conn.commit()
            ret = {"message": "created", "id": row[0]}
        except pyodbc.Error as e:
            print(f'Insert Failed')
            print(e)
            ret = {"message": "failed to create record"}

        return ret

    def list(self, id=None):
        sql = f'SELECT * FROM {self.view}'

        try:
            cursor = conn.cursor()
            cursor.execute(sql)
            ret = mssql_result2dict(cursor)
            conn.commit()
        except pyodbc.Error as e:
            print(f'SQL Query Failed: {e}')
            ret = {"message": "system error"}

        return ret

    def read(self, id=None):
        if not id:
            return {"message": "id not set"}

        sql = f'SELECT * FROM {self.view} WHERE id=?'

        try:
            cursor = conn.cursor()
            cursor.execute(sql, id)
            ret = mssql_result2dict(cursor)
            conn.commit()
        except pyodbc.Error as e:
            print(f'SQL Query Failed: {e}')
            ret = {"message": "system error"}

        return ret

    def update(self, id=None, data=None):
        if not id:
            return {"message": "id not set"}

        sql = f'UPDATE {self.table} set name=?, value=?, date=?, comment=? WHERE id=?'

        try:
            cursor = conn.cursor()
            cursor.execute(sql, data.name, data.value, data.date, data.comment, id)
            ret = {"message": "updated"}
            conn.commit()
        except pyodbc.Error as e:
            print(f'SQL Query Failed: {e}')
            ret = {"message": "system error"}

        return ret

    def delete(self, id=None):
        if not id:
            return {"message": "id not set"}

        sql = f'DELETE FROM {self.table} WHERE id=?'

        try:
            cursor = conn.cursor()
            cursor.execute(sql, id)
            ret = {"message": "deleted"}
            conn.commit()
        except pyodbc.Error as e:
            print(f'SQL Query Failed: {e}')
            ret = {"message": "system error"}

        return ret

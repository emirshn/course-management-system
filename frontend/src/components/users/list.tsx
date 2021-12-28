import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {IUser, IPost} from "src/interfaces";

export const UserList: React.FC<IResourceComponentsProps<GetListResponse<IUser>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IUser>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="userid"
                    key="userid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("userid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="firstname"
                    key="firstname"
                    title="First Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("firstname", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="lastname"
                    key="lastname"
                    title="Last Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("lastname", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="email"
                    key="email"
                    title="E-mail"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("email", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="phonenumber"
                    key="phonenumber"
                    title="Phone Number"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("phonenumber", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="address"
                    key="address"
                    title="Address"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("address", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="lastlogin"
                    key="lastlogin"
                    title="Last Login"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("lastlogin", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="age"
                    key="age"
                    title="Age"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("age", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="usertype"
                    key="usertype"
                    title="User Type"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("usertype", sorter)}
                    sorter
                />
                <Table.Column<IUser>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.userid}/>
                            <ShowButton hideText size="small" recordItemId={record.userid}/>
                            <DeleteButton hideText size="small" recordItemId={record.userid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

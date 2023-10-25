import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany, useSelect, FilterDropdown, Select,
} from "@pankod/refine";
import {IAttendance} from "src/interfaces";

export const AttendanceList: React.FC<IResourceComponentsProps<GetListResponse<IAttendance>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IAttendance>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="pk">
                <Table.Column
                    dataIndex="studentname"
                    key="studentname"
                    title="Student Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentnme", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="coursename"
                    key="coursename"
                    title="Course Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("coursename", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="isattended"
                    key="isattended"
                    title="Is Atttended?"
                    render={(value) => <TextField value={value === "1" ? "Yes" : "No"}/>}
                    defaultSortOrder={getDefaultSortOrder("isattended", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="date"
                    key="date"
                    title="Date"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("date", sorter)}
                    sorter
                />
                <Table.Column<IAttendance>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            {<EditButton hideText size="small" recordItemId={record.studentid} />}
                            {<ShowButton hideText size="small" recordItemId={record.studentid} />}
                            <DeleteButton hideText size="small" recordItemId={record.studentid} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

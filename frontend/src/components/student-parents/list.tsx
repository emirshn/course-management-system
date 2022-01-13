import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany, useSelect, FilterDropdown, Select,
} from "@pankod/refine";
import {IStudentParent} from "src/interfaces";

export const StudentParentList: React.FC<IResourceComponentsProps<GetListResponse<IStudentParent>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IStudentParent>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="studentid">
                <Table.Column
                    dataIndex="studentName"
                    key="studentname"
                    title="Student Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentnme", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="parentName"
                    key="parentname"
                    title="Parent Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("parentname", sorter)}
                    sorter
                />
                <Table.Column<IStudentParent>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.studentid}/>
                            <ShowButton hideText size="small" recordItemId={record.studentid}/>
                            <DeleteButton hideText size="small" recordItemId={record.studentid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

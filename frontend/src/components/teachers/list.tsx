import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany, useSelect, FilterDropdown, Select,
} from "@pankod/refine";
import {ITeacher} from "src/interfaces";

export const TeacherList: React.FC<IResourceComponentsProps<GetListResponse<ITeacher>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ITeacher>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="teacherid">
                <Table.Column
                    dataIndex="teacherid"
                    key="teacherid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("teacherid", sorter)}
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
                <Table.Column<ITeacher>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.teacherid}/>
                            <ShowButton hideText size="small" recordItemId={record.teacherid}/>
                            <DeleteButton hideText size="small" recordItemId={record.teacherid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

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
                    dataIndex="parentname"
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
                            {/*<EditButton hideText size="small" recordItemId={record.pk} />*/}
                            <ShowButton hideText size="small" recordItemId={record.pk} />
                            <DeleteButton hideText size="small" recordItemId={record.pk} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

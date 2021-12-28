import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {IClass, IPost} from "src/interfaces";

export const ClassList: React.FC<IResourceComponentsProps<GetListResponse<IClass>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IClass>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="classid"
                    key="classid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("classid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="classname"
                    key="classname"
                    title="Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("classname", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="classsize"
                    key="classsize"
                    title="Size"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("classsize", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="classcapacity"
                    key="classcapacity"
                    title="Capacity"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("classcapacity", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="classgrade"
                    key="classgrade"
                    title="Grade"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("classgrade", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="semester"
                    key="semester"
                    title="Semester"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("semester", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="section"
                    key="section"
                    title="Section"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("section", sorter)}
                    sorter
                />
                <Table.Column<IClass>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.classid}/>
                            <ShowButton hideText size="small" recordItemId={record.classid}/>
                            <DeleteButton hideText size="small" recordItemId={record.classid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

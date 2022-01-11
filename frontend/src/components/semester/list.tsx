import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {ISemester, IPost} from "src/interfaces";

export const SemesterList: React.FC<IResourceComponentsProps<GetListResponse<ISemester>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ISemester>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="semesterid"
                    key="semesterid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("semesterid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="semesterdescription"
                    key="semesterdescription"
                    title="Semester Description"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("semesterdescription", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="startingdate"
                    key="startingdate"
                    title="Starting Date"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("startingdate", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="endingdate"
                    key="endingdate"
                    title="Ending Date"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("endingdate", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="isactive"
                    key="isactive"
                    title="Is Active"
                    render={(value) => <TextField value={value ? "True" : "False"}/>}
                    defaultSortOrder={getDefaultSortOrder("isactive", sorter)}
                    sorter
                />
                <Table.Column<ISemester>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.semesterid}/>
                            <ShowButton hideText size="small" recordItemId={record.semesterid}/>
                            <DeleteButton hideText size="small" recordItemId={record.semesterid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

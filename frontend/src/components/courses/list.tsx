import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {ICourse, IPost} from "src/interfaces";

export const CourseList: React.FC<IResourceComponentsProps<GetListResponse<ICourse>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ICourse>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="course_id"
                    key="course_id"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("course_id", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="course_name"
                    key="course_name"
                    title="Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("course_name", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="grade"
                    key="grade"
                    title="Grade"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("grade", sorter)}
                    sorter
                />
                <Table.Column<ICourse>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.course_id}/>
                            <ShowButton hideText size="small" recordItemId={record.course_id}/>
                            <DeleteButton hideText size="small" recordItemId={record.course_id}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

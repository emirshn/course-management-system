import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {ICourse} from "src/interfaces";

export const CourseList: React.FC<IResourceComponentsProps<GetListResponse<ICourse>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ICourse>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="courseid">
                <Table.Column
                    dataIndex="courseid"
                    key="courseid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("courseid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="coursename"
                    key="coursename"
                    title="Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("coursename", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="shortname"
                    key="shortname"
                    title="Short Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("coursename", sorter)}
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
                            <EditButton hideText size="small" recordItemId={record.courseid}/>
                            <ShowButton hideText size="small" recordItemId={record.courseid}/>
                            <DeleteButton hideText size="small" recordItemId={record.courseid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

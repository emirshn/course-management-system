import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {IExamResult, IPost} from "src/interfaces";

export const ExamResultList: React.FC<IResourceComponentsProps<GetListResponse<IExamResult>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IExamResult>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="resultid"
                    key="resultid"
                    title="Result ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("resultid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="studentid"
                    key="studentid"
                    title="Student ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="courseid"
                    key="courseid"
                    title="Course ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("courseid", sorter)}
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
                 <Table.Column
                    dataIndex="date"
                    key="date"
                    title="Date"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("date", sorter)}
                    sorter
                />
                <Table.Column<IExamResult>
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

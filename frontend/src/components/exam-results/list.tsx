import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany, useSelect, FilterDropdown, Select,
} from "@pankod/refine";
import {ICourse, IExamResult, IPost, IStudent} from "src/interfaces";

export const ExamResultList: React.FC<IResourceComponentsProps<GetListResponse<IExamResult>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IExamResult>({
        queryOptions: {
            initialData,
        },
    });

    const studentIds =
        tableProps?.dataSource?.map((item) => item.studentid) ?? [];
    const {data: studentsData, isLoading} = useMany<IStudent>({
        resource: "student",
        ids: studentIds,
        queryOptions: {
            enabled: studentIds.length > 0,
        },
    });

    const courseIds =
        tableProps?.dataSource?.map((item) => item.courseid) ?? [];
    const {data: coursesData, isLoading2} = useMany<ICourse>({
        resource: "course",
        ids: courseIds,
        queryOptions: {
            enabled: courseIds.length > 0,
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
                    title="Student"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TextField
                                value={
                                    studentsData?.data.find((item) => item.studentid === value)?.fullname
                                }
                            />
                        );
                    }}
                />
                <Table.Column
                    dataIndex="courseid"
                    title="Course"
                    render={(value) => {
                        if (isLoading2) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TextField
                                value={
                                    coursesData?.data.find((item) => item.courseid === value)?.displayname
                                }
                            />
                        );
                    }}
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
                            <EditButton hideText size="small" recordItemId={record.resultid}/>
                            <ShowButton hideText size="small" recordItemId={record.resultid}/>
                            <DeleteButton hideText size="small" recordItemId={record.resultid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

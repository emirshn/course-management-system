import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany,
} from "@pankod/refine";
import {ICourseSchedule, ICourse, IClass} from "src/interfaces";

export const ScheduleList: React.FC<IResourceComponentsProps<GetListResponse<ICourseSchedule>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ICourseSchedule>({
        queryOptions: {
            initialData,
        },
    });

    const courseIds =
        tableProps?.dataSource?.map((item) => item.courseid.toString()) ?? [];
    const {data: coursesData, isLoading} = useMany<ICourse>({
        resource: "course",
        ids: courseIds,
        queryOptions: {
            enabled: courseIds.length > 0,
        },
    });
    const classIds =
        tableProps?.dataSource?.map((item) => item.classid.toString()) ?? [];
    const {data: classesData, isLoading: isLoading2} = useMany<IClass>({
        resource: "class",
        ids: classIds,
        queryOptions: {
            enabled: classIds.length > 0,
        },
    });

    function dayToString(day:number): String {
        switch (day - 1) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            case 6:
                return "Sunday";
            default:
                return "";
        }
    }

    return (
        <List>
            <Table {...tableProps} rowKey="classid">
                <Table.Column
                    dataIndex="classid"
                    key="classid"
                    title="Class ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("classid", sorter)}
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
                    dataIndex="classid"
                    title="Class"
                    render={(value) => {
                        if (isLoading2) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TextField
                                value={
                                    classesData?.data.find((item) => item.classid === value)?.classid
                                }
                            />
                        );
                    }}
                />
                <Table.Column
                    dataIndex="courseid"
                    title="Course"
                    render={(value) => {
                        if (isLoading) {
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
                    dataIndex="courseday"
                    key="courseday"
                    title="Course Day"
                    render={(value) => <TextField value={dayToString(value)}/>}
                    defaultSortOrder={getDefaultSortOrder("courseday", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="coursehour"
                    key="coursehour"
                    title="Course Hour"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("coursehour", sorter)}
                    sorter
                />
                <Table.Column<ICourseSchedule>
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

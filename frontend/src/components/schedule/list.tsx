import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {ICourseSchedule} from "src/interfaces";

export const ScheduleList: React.FC<IResourceComponentsProps<GetListResponse<ICourseSchedule>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ICourseSchedule>({
        queryOptions: {
            initialData,
        },
    });
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
                    dataIndex="coursehour"
                    key="coursehour"
                    title="Course Hour"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("coursehour", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="courseday"
                    key="courseday"
                    title="Course Day"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("courseday", sorter)}
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

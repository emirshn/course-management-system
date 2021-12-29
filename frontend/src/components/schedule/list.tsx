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
    const scheduleHandler = (id: string) => {
        return fetch(`http://localhost:8000/schedule/${id}`);
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

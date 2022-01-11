import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany, useSelect, FilterDropdown, Select,
} from "@pankod/refine";
import {ICourseTeacher} from "src/interfaces";

export const CourseTeacherList: React.FC<IResourceComponentsProps<GetListResponse<ICourseTeacher>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ICourseTeacher>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="teacherid">
                <Table.Column
                    dataIndex="coursename"
                    key="coursename"
                    title="Course Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("coursename", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="grade"
                    key="grade"
                    title="Course Grade"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("grade", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="teachername"
                    key="teachername"
                    title="Teacher Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("teachername", sorter)}
                    sorter
                />
                <Table.Column<ICourseTeacher>
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

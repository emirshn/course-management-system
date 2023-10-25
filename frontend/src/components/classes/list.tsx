import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany,
} from "@pankod/refine";
import {IClass, ISection, ISemester} from "src/interfaces";

export const ClassList: React.FC<IResourceComponentsProps<GetListResponse<IClass>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IClass>({
        queryOptions: {
            initialData,
        },
    });

    const sectionIds =
        tableProps?.dataSource?.map((item) => item.section.toString()) ?? [];
    const {data: sectionsData, isLoading} = useMany<ISection>({
        resource: "section",
        ids: sectionIds,
        queryOptions: {
            enabled: sectionIds.length > 0,
        },
    });

    const semesterIds = tableProps?.dataSource?.map((item) => item.semester.toString()) ?? [];
const { data: semestersData } = useMany<ISemester>({
    resource: "semester",
    ids: semesterIds,
    queryOptions: {
        enabled: semesterIds.length > 0,
    },
});


    return (
        <List>
            <Table {...tableProps} rowKey="classid">
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
                    title="Semester"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TextField
                                value={
                                    semestersData?.data.find((item) => item.semesterid === value)?.semesterdescription
                                }
                            />
                        );
                    }}
                />
                <Table.Column
                    dataIndex="section"
                    title="Section"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TextField
                                value={
                                    sectionsData?.data.find((item) => item.id === value)?.name
                                }
                            />
                        );
                    }}
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

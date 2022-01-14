import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany,
} from "@pankod/refine";
import {ISchool, ISection, IStudent} from "src/interfaces";

export const StudentList: React.FC<IResourceComponentsProps<GetListResponse<IStudent>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IStudent>({
        queryOptions: {
            initialData,
        },
    });

    const schoolIds =
        tableProps?.dataSource?.map((item) => item.school) ?? [];
    const {data: schoolsData, isLoading} = useMany<ISchool>({
        resource: "school",
        ids: schoolIds,
        queryOptions: {
            enabled: schoolIds.length > 0,
        },
    });

    const sectionIds =
        tableProps?.dataSource?.map((item) => item.section) ?? [];
    const {data: sectionsData, isLoading2} = useMany<ISection>({
        resource: "section",
        ids: sectionIds,
        queryOptions: {
            enabled: sectionIds.length > 0,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="studentid">
                <Table.Column
                    dataIndex="studentid"
                    key="studentid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentid", sorter)}
                    sorter
                />

                <Table.Column
                    dataIndex="firstname"
                    key="firstname"
                    title="Firstname"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("firstname", sorter)}
                    sorter
                />
                {/* <TextField value = {"some"}> {console.log(tableProps) }</TextField> */}

                <Table.Column
                    dataIndex="lastname"
                    key="lastname"
                    title="Lastname"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("lastname", sorter)}
                    sorter
                />
                {/* <TextField value = {"some"}> {console.log(tableProps) }</TextField> */}
                <Table.Column
                    dataIndex="school"
                    title="School"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TextField
                                value={
                                    schoolsData?.data.find((item) => item.id === value)?.name
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
                    dataIndex="section"
                    title="Section"
                    render={(value) => {
                        if (isLoading2) {
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
                <Table.Column
                    dataIndex="class"
                    key="studentclass"
                    title="Class ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentclass", sorter)}
                    sorter
                />
                <Table.Column<IStudent>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.studentid}/>
                            <ShowButton hideText size="small" recordItemId={record.studentid}/>
                            <DeleteButton hideText size="small" recordItemId={record.studentid + '-' + record.userid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

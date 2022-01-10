import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton, useMany, useSelect, FilterDropdown, Select,
} from "@pankod/refine";
import {IParent, IUser} from "src/interfaces";

export const ParentList: React.FC<IResourceComponentsProps<GetListResponse<IParent>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IParent>({
        queryOptions: {
            initialData,
        },
    });

    const userIds =
        tableProps?.dataSource?.map((item) => item.parentid) ?? [];
    const {data: usersData, isLoading} = useMany<IUser>({
        resource: "user",
        ids: userIds,
        queryOptions: {
            enabled: userIds.length > 0,
        },
    });

    const {selectProps: userSelectProps} = useSelect<IUser>({
        resource: "user",
    });

    return (
        <List>
            <Table {...tableProps} rowKey="parentid">
                <Table.Column
                    dataIndex="parentid"
                    key="parentid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("parentid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="name"
                    key="name"
                    title="Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("name", sorter)}
                    sorter
                />
                <Table.Column
          dataIndex={["parent", "parentid"]}
          title="Name"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={
                  usersData?.data.find((item) => item.userid === value)?.firstname
                }
              />
            );
          }}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                {...userSelectProps}
              />
            </FilterDropdown>
          )}
        />

                <Table.Column<IParent>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.parentid}/>
                            <ShowButton hideText size="small" recordItemId={record.parentid}/>
                            <DeleteButton hideText size="small" recordItemId={record.parentid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

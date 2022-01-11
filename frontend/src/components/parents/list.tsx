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
                    dataIndex="firstname"
                    key="firstname"
                    title="First Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("firstname", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="lastname"
                    key="lastname"
                    title="Last Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("lastname", sorter)}
                    sorter
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

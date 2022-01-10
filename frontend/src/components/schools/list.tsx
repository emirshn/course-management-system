import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {ISchool, IPost} from "src/interfaces";

export const SchoolList: React.FC<IResourceComponentsProps<GetListResponse<IUser>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ISchool>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="schoolid"
                    key="schoolid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("schoolid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="schoolname"
                    key="schoolname"
                    title="School Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("schoolname", sorter)}
                    sorter
                />
            </Table>
        </List>
    );
};

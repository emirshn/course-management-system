import {
    List,
    Table,
    TextField,
    Show,
    useShow,
    useTable,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
    getDefaultSortOrder,
    GetListResponse
} from "@pankod/refine";

import {IClass, ICourseSchedule} from "src/interfaces";

const {Title, Text} = Typography;

export const ScheduleShow: React.FC<IResourceComponentsProps<GetListResponse<ICourseSchedule>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ICourseSchedule>({
        queryOptions: {
            initialData,
        },
    });
    return (
        // <Show isLoading={isLoading}>
        //     <Title level={5}>Class ID</Title>
        //     <Text>{record?.classid}</Text>
        //     <Title level={5}>Course ID</Title>
        //     <Text>{record?.courseid}</Text>
        //     <Title level={5}>Course Day</Title>
        //     <Text>{record?.courseday}</Text>
        //     <Title level={5}>Course Hour</Title>
        //     <Text>{record?.coursehour}</Text>
        // </Show>
        <List>
            <Table {...tableProps} rowKey={"1, 2, 3, 4 , 5"}>
                <Table.Column
                title = 'PAZARTESI'
                />
                <Table.Column
                title = 'SALI'
                />
                <Table.Column
                title = 'CARSAMBA'
                />
                <Table.Column
                title = 'PERSEMBE'
                />
                <Table.Column
                title = 'CUMA'
                />
            </Table>
        </List>
    );
};

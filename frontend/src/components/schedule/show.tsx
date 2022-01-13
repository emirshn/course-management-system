import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ICourseSchedule} from "src/interfaces";

const {Title, Text} = Typography;

export const ScheduleShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ICourseSchedule>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Class ID</Title>
            <Text>{record?.classid}</Text>
            <Title level={5}>Course ID</Title>
            <Text>{record?.courseid}</Text>
            <Title level={5}>Course Day</Title>
            <Text>{record?.courseday}</Text>
            <Title level={5}>Course Hour</Title>
            <Text>{record?.coursehour}</Text>
        </Show>
    );
};
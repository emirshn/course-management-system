import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IExamResult} from "src/interfaces";

const {Title, Text} = Typography;

export const ExamResultShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IExamResult>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Result ID</Title>
            <Text>{record?.resultid}</Text>
            <Title level={5}>Student ID</Title>
            <Text>{record?.studentid}</Text>
            <Title level={5}>Course ID</Title>
            <Text>{record?.courseid}</Text>
            <Title level={5}>Grade</Title>
            <Text>{record?.grade}</Text>
            <Title level={5}>Date</Title>
            <Text>{record?.date}</Text>
        </Show>
    );
};

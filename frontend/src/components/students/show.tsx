import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IStudent} from "src/interfaces";

const {Title, Text} = Typography;

export const StudentShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IStudent>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Student ID</Title>
            <Text>{record?.studentid}</Text>
            <Title level={5}>School</Title>
            <Text>{record?.school}</Text>
            <Title level={5}>Grade</Title>
            <Text>{record?.grade}</Text>
            <Title level={5}>Section</Title>
            <Text>{record?.section}</Text>
            <Title level={5}>User ID</Title>
            <Text>{record?.userid}</Text>
            <Title level={5}>Class</Title>
            <Text>{record?.studentclass}</Text>
        </Show>
    );
};

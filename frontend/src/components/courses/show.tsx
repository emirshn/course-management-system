import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ICourse} from "src/interfaces";

const {Title, Text} = Typography;

export const CourseShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ICourse>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Course ID</Title>
            <Text>{record?.courseid}</Text>
            <Title level={5}>Name</Title>
            <Text>{record?.coursename}</Text>
            <Title level={5}>Short Name</Title>
            <Text>{record?.shortname}</Text>
            <Title level={5}>Grade</Title>
            <Text>{record?.grade}</Text>
            <Title level={5}>Is Active</Title>
            <Text>{record?.isactive ? "True" : "False"}</Text>
        </Show>
    );
};

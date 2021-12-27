import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IClass} from "src/interfaces";

const {Title, Text} = Typography;

export const ClassShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IClass>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Class ID</Title>
            <Text>{record?.classid}</Text>
            <Title level={5}>Name</Title>
            <Text>{record?.classname}</Text>
            <Title level={5}>Size</Title>
            <Text>{record?.classsize}</Text>
            <Title level={5}>Capacity</Title>
            <Text>{record?.classcapacity}</Text>
            <Title level={5}>Grade</Title>
            <Text>{record?.classgrade}</Text>
            <Title level={5}>Semester</Title>
            <Text>{record?.semester}</Text>
            <Title level={5}>Section</Title>
            <Text>{record?.section}</Text>
        </Show>
    );
};

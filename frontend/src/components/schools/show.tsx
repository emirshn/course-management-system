import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ISchool} from "src/interfaces";

const {Title, Text} = Typography;

export const SchoolShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ISchool>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>School ID</Title>
            <Text>{record?.id}</Text>
            <Title level={5}>School Name</Title>
            <Text>{record?.name}</Text>
        </Show>
    );
};

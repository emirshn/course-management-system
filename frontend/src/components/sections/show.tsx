import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ISection} from "src/interfaces";

const {Title, Text} = Typography;

export const SectionShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ISection>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Section ID</Title>
            <Text>{record?.sectionid}</Text>
            <Title level={5}>Section Name</Title>
            <Text>{record?.name}</Text>
            <Title level={5}>Short Name</Title>
            <Text>{record?.shortname}</Text>
        </Show>
    );
};

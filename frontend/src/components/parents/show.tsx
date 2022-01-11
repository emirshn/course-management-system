import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IParent} from "src/interfaces";

const {Title, Text} = Typography;

export const ParentShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IParent>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>User ID</Title>
            <Text>{record?.parentid}</Text>
            <Title level={5}>First Name</Title>
            <Text>{record?.firstname}</Text>
            <Title level={5}>Last Name</Title>
            <Text>{record?.lastname}</Text>
        </Show>
    );
};

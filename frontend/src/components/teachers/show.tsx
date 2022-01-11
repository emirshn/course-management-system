import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ITeacher} from "src/interfaces";

const {Title, Text} = Typography;

export const TeacherShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ITeacher>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>User ID</Title>
            <Text>{record?.teacherid}</Text>
            <Title level={5}>First Name</Title>
            <Text>{record?.firstname}</Text>
            <Title level={5}>Last Name</Title>
            <Text>{record?.lastname}</Text>
        </Show>
    );
};

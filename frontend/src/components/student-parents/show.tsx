import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IStudentParent} from "src/interfaces";

const {Title, Text} = Typography;


export const StudentParentShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IStudentParent>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Student Name</Title>
            <Text>{record?.studentname}</Text>
            <Title level={5}>Parent Name</Title>
            <Text>{record?.parentname}</Text>
        </Show>
    );
};

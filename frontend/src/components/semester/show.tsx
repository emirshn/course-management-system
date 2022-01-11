import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ISemester} from "src/interfaces";

const {Title, Text} = Typography;

export const SemesterShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ISemester>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Semester ID</Title>
            <Text>{record?.semesterid}</Text>
            <Title level={5}>Semester Description</Title>
            <Text>{record?.semesterdescription}</Text>
            <Title level={5}>Starting Date</Title>
            <Text>{record?.startingdate}</Text>
            <Title level={5}>Ending Date</Title>
            <Text>{record?.endingdate}</Text>
            <Title level={5}>Is Active</Title>
            <Text>{record?.isactive ? "True" : "False"}</Text>
        </Show>
    );
};

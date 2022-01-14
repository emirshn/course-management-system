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


export const AttendanceShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IAttendance>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Student Name</Title>
            <Text>{record?.studentname}</Text>
            <Title level={5}>Course Name</Title>
            <Text>{record?.coursename}</Text>
            <Title level={5}>Is Attended?</Title>
            <Text>{record?.isattended}</Text>
            <Title level={5}>Date</Title>
            <Text>{record?.date}</Text>
        </Show>
    );
};

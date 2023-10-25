import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";


import { IAttendance } from "src/interfaces";


const {Title, Text} = Typography;


export const AttendanceShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IAttendance>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Student Id</Title>
            <Text>{record?.studentid}</Text>
            <Title level={5}>Course Id</Title>
            <Text>{record?.courseid}</Text>
            <Title level={5}>Is Attended?</Title>
            <Text>{record?.isattended}</Text>
            <Title level={5}>Date</Title>
            <Text>{record?.date}</Text>
        </Show>
    );
};

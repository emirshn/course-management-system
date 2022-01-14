import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {ICourseTeacher} from "src/interfaces";

const {Title, Text} = Typography;

function dayToString(day) {
    switch (day - 1) {
        case 0:
            return "Monday";
        case 1:
            return "Tuesday";
        case 2:
            return "Wednesday";
        case 3:
            return "Thursday";
        case 4:
            return "Friday";
        case 5:
            return "Saturday";
        case 6:
            return "Sunday";
        default:
            return "";
    }
}

export const CourseTeacherShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<ICourseTeacher>();
    const {data, isLoading} = queryResult;
    const record = data?.data;
    /*let firstRecord;
    if (!isLoading) {
        firstRecord = record[0];
    }*/

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Course Name</Title>
            <Text>{record?.coursename}</Text>
            <Title level={5}>Course Grade</Title>
            <Text>{record?.grade}</Text>
            <Title level={5}>Teacher Name</Title>
            <Text>{record?.teachername}</Text>
            {/*<Title level={5}>Course Schedule</Title>
            {record?.map((r) => (
                <Text>{dayToString(r?.courseday)} - {r?.coursehour}. lecture hour<br/></Text>
            ))}*/}
        </Show>
    );
};

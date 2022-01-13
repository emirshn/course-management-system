import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IClass, ISemester, ISection} from "src/interfaces";

const {Title, Text} = Typography;

export const ClassShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IClass>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    const {data: sectionData} = useOne<ISection>({
        resource: "section",
        id: record?.section ?? "",
        queryOptions: {
            enabled: !!record?.section,
        },
    });
    const {data: semesterData} = useOne<ISemester>({
        resource: "semester",
        id: record?.semester ?? "",
        queryOptions: {
            enabled: !!record?.semester,
        },
    });

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
            <Title level={5}>Semester ID</Title>
            <Text>{record?.semester}</Text>
            <Title level={5}>Semester Description</Title>
            <Text>{semesterData?.data.semesterdescription}</Text>
            <Title level={5}>Section ID</Title>
            <Text>{record?.section}</Text>
            <Title level={5}>Section Name</Title>
            <Text>{sectionData?.data.name}</Text>
        </Show>
    );
};

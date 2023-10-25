import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IClass, ISchool, ISection, IStudent} from "src/interfaces";

const {Title, Text} = Typography;

export const StudentShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IStudent>();
    const {data, isLoading} = queryResult;
    const record = data?.data;
    const {data: schoolData} = useOne<ISchool>({
        resource: "school",
        id: record?.school ?? "",
        queryOptions: {
            enabled: !!record?.school,
        },
    });
    const {data: sectionData} = useOne<ISection>({
        resource: "section",
        id: record?.section ?? "",
        queryOptions: {
            enabled: !!record?.section,
        },
    });

    const {data: classData} = useOne<IClass>({
        resource: "class",
        id: record?.class.toString() ?? "",
        queryOptions: {
            enabled: !!record?.class,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Student ID</Title>
            <Text>{record?.studentid}</Text>
            <Title level={5}>School</Title>
            <Text>{schoolData?.data.name}</Text>
            <Title level={5}>Grade</Title>
            <Text>{record?.grade}</Text>
            <Title level={5}>Section</Title>
            <Text>{sectionData?.data.name}</Text>
            <Title level={5}>User ID</Title>
            <Text>{record?.userid}</Text>
            <Title level={5}>Class ID</Title>
            <Text>{record?.class}</Text>
            <Title level={5}>Class Name</Title>
            <Text>{classData?.data.classname}</Text>
            
        
        </Show>
    );
};

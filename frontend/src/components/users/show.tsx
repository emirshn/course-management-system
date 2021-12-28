import {
    Show,
    useShow,
    Typography,
    Tag,
    useOne,
    IResourceComponentsProps,
    MarkdownField,
} from "@pankod/refine";

import {IUser} from "src/interfaces";

const {Title, Text} = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
    const {queryResult} = useShow<IUser>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>User ID</Title>
            <Text>{record?.userid}</Text>
            <Title level={5}>First Name</Title>
            <Text>{record?.firstname}</Text>
            <Title level={5}>Last Name</Title>
            <Text>{record?.lastname}</Text>
            <Title level={5}>User Name</Title>
            <Text>{record?.username}</Text>
            <Title level={5}>Email</Title>
            <Text>{record?.email}</Text>
            <Title level={5}>Phone Number</Title>
            <Text>{record?.phonenumber}</Text>
            <Title level={5}>Adress</Title>
            <Text>{record?.address}</Text>
            <Title level={5}>Age</Title>
            <Text>{record?.age}</Text>
            <Title level={5}>Birth Date</Title>
            <Text>{record?.birthdate}</Text>
            <Title level={5}>Register Date</Title>
            <Text>{record?.registerdate}</Text>
            <Title level={5}>Is Confirmed</Title>
            <Text>{record?.isconfirmed ? "True" : "False"}</Text>
            <Title level={5}>Is Active</Title>
            <Text>{record?.isactive ? "True" : "False"}</Text>
        </Show>
    );
};

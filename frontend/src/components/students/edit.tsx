import {useState} from "react";
import {
    Edit,
    Form,
    Input,
    Select,
    IResourceComponentsProps,
    useForm,
    useSelect, Radio,
} from "@pankod/refine";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import {IClass, ISchool, IStudent} from "src/interfaces";
import dayjs from "dayjs";
import {DatePicker} from "antd";

export const StudentEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<IStudent>();
    const {selectProps: schoolSelectProps} = useSelect<ISchool>({
        resource: "school",
        optionLabel: "name",
        optionValue: "id",
        sort: [
            {
                field: "name",
                order: "desc",
            },
        ],
    });
    const {selectProps: classSelectProps} = useSelect<IClass>({
        resource: "class",
        optionLabel: "displayname",
        optionValue: "classid",
        sort: [
            {
                field: "name",
                order: "asc",
            },
        ],
    });
    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="ID"
                    name="userid"
                    hidden
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Student ID"
                    name="studentid"

                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled/>
                </Form.Item>
                <Form.Item
                    label="School"
                    name="school"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...schoolSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Class"
                    name="studentclass"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...classSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phonenumber"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="5XXXXXXXXX"/>
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Birth Date"
                    name="birthdate"
                    getValueProps={(value) => ({
                        value: value ? dayjs(value) : "",
                    })}
                >
                    <DatePicker/>
                </Form.Item>
            </Form>
        </Edit>
    );
};

import {useState} from "react";
import {
    Create,
    Form,
    Input,
    Select,
    useSelect,
    IResourceComponentsProps,
    useForm,
    Radio,
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import {IStudent, ISchool, IGrade, IClass} from "src/interfaces";
import {number} from "prop-types";
import dayjs from "dayjs";
import {DatePicker} from "antd";

export const StudentCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IStudent>();

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

    const {selectProps: gradeSelectProps} = useSelect<IGrade>({
        resource: "grade",
        optionLabel: "grade",
        optionValue: "grade",
        sort: [
            {
                field: "grade",
                order: "asc",
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
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item name="studentid" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item name="userid" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item name="section" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item name="grade" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
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
                    <DatePicker />
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

            </Form>
        </Create>
    );
};

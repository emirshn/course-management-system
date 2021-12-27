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

import {ICourse} from "src/interfaces";

export const CourseEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<ICourse>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                 <Form.Item
                    label="ID"
                    name="course_id"

                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled/>
                </Form.Item>
                 <Form.Item
                    label="Name"
                    name="course_name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Grade"
                    name="grade"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        options={[
                            {
                                label: "9",
                                value: "9",
                            },
                            {
                                label: "10",
                                value: "10",
                            },
                            {
                                label: "11",
                                value: "11",
                            },
                            {
                                label: "12",
                                value: "12",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Active"
                    name="is_active"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group
                        options={[
                            {
                                label: "True",
                                value: 1,
                            },
                            {
                                label: "False",
                                value: 0,
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Short Name"
                    name="short_name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Edit>
    );
};

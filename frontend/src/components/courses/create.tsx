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

import {ICourse, IGrade} from "src/interfaces";
import {number} from "prop-types";

export const CourseCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<ICourse>();

    const {selectProps} = useSelect<ICourse>({
        resource: "course",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item name="courseid" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="coursename"
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
                    name="isactive"
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
                    name="shortname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Create>
    );
};

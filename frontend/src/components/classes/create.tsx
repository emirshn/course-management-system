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

import {IClass} from "src/interfaces";
import {number} from "prop-types";

export const ClassCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IClass>();

    const {selectProps} = useSelect<IClass>({
        resource: "class",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item name="classid" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="classname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Size"
                    name="classsize"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Capacity"
                    name="classcapacity"
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
                    name="classgrade"
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
                                value: 9,
                            },
                            {
                                label: "10",
                                value: 10,
                            },
                            {
                                label: "11",
                                value: 11,
                            },
                            {
                                label: "12",
                                value: 12,
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Semester"
                    name="semester"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Section"
                    name="section"
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

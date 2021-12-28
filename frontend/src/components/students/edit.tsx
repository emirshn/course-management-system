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

import {IStudent} from "src/interfaces";

export const StudentEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<IStudent>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                 <Form.Item
                    label="ID"
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
                <Form.Item
                    label="User ID"
                    name="userid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
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
                    <Input/>
                </Form.Item>
            </Form>
        </Edit>
    );
};

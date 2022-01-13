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

import {IStudentParent} from "src/interfaces";

export const StudentParentEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<IStudentParent>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
                    label="Student ID"
                    name="parentid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled/>
                </Form.Item>
                <Form.Item
                    label="Student Name"
                    name="studentname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Parent Name"
                    name="parentname"
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

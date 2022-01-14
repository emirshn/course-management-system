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

import {IAttendance} from "src/interfaces";

export const AttendanceEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<IAttendance>();

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
                    label="Course ID"
                    name="courseid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled/>
                </Form.Item>
                <Form.Item
                    label="Is Attended"
                    name="isattended"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Date"
                    name="date"
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

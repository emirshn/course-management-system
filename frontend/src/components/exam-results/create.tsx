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

import {IExamResult} from "src/interfaces";
import {number} from "prop-types";

export const ExamResultCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IExamResult>();

    const {selectProps} = useSelect<IExamResult>({
        resource: "exam-result",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item name="resultid" initialValue="-1" hidden>
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
                    <Input/>
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
        </Create>
    );
};

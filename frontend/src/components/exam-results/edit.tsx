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

import {IExamResult} from "src/interfaces";

export const ExamResultEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<IExamResult>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
        </Edit>
    );
};

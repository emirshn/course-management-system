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

import {ICourseSchedule} from "src/interfaces";

export const ScheduleEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<ICourseSchedule>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                 <Form.Item
                    label="ID"
                    name="classid"
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
                    <Input/>
                </Form.Item>
                 <Form.Item
                    label="Course Hour"
                    name="coursehour"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                 <Form.Item
                    label="Course Day"
                    name="courseday"
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

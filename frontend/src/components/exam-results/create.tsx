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

import {IExamResult, ICourse, IStudent} from "src/interfaces";
import {number} from "prop-types";
import dayjs from "dayjs";
import {DatePicker} from "antd";

export const ExamResultCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IExamResult>();

    const {selectProps} = useSelect<IExamResult>({
        resource: "exam-result",
    });

    const {selectProps: studentSelectProps} = useSelect<IStudent>({
        resource: "student",
        optionLabel: "studentname",
        optionValue: "studentid",
        sort: [
            {
                field: "studentname",
                order: "desc",
            },
        ],
    });

    const {selectProps: courseSelectProps} = useSelect<ICourse>({
        resource: "course",
        optionLabel: "displayname",
        optionValue: "courseid",
        sort: [
            {
                field: "displayname",
                order: "desc",
            },
        ],
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
                    <Select {...studentSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Course"
                    name="courseid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...courseSelectProps} />
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
                    <Input type="number" min="0" max="100"/>
                </Form.Item>
                <Form.Item
                    label="Date"
                    name="date"
                    getValueProps={(value) => ({
                        value: value ? dayjs(value) : "",
                    })}
                >
                    <DatePicker/>
                </Form.Item>
            </Form>
        </Create>
    );
};

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

import {ICourse, IStudent, IAttendance} from "src/interfaces";
import {number} from "prop-types";
import dayjs from "dayjs";
import {DatePicker} from "antd";

export const AttendanceCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IAttendance>();

    const {selectProps: studentSelectProps} = useSelect<IStudent>({
        resource: "student",
        optionLabel: "fullname",
        optionValue: "studentid",
    });

    const {selectProps: courseSelectProps} = useSelect<ICourse>({
        resource: "course",
        optionLabel: "displayname",
        optionValue: "courseid",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Student"
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
                    label="Is attended?"
                    name="isattended"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        options={[
                            {
                                label: "Yes",
                                value: 1,
                            },
                            {
                                label: "No",
                                value: 0,
                            }
                        ]}
                    />
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

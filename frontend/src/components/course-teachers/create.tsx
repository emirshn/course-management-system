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

import {ITeacher, ICourse, ICourseTeacher} from "src/interfaces";
import {number} from "prop-types";

export const CourseTeacherCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<ICourseTeacher>();

    const {selectProps: teacherSelectProps} = useSelect<ITeacher>({
        resource: "teacher",
        optionLabel: "firstname",
        optionValue: "teacherid",
    });

    const {selectProps: courseSelectProps} = useSelect<ICourse>({
        resource: "course",
        optionLabel: "coursename",
        optionValue: "courseid",
        sort: [
            {
                field: "grade",
                order: "asc",
            },
        ],
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Teacher"
                    name="teacherid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...teacherSelectProps} />
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
            </Form>
        </Create>
    );
};

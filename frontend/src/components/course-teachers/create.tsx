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

import {ITeacher, ICourseTeacher} from "src/interfaces";
import {number} from "prop-types";

export const CourseTeacherCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<ICourseTeacher>();

    const { selectProps: teacherSelectProps } = useSelect<ITeacher>({
    resource: "teacher",
  });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Teacher ID"
                    name="teacherid"
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
          label="Teacher"
          name={["teacher", "teacherid"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...teacherSelectProps} />
        </Form.Item>
            </Form>
        </Create>
    );
};

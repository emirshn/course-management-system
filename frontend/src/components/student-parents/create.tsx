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

import {IParent, IStudent, IStudentParent} from "src/interfaces";
import {number} from "prop-types";

export const StudentParentCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IStudentParent>();

    const {selectProps: studentSelectProps} = useSelect<IStudent>({
        resource: "student",
        optionLabel: "firstname",
        optionValue: "studentid",
    });

    const {selectProps: parentSelectProps} = useSelect<IParent>({
        resource: "parent",
        optionLabel: "firstname",
        optionValue: "parentid",
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
                    label="Parent"
                    name="parentid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...parentSelectProps} />
                </Form.Item>
            </Form>
        </Create>
    );
};

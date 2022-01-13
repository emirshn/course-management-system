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

import {IStudent, ISchool, IGrade, ISection} from "src/interfaces";
import {number} from "prop-types";

export const StudentCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IStudent>();

    const {selectProps: schoolSelectProps} = useSelect<ISchool>({
        resource: "school",
        optionLabel: "name",
        optionValue: "id",
        sort: [
            {
                field: "name",
                order: "desc",
            },
        ],
    });

    const {selectProps: gradeSelectProps} = useSelect<IGrade>({
        resource: "grade",
        optionLabel: "grade",
        optionValue: "grade",
        sort: [
            {
                field: "grade",
                order: "asc",
            },
        ],
    });

    const {selectProps: sectionSelectProps} = useSelect<ISection>({
        resource: "section",
        optionLabel: "name",
        optionValue: "id",
        sort: [
            {
                field: "name",
                order: "asc",
            },
        ],
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item name="studentid" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item name="userid" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item name="class" initialValue="-1" hidden>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phonenumber"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Birthdate"
                    name="birthdate"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="YYYY-MM-DD"/>
                </Form.Item>
                <Form.Item
                    label="School"
                    name="school"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...schoolSelectProps} />
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
                    <Select {...gradeSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Section"
                    name="section"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...sectionSelectProps} />
                </Form.Item>

            </Form>
        </Create>
    );
};

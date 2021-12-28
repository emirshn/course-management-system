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

import {IUser} from "src/interfaces";
import {number} from "prop-types";

export const UserCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IUser>();

    const {selectProps} = useSelect<IUser>({
        resource: "user",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item name="userid" initialValue="-1" hidden>
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
                                         label="User Name"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                              <Input/>
                 </Form.Item>

                 <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                            label="e-mail"
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
                            label="Register Date"
                            name="registerdate"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input/>
                </Form.Item>

                 <Form.Item
                                         label="Birth Date"
                                            name="birthdate"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                             <Input/>
                 </Form.Item>

                <Form.Item
                    label="Active"
                    name="isactive"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group
                        options={[
                            {
                                label: "True",
                                value: 1,
                            },
                            {
                                label: "False",
                                value: 0,
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                                    label="Confirmation"
                                    name="isconfirmed"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Radio.Group
                                        options={[
                                            {
                                                label: "True",
                                                value: 1,
                                            },
                                            {
                                                label: "False",
                                                value: 0,
                                            },
                                        ]}
                                    />
                                </Form.Item>
                <Form.Item
                    label="User Type"
                    name="usertype"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group
                        options={[
                            {
                                label: "Teacher",
                                value: "t",
                            },
                            {
                                label: "Parent",
                                value: "p",
                            },
                             {
                               label: "Student",
                                  value: "s",
                               },
                        ]}
                    />
                </Form.Item>
            </Form>
        </Create>
    );
};

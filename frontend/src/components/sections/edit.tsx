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

import {ISection} from "src/interfaces";

export const SectionEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<ISection>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                            <Form.Item name="sectionid" initialValue="-1" hidden>
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Section Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                        label="Short Name"
                                        name="shortname"
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

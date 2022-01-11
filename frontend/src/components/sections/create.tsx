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

import {ISection} from "src/interfaces";
import {number} from "prop-types";

export const SectionCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<ISection>();

    const {selectProps} = useSelect<ISection>({
        resource: "section",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
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
        </Create>
    );
};

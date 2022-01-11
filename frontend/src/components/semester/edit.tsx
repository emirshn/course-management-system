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
import dayjs from "dayjs"
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import {ISemester} from "src/interfaces";
import { DatePicker } from "antd";

export const SemesterEdit: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const {formProps, saveButtonProps, queryResult} = useForm<ISemester>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                            <Form.Item name="semesterid" initialValue="-1" hidden>
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Semester Description"
                                name="semesterdescription"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Starting Date"
                                name="startingdate"
                                getValueProps={(value) => ({
                                    value: value ? dayjs(value) : "",
                                })}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker/>
                            </Form.Item>
                            <Form.Item
                                label="Ending Date"
                                name="endingdate"
                                getValueProps={(value) => ({
                                    value: value ? dayjs(value) : "",
                                })}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker/>
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



                        </Form>
        </Edit>
    );
};

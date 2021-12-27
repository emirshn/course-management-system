import {
  Show,
  useShow,
  Typography,
  Tag,
  useOne,
  IResourceComponentsProps,
  MarkdownField,
} from "@pankod/refine";

import { ICourse, ICategory } from "src/interfaces";

const { Title, Text } = Typography;

export const CourseShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ICourse>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.name}</Text>

    </Show>
  );
};

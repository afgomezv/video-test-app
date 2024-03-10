import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id?: number;
  title: string;
  courses: number;
  image: string;
  path: string;
}

export const CardCategory: FC<Props> = ({ title, courses, image, path }) => {
  const navigate = useNavigate();

  const onSeletedCategory = () => {
    navigate(`${path}`);
  };

  return (
    <Card className="py-4" isPressable onClick={onSeletedCategory}>
      <CardHeader className="pb-0 mt-2 px-2 flex-col items-start">
        <h4 className="font-bold text-purple-500 text-xl text-start p-1 uppercase">
          {title}
        </h4>
        <small className="text-default-700 text-sm font-medium px-2">
          {courses} cursos
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-4">
        <Image className="object-cover" src={image} width={270} />
      </CardBody>
    </Card>
  );
};

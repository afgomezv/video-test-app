import { FC } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  content?: string;
  chapter: number;
  score: number;
  image: string;
}

export const ContentCategory: FC<Props> = ({
  id,
  title,
  chapter,
  score,
  image,
}) => {
  const navigate = useNavigate();

  const onSeletedCategory = () => {
    navigate(`${id}`);
  };
  return (
    <Card
      className="py-6 px-4 max-w-80 min-w-40"
      isPressable
      onClick={onSeletedCategory}
    >
      <CardBody key={id} className="overflow-visible py-4 px-2 h-30">
        <Image alt="Courses" className="object-cover" src={image} width={270} />
      </CardBody>
      <CardFooter className="flex flex-col">
        <h4 className="w-full text-start font-bold text-lg text-purple-500 capitalize">
          {title}
        </h4>
        <div className="w-full py-4 flex flex-col text-start">
          <p className="capitalize text-default-400 font-bold p-1">
            {chapter} capitulos
          </p>
          <p className="text-sm font-semibold capitalize p-1">
            puntaje: {score}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

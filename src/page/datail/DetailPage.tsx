import { Button, Link } from "@nextui-org/react";
import YoutubePlayer from "react-player/youtube";
import { cursoOne } from "../../data";

export const DetailPage = () => {
  const url = "https://youtu.be/LM96bYiVbUs?si=kiYprSx7J70aiOZl";
  return (
    <>
      <div className="flex container  max-w-5xl mx-auto p-4 mt-10">
        <section className="w-[630px]">
          <div>
            <YoutubePlayer url={url} controls></YoutubePlayer>
            <h3 className="mt-6 text-xl font-bold capitalize">
              1.1 introduccion gestión empresarial
            </h3>
            <p className="mt-4 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quia perferendis eos maxime optio explicabo repudiandae id
              voluptate, quam est dolor qui eum reiciendis eaque iste nihil
              reprehenderit modi quae.
            </p>
          </div>
        </section>
        <section className="flex flex-col px-6 gap-2">
          {cursoOne.map((item) => (
            <Button
              key={item.id}
              className="capitalize w-full flex justify-start"
              color="secondary"
              radius="none"
              variant="faded"
            >
              {item.title}
            </Button>
          ))}
        </section>
      </div>
      <div className="w-full container mx-auto max-w-5xl flex flex-row justify-between items-center mt-4">
        <Link href="/home/bussines">
          <Button className="capitalize" color="secondary" size="lg">
            volver
          </Button>
        </Link>
      </div>
    </>
  );
};

import { Button, Link } from "@nextui-org/react";
import { ContentCategory } from "../../components";
import { bussines } from "../../data";

export const CategoryPage = () => {
  return (
    <div className="container max-w-5xl mx-auto p-4 mt-10">
      <section className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {bussines.map((item) => (
          <ContentCategory
            key={item.id}
            id={item.id}
            title={item.title}
            chapter={item.chapter}
            score={item.score}
            image={item.image}
          />
        ))}
      </section>
      <div className="w-full container mx-auto max-w-5xl flex flex-row justify-between items-center mt-4">
        <Link href="/home">
          <Button className="capitalize" color="secondary" size="lg">
            volver
          </Button>
        </Link>
      </div>
    </div>
  );
};

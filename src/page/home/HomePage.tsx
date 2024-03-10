import { CardCategory } from "../../components";
import { categories } from "../../data";

export function HomePage() {
  return (
    <div className="container max-w-5xl mx-auto p-4 mt-10">
      <section className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {categories.map((category) => (
          <CardCategory
            key={category.id}
            title={category.title}
            courses={category.courses}
            image={category.image}
            path={category.path}
          />
        ))}
      </section>
    </div>
  );
}

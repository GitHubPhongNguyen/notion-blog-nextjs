export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex space-x-2 flex-wrap">
      {categories.map((category) => (
        <span
          key={category}
          className="bg-secondary rounded-full px-4 py-2 md:px-3 md:py-[6px] text-xs"
        >
          {category}
        </span>
      ))}
    </div>
  );
}

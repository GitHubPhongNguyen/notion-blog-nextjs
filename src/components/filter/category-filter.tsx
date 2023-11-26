'use client';

import { useRecoilState } from 'recoil';

import Category from '@/components/filter/category';
import { categoriesState } from '@/states/categories';

export default function CategoryFilter({
  allCategories,
}: {
  allCategories: string[];
}) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const clearAllActive = categories.selected.length > 0;

  const handleClearAll = () => {
    setCategories({
      selected: [],
      active: [],
    });
  };

  return (
    <div className="flex flex-col space-y-4 items-start">
      <div className="flex items-center">
        <h2 className="text-xl font-bold">Read by tag</h2>
        <button
          onClick={handleClearAll}
          className={`relative -right-10 text-xs ${
            !clearAllActive &&
            'pointer-events-none text-gray-300 dark:text-gray-600'
          }`}
        >
          Remove all
        </button>
      </div>
      <div className="flex min-h-[56px] flex-wrap justify-start gap-y-[0.3rem]">
        {allCategories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  );
}

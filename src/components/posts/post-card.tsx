'use client';

import Image from 'next/image';
import Link from 'next/link';

import CategoryList from '@/components/category-list';
import { Post } from '@/types/post';

export default function PostCard({
  post: { slug, title, date, cover, categories },
}: {
  post: Post;
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-xl shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl dark:shadow-black">
        <div className="relative h-60">
          <Image
            src={cover}
            alt="cover image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col p-4">
          <h3 className="truncate text-lg md:text-2xl font-bold">{title}</h3>
          <time className="mb-2 text-sm text-gray-400 mt-1">{date}</time>
          <CategoryList categories={categories} />
        </div>
      </article>
    </Link>
  );
}

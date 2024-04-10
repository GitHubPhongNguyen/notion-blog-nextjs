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
      <article className="mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl p-2 pb-4 shadow-xl shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl dark:shadow-black">
        <div className="relative mb-4 h-60 overflow-hidden rounded-xl">
          <Image
            src={cover}
            alt="cover image"
            fill
            quality={80}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 truncate text-lg font-bold md:text-lg">
            {title}
          </h3>
          <time className="mb-4 text-sm text-gray-400">{date}</time>
          <CategoryList categories={categories} />
        </div>
      </article>
    </Link>
  );
}

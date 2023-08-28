'use client';

import { useState } from 'react';

import PostCard from '@/components/posts/post-card';
import { Post } from '@/types/post';

const INITIAL_NUM_POSTS = 6;
const ADDITIONAL_NUM_POSTS = 6;

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  const [numPosts, setNumPosts] = useState(INITIAL_NUM_POSTS);

  const handleLoadMore = () => {
    setNumPosts((prevNumPosts) => prevNumPosts + ADDITIONAL_NUM_POSTS);
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-3xl font-bold drop-shadow-xl drop-shadow-gray-400">Bài viết liên quan</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
        {posts.slice(0, numPosts).map((post) => (
          <li key={post.slug}>
            <div
              key={post.slug}
              className="transition-all duration-300 hover:scale-[1]"
            >
              <PostCard post={post} />
            </div>
          </li>
        ))}
      </ul>
      {numPosts < posts.length && (
        <button
          onClick={handleLoadMore}
          className="mt-10 self-center rounded-3xl bg-red-500 px-8 py-2 text-white opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
        >
          Load More
        </button>
      )}
    </section>
  );
}

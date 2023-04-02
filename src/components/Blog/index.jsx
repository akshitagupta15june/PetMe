import React from 'react';
import { posts } from '../../helpers/postsForBlog';

export function BlogTemplate() {
  return (
    <div className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 md:w-[700px] xl:grid-cols-3 xl:w-[1120px]">
      {posts.map((post) => (
        <div key={post.id} className="grid gap-4 justify-items-center mx-20 md:mx-0">
          <img
            src={post.poster}
            alt="blog-poster"
            className="w-[15rem] h-[12rem] rounded-lg md:w-full"
          />
          <h2>{post.title}</h2>
          <p className="text-center">{post.description}</p>
          <a
            href={post.read}
            className="text-center text-blue-500 hover:text-blue-700"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}

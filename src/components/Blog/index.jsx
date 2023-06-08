import React from 'react';
import { posts } from '../../helpers/postsForBlog';
import HeroPhoto from '../../assets/cats-dogs.jpg';

export function BlogTemplate() {
  return (
    <>
      <div
        className="flex flex-col h-[150px] items-center justify-start w-full md:mb-0 md:h-[300px]  xl:h-[400px]"
      >
        <img
          src={HeroPhoto}
          alt="Shows 2 cats and 2 dogs looking direct to the user, with their paws on the table"
          className="w-full object-cover"
        />
        <h2 className="text-xl font-bold text-center md:text-3xl">A Blog For Pet Lovers And Their Pet Stories</h2>
      </div>

      <div className="grid grid-cols-1 mx-auto mt-5 mb-10 gap-4 md:grid-cols-2 md:w-[700px] md:mt-0 xl:grid-cols-3 xl:w-[1120px]">
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
    </>
  );
}

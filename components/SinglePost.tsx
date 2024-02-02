"use client";

import React, { FC } from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";

// interface SinglePostProps {
//   post: Object;
// }

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  const image =
    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?";

   
  return (
    <div className="my-6 px-6 py-6">
      <div className="flex justify-end gap-2 items-center">
        <h2 className="text-semibold text-slate-700">
          @{post?.author.username}
        </h2>
      </div>
      <div className="my-6">
        <Image
          src={post?.coverImage?.url || image}
          alt="blog_post_CoverImage"
          height={500}
          width={500}
          priority
          className="w-full"
        />
      </div>
      <div className="my-3">
        <p className="text-3xl font-semibold ">{post?.title}</p>
      </div>
      <div className="my-6 flex gap-1 items-center">
        <h3 className="text-lg font-bold uppercase">{post?.author?.name}</h3>
        <Avatar src={post?.author?.profilePicture} alt="author_image" />
      </div>
      <div className="my-3">
        <div
          className="my-3 text-xl"
          dangerouslySetInnerHTML={{ __html: post?.content?.html }}
        />
      </div>
    </div>
  );
};

export default SinglePost;

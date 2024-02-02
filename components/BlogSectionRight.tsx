"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Link from "next/link";

interface HeroSectionRightProps {
  username: string;
  profilePic: string;
  posts: {
    node: { coverImage: { url: string }; title: string; brief: string };
  }[];
}

const BlogSectionRight: FC<HeroSectionRightProps> = ({
  username,
  profilePic,
  posts,
}) => {
  const image =
    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?";

  return (
    <div className="rounded-lg lg:max-h-screen overflow-y-scroll">
      <span className='my-2 uppercase text-md font-semibold'>latest post</span>
      <div>
        {posts.map((element, index) => {
          return (
            <div key={index} className="my-6 w-[90%] mx-auto">
              <div>
                <Image
                  src={element?.node?.coverImage?.url || image}
                  alt="coverImage"
                  height={200}
                  width={300}
                  className="w-full mx-auto min:h-[200px] max:h-[200px] 2xl:max-h-[280px] 2xl:min-h-[280px] rounded-lg"
                  priority
                />
              </div>

              <div className="my-3 px-1">
                <h1 className="text-lg font-semibold 2xl:text-xl">
                  {element.node.title}
                </h1>
              </div>
              <div className="px-1">
                <p>{element.node.brief.slice(0, 100)}</p>
              </div>

              <div>
                <div className="my-3 flex items-center">
                  <h2 className="text-sm mr-2 font-regular text-slate-600">
                    @{username}
                  </h2>
                  <Avatar
                    src={profilePic}
                    alt="user_imgage"
                    sx={{ width: 24, height: 24 }}
                  />
                </div>
              </div>

              <div>
                <Link href={`/post/${element.node.id}`}>
                  <button className="uppercase py-2 px-4 border-2 border-black text-sm">
                    read more
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSectionRight;

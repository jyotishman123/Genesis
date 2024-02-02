import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  posts: {
    node: {
      coverImage: {
        url: string;
      };
      title: string;
      id: string; // Assuming 'id' is a string; adjust if needed
      // Add other properties as needed
    };
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ posts }) => {
  const image =
    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?";
  
  return (
    <div className="border min-h-[400px] max-h-[400px]  relative">
      <div>
        <Image
          src={posts?.node?.coverImage?.url || image}
          alt="coverImage"
          height={200}
          width={200}
          className="w-full sm:h-[160px] h-[200px] 2xl:h-[230px]"
          priority
        />
      </div>
      <div className="my-2 px-3 py-2 text-md font-bold">
        <h2>{posts?.node?.title.slice(0, 80)}</h2>
      </div>

      <div className="px-3 absolute bottom-5">
        <Link href={`/post/${posts?.node?.id}`}>
          <button className="text-sm font-semibold">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

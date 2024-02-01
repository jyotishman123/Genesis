"use client";

import { useEffect, useState } from "react";
import { getBlogPost } from "@/helper/getBlogPost";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";
import SinglePost from "@/components/SinglePost";

const Page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [post, setPost] = useState<null | any>(null);
  useEffect(() => {
    async function getPost() {
      try {
        const postById = await getBlogPost(id);
        setPost(postById);
      } catch (error) {
        setPost(false);
      }
    }
    if (id) {
      getPost();
    }
  }, [id]);

  if (!post) {
    return <Loader />;
  }

  return (
    <div className="border">
      <div>
        <SinglePost post={post.post} />
      </div>
    </div>
  );
};

export default Page;

import React from 'react';
import { getPost } from '@/helper/getPost';
import BlogSectionLeft from './BlogSectionLeft';
import BlogSectionRight from './BlogSectionRight';

interface HeroSectionProps {}

const BlogSection = async () => {
  const data = await getPost();
  if (!data) {
    return;
  }
  const { username, profilePicture} = data.user;

  const posts = data?.user?.posts?.edges[0];
  const [, ...newposts] = data?.user?.posts?.edges;

  return (
    <div className='my-[5%]'>
      <div className='flex flex-col lg:flex-row w-full gap-2'>
        <div className=' basis-2/3'>
          <BlogSectionLeft username={username} profilePic={profilePicture} post={posts} />
        </div>
        <div className=' my-6 lg:my-0  basis-1/3'>
          <BlogSectionRight username={username} profilePic={profilePicture} posts={newposts} />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
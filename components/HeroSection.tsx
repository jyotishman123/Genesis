import React, { FC } from 'react';
import { getPost } from '@/helper/getPost';
import HeroSectionLeft from './HeroSectionLeft';
import HeroSectionRight from './HeroSectionRight';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = async (): Promise<JSX.Element | void> => {
  const data = await getPost();
  if (!data) {
    return;
  }
  const { username, profilePicture, name } = data.user;

  const posts = data?.user?.posts?.edges[0];
  const [, ...newposts] = data?.user?.posts?.edges;

  return (
    <div className='my-6 py-6 px-6'>
      <div className='flex w-full gap-2'>
        <div className=' basis-2/3'>
          <HeroSectionLeft username={username} profilePic={profilePicture} post={posts} node={''} />
        </div>
        <div className='  basis-1/3'>
          <HeroSectionRight username={username} profilePic={profilePicture} posts={newposts} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
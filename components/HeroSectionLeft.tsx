import React, { FC } from 'react';
import Image from 'next/image';
import { Avatar } from '@mui/material';

interface HeroSectionLeftProps {
  username: string;
  profilePic: string;
  // post: string;
  // node: string;
  post: { node: { coverImage: { url: string }; title: string; brief: string } }[];
}

const HeroSectionLeft: FC<HeroSectionLeftProps> = ({ username, profilePic, post }) => {
  return (
    <div className='border-2 rounded-xl p-6 max-h-[1200px]'>
      <div>
        <Image src={post?.node?.coverImage?.url} alt='coverImage' height={300} width={500} priority className='w-full' />
      </div>

      <div className='my-3'>
        <h1 className='text-3xl font-semibold'>{post?.node?.title}</h1>
      </div>

      <div className='my-3 flex items-center'>
        <h2 className='text-lg mr-6 font-regular text-slate-600'>@{username}</h2>
        <Avatar src={profilePic} alt='user_imgage' />
      </div>

      <div className='my-6'>
        <p>{post?.node?.brief}</p>
      </div>

      <div>
        <button className='uppercase py-3 px-6 border-2 border-black'>Read more</button>
      </div>

      <div>

      </div>

    </div>
  );
}

export default HeroSectionLeft;
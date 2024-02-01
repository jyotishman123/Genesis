"use client"

import React, { FC } from 'react';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import Link from 'next/link';

interface HeroSectionLeftProps {
  username: string;
  profilePic: string;
  // post: string;
  // node: string;
  post: { node: { coverImage: { url: string }; title: string; brief: string } }[];
}

const BlogSectionLeft: FC<HeroSectionLeftProps> = ({ username, profilePic, post }) => {



  return (
<<<<<<< HEAD:components/BlogSectionLeft.tsx
     <div className=''>
=======
 

     <div className='p-6 '>
 
>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4:components/HeroSectionLeft.tsx
             <div>
                   <Image src={post?.node?.coverImage?.url} alt='coverImage' height={300} width={500} priority className='w-full  sm:-h-[400px] xl-max-h-[600px] rounded-md border shadow-xl' />
             </div>

             <div className='my-3'>
                   <h1 className='sm:text-3xl  text-lg font-semibold '>{post?.node?.title}</h1>          
             </div>

              <div className='sm:my-3 my-2 flex items-center'>
                   <h2 className='sm:text-lg text-s mr-6 font-regular text-slate-600'>@{username}</h2>
                   <Avatar src={profilePic} alt='user_image' />
              </div>
               
              <div className='my-6'>
                  <p className='text-sm sm:text-lg class'>{post?.node?.brief}</p>
              </div>

              <div>
<<<<<<< HEAD:components/BlogSectionLeft.tsx
                <Link href={`/post/${post?.node?.id}`}> 
                  <button className='uppercase py-2 px-4 border-2 text-sm border-black'>Read more</button>
                </Link>
=======
                  <button className='uppercase py-2 px-4 border-2 text-sm rounded-md shadow-md border-black'>Read more</button>
>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4:components/HeroSectionLeft.tsx
              </div>

              <div>
                
              </div>

     </div>

  );
}

<<<<<<< HEAD:components/BlogSectionLeft.tsx
export default BlogSectionLeft;
=======
export default HeroSectionLeft;


>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4:components/HeroSectionLeft.tsx

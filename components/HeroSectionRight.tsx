"use client"

import React, { FC } from 'react';
import Image from 'next/image';
import { Avatar } from '@mui/material';

interface HeroSectionRightProps {
     username: string;
     profilePic: string;
     posts: { node: { coverImage: { url: string }; title: string; brief: string } }[];
}

const HeroSectionRight: FC<HeroSectionRightProps> = ({ username, profilePic, posts }) => {
     return (
          <div className='rounded-lg sm:max-h-screen overflow-y-scroll'>
               <div>
                    {posts.map((element, index) => {
                         return (
                              <div key={index} className='my-6 w-[90%] mx-auto'>
                                   <div>
                                        <Image src={element?.node?.coverImage?.url} alt='coverImage' height={200} width={300} className='w-full mx-auto max-h-[200px] rounded-lg' priority />
                                   </div>

                                   <div className='my-3 px-1'>

                                        <h1 className='text-lg font-semibold'>{element.node.title}</h1>
                                   </div>
                                   <div className='px-1'>
                                        <p>{element.node.brief.slice(0, 100)}</p>
                                   </div>

                                   <div>
                                        <div className='my-3 flex items-center'>
                                             <h2 className='text-sm mr-2 font-regular text-slate-600'>@{username}</h2>
                                             <Avatar src={profilePic} alt='user_imgage' sx={{ width: 24, height: 24 }} />
                                        </div>
                                   </div>

                                   <div>
                                        <button className='uppercase py-2 px-4 border-2 border-black text-sm'>read more</button>
                                   </div>

                              </div>
                         )
                    })}
               </div>
          </div>
     );
}

export default HeroSectionRight;
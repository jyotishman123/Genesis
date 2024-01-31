import React, { FC } from 'react';
import Image from 'next/image';
import { Avatar } from '@mui/material';

interface HeroSectionLeftProps {
  username: string;
  profilePic: string;
  post: string;
}

const HeroSectionLeft: FC<HeroSectionLeftProps> = ({ username, profilePic, post }) => {


 
  

  return (
     <div className='p-6'>
             <div>
                   <Image src={post?.node?.coverImage?.url} alt='coverImage' height={300} width={500} priority className='w-full  sm:-h-[400px] xl-max-h-[600px]' />
             </div>

             <div className='my-3'>
                   <h1 className='sm:text-3xl  text-lg font-semibold'>{post?.node?.title}</h1>          
             </div>

              <div className='sm:my-3 my-2 flex items-center'>
                   <h2 className='sm:text-lg text-s mr-6 font-regular text-slate-600'>@{username}</h2>
                   <Avatar src={profilePic} alt='user_imgage' />
              </div>
               
              <div className='my-6'>
                  <p className='text-sm sm:text-lg'>{post?.node?.brief}</p>
              </div>

              <div>
                  <button className='uppercase py-2 px-4 border-2 text-sm border-black'>Read more</button>
              </div>

              <div>
                
              </div>

     </div>
  );
}

export default HeroSectionLeft;
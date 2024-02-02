'use client'

import React, { FC, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface MobileNavProps {
  user: {
    me: {
      name: string;
      profilePicture: string;
    };
  };
}

const MobileNav: FC<MobileNavProps> = ({ user }) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div>
      <div onClick={() => setShowNav((prev) => !prev)}>
        {showNav ? <CloseIcon /> : <MenuIcon />}
      </div>
      {showNav && (
        <div className='fixed right-0 w-[40vw] shadow-xl py-6 px-6'>
          <div className='flex justify-end items-center flex-col'>
            <ul className='text-end'>
              <Link href='/Github'>
                <li className='my-2 text-xl uppercase'>Github</li>
              </Link>
              <Link href='/Blogs'>
                <li className='my-2 text-xl uppercase'>Blog</li>
              </Link>
              <li className='my-6 flex'>
                <span className='mx-2'>{user?.me?.name}</span>
                <Avatar src={user?.me?.profilePicture} alt='user_image' />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
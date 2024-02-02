'use client'

import React, { useEffect, useState } from 'react';
import { getUserGithubRepo } from '@/helper/getGithubApi';
import Link from 'next/link';
import BookIcon from '@mui/icons-material/Book';

interface Repository {
  clone_url: string;
  name: string;
  visibility: string;
  language: string | null;
  owner: {
    html_url: string;
  };
}

const Repositories = () => {
  const [repo, setRepo] = useState<Repository[] | null>(null);

  useEffect(() => {
    async function getRepo() {
      try {
        const response = await getUserGithubRepo();
        const repoJson = await response.json();
        setRepo(repoJson);
      } catch (error) {
        console.log(error);
        setRepo(null);
      }
    }
    getRepo();
  }, []);

  if (!repo) {
    return (
      <div className='flex justify-center py-6 items-center'>
        <h1 className='my-6 text-3xl font-bold'>Loading your Repositories....</h1>
      </div>
    );
  }

  return (
    <div className='py-3 px-3'>
      <div>
        <h2 className='text-lg font-semibold'>My Repositories</h2>
      </div>

      <div className='grid xl:grid-cols-2 gap-4 my-6'>
        {repo.map((element, index) => {
          return (
            <div key={index} className=' shadow-sm border hover:scale-100 py-4 px-6 min-h-[100px] max-h-[100px] relative'>
              <Link href={element?.clone_url}>
                <div>
                  <div className='text-md font-semibold flex items-center'>
                    <BookIcon className='mr-2' /> <span>{element?.name}</span>{' '}
                    <span className='ml-6 text-xs font-light border border-black py-1 px-2 rounded-full'>{element?.visibility}</span>{' '}
                  </div>
                </div>
                <div>
                  <div className='absolute bottom-[5%] left-[2%] px-6'>
                    {element?.language && (
                      <h4 className='text-s'>
                        <span className='h-[10px] w-[10px] bg-yellow-400 rounded-full inline-block'></span> {element?.language}
                      </h4>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Link href={repo[0]?.owner?.html_url}>
        <p className='text-md font-semibold text-blue-500'>show more...</p>
      </Link>
    </div>
  );
};

export default Repositories;

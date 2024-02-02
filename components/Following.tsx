"use client";

import React, { useState, useEffect, use } from "react";
import { getUsersFollowing } from "@/helper/getGithubApi";
import { Avatar } from "@mui/material";
import Link from "next/link";

const Following = () => {
  const [following, setFollowing] = useState(null);

  useEffect(() => {
    async function getMyFollowings() {
      try {
        const followers = await getUsersFollowing();
        const jsonData = await followers.json();
        setFollowing(jsonData);
      } catch (error) {
        console.log(error);
        setFollowing(null);
      }
    }
    getMyFollowings();
  }, []);

   
  if (!following) {
    return (
      <div className="flex justify-center py-6 items-center">
        <h1 className="my-6 text-3xl font-bold">Loading your Followings....</h1>
      </div>
    );
  }

  return (
    <div className="py-3 px-3">
      <div>
        <h2 className="text-lg font-semibold">My Following</h2>
      </div>

      <div className="grid xl:grid-cols-2  max-h-[500px] overflow-y-scroll   gap-4 my-6">
        {following.map((element, index) => {
          return (
            <Link href={element?.html_url} key={index}> 
            <div
              
              className=" shadow-sm border hover:scale-100  flex items-center justify-around py-4 px-6 min-h-[100px] max-h-[100px] relative"
            >
             
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={element?.avatar_url}
                  sx={{ width: 56, height: 56 }}
                />
              </div>
              <div>
                   <h1 className="text-xl my-1 font-bold">{element?.login}</h1>
                   
              </div>
            </div>
            </Link>
          );
          
        })}
         <Link href={'https://github.com/Devkant21?tab=following'}> 
         <p className='text-md font-semibold text-blue-500'>show more...</p>
         </Link>
      </div>
    </div>
  );
};

export default Following;

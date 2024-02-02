'use client'

import React,{useState} from 'react'
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import Repositories from './Repositories';
import Followers from './Followers';
import Following from './Following';
 



const GithubRepo = () => {
 
  const [selectedNav, setSelectedNav] = useState<string>('Repositories');

  function setNavigation(navItem: string){
       setSelectedNav((prev) => prev = navItem)
  }


  return (
      <div>
           <nav className='py-3 px-3'>
               <ul className='flex flex-col sm:flex-row justify-around items-start'>
                <li className='flex items-center my-1'><BookIcon className='mr-2'/> <span onClick={()=>{setNavigation('Repositories')}} className={selectedNav === 'Repositories' ? 'text-blue-500 font-bold uppercase cursor-pointer': 'text-black font-semibold cursor-pointer'}>Repositories</span></li>
                <li className='flex items-center my-1'><PersonIcon className='mr-2'/> <span  onClick={()=>{setNavigation('Followers')}} className={selectedNav === 'Followers' ? 'text-blue-500 font-bold uppercase cursor-pointer': 'text-black font-semibold cursor-pointer'}>Followers</span></li>
                <li className='flex items-center my-1'><PersonIcon className='mr-2'/> <span   onClick={()=>{setNavigation('Following')}} className={selectedNav === 'Following' ? 'text-blue-500 font-bold uppercase cursor-pointer': 'text-black font-semibold cursor-pointer'}>Following</span></li>
               </ul>
           </nav>


        <div>
             {selectedNav === 'Repositories' && <Repositories/>}
             {selectedNav === 'Followers' && <Followers/>}
             {selectedNav === 'Following' && <Following/>}


        </div>


      </div>
  )
}

export default GithubRepo
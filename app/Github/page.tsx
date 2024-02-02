import React from 'react'
import { getGitubUserDetails } from '@/helper/getGithubApi'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import GithubRepo from '@/components/GithubRepo';
import GitHubCalendar from 'react-github-calendar';
 
type Props = {}

const page = async (props: Props) => {



 const githubData = await getGitubUserDetails();
 const jsonData = await githubData.json()

 console.log(jsonData)
 if(!jsonData?.id){
      return
 }

  return (
      <div className='my-6 py-6'>
             <div className='my-6 py-6'>
                  <h1 className='font-bold text-3xl'>Github</h1>
             </div>

          <div className='my-6 py-3  justify-center flex flex-col lg:flex-row items-center gap-1 p-2'>
                   
                       
                   <div className='py-6 px-6 lg:-2/5 my-3 w-2/2'>
                             <div className='my-3'>
                               <Image src={jsonData?.avatar_url} className='rounded-full' alt='github_avatar' height={300} width={300} priority />
                             </div>
                             <div className='my-2'>
                                <h1 className='text-xl my-1 font-bold'>{jsonData?.name}</h1>
                                <h2 className='text-lg my-1 text-slate-700'>@{jsonData?.login}</h2>
                                <h3 className='my-2'>{jsonData?.bio}</h3>
                             </div>
                             <div className='flex my-2'>
                                   <span className='mr-2 flex items-center'><PersonIcon className='mr-1'/>  {jsonData?.followers} Followers</span>
                                   <span className='ml-2 flex items-center'><PersonIcon className='mr-1'/>  {jsonData?.following} Following</span>

                             </div>
                            
                   </div>

                        

                   <div className='lg:w-3/5 w-2/2'>

                           <GithubRepo /> 
                           

                   </div>
         
         
         
          </div>

            <div className='py-2'>
             <h5 className='my-6 text-lg font-bold'>Contribution</h5>
             <div className='flex justify-center '> 
            <GitHubCalendar username="devkant21" colorScheme='light' />
            </div>

            </div>


      </div>
  )
}

export default page
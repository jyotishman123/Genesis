import React from 'react'
import { getGitubUserDetails } from '@/helper/getGithubApi'
import Image from 'next/image'
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

          <div className='border border-red-500 my-6 py-3'>
                   
                      <div className=''>
                           <Image src={jsonData?.avatar_url} className='rounded-full' alt='github_avatar' height={300} width={300} priority />
                      </div>

                      <div>
                            <div>
                                 <h1></h1>
                            </div>
                      </div>

          </div>


      </div>
  )
}

export default page
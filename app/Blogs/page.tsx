import React from 'react'
import { getAllBlogPost } from '@/helper/getAllBlogPost'
import BlogCard from '@/components/BlogCard'


type Props = {}

const page = async (props: Props) => {

   const blogPosts = await getAllBlogPost();
  
   if(!blogPosts.publication){
        return;
   }

  const allPost = blogPosts?.publication?.posts?.edges
  

  return (
    <div className='my-6 py-6'>
                

                    <div>
                       <h1 className='text-3xl font-semibold'>All Post</h1>
                    </div>

                    <div>
                           <div className='grid grid-cols-1 sm:grid-cols-2 my-6 py-6  lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                              {allPost?.map((posts: any,index: any)=>{
                                 return(
                                  <div key={index}> 
                                      <BlogCard posts={posts}/>
                                   </div>   
                                 )
                              })}
                           </div>
                    </div>


    </div>
  )
}

export default page
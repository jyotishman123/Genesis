 

import { request, gql } from 'graphql-request'

export const getBlogPost = async (id:string) =>{
    const query = gql`
    query Post {
      post(id: "${id}") {
         id
         slug
         title
         author{
           name
           username
           profilePicture
          
        }
         coverImage{
          url
        }
        content{
           markdown
           html
        }
       
      }
    }
    `
  
    return request('https://gql.hashnode.com', query)
     
  
}
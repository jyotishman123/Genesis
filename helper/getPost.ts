import { gql, GraphQLClient } from "graphql-request";


export async function getPost(): Promise<any> {
    const query = gql`
    query GetUserPosts  {
        user(username: "Dev21") {
          id
          username
          name
          profilePicture
          posts(page: 1, pageSize: 20) {
            edges {
              node {
                title
                brief
                slug
                id
                coverImage{
                  url
                }
               
              }
            }
           
          }
        }
      }
    `;
  
    const endpoint  = process.env.HASHNODE_URL as string;
    const apiKey  = process.env.HASHNODE_TOKEN as string;
  
    const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    });
  
    return graphQLClient.request(query);
  }
  
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
  
    const endpoint: string = process.env.HASHNODE_URL;
    const apiKey: string = process.env.HASHNODE_TOKEN;
  
    const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    });
  
    return graphQLClient.request(query);
  }
  
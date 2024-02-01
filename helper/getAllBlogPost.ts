import { gql, GraphQLClient } from "graphql-request";


export async function getAllBlogPost(): Promise<any> {
  const query = gql`
  query Publication {
    publication(host: "blog.kylerobins.com"){
      isTeam,
      title,
      posts(first:20) {
        edges {
          node {
            id
            title,
            brief,
            url,
            coverImage {
              url
            }
            author {
               username
               
            }
          }
        }
        pageInfo {
          endCursor,
          hasNextPage
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
  
 

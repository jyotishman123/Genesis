

import { gql, GraphQLClient } from "graphql-request";

export async function getUserInfo(): Promise<any> {
  const query = gql`
    query Me {
      me {
        id
        username
        name
        profilePicture
        bio {
          markdown
        }
         socialMediaLinks {
          website
          github
          twitter
          instagram
          facebook
          stackoverflow
          linkedin
          youtube
        }
      }
    }
  `;

  const endpoint = process.env.HASHNODE_URL as string;
  const apiKey = process.env.HASHNODE_TOKEN as string;

  const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
  });

  return graphQLClient.request(query);
}

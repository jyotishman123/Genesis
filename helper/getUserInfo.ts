import { gql, GraphQLClient } from "graphql-request";

export async function getUserInfo(): Promise<any> {
  const query = gql`
    query Me {
      me {
        id
        username
        name
        profilePicture
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

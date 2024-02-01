import { gql, GraphQLClient } from "graphql-request";

export async function getAllUserInfo(): Promise<any> {
  const query = gql`
  query Me {
    me {
      id
      username
      name
      profilePicture
      bio {
        markdown
        html
        text
      }
      profilePicture
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
      badges {
        id
        name
        description
        image
        dateAssigned
        infoURL
        suppressed
      }
      followersCount
      followingsCount
      tagline
      dateJoined
      location
      availableFor
      tagsFollowing {
        id
        name
        slug
        logo
        tagline
        followersCount
        postsCount
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

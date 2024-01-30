

import { gql, request, GraphQLClient } from "graphql-request";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-async-client-component

 




export default async function Home() {
  
  const endpoint = 'https://gql.hashnode.com';
  const apiKey = '2b8ef261-8746-4849-bce4-b1f06b53477a';

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 2b8ef261-8746-4849-bce4-b1f06b53477a`,
    },
  })

  const query = gql`
  query GetUserDetails($username: String!) {
    user(username: jyotishman421) {
      id
      username
      name
      bio {
        # Include fields from the ContentFragment or other relevant fields
        content
        joinedAt
        location
        socialMedia {
          twitter
          github
          linkedin
        }
        # Add more fields as needed
      }
    }
  }
`
const data = await graphQLClient.request(query)
 
console.log(data)
const userdata = data

 
  return (
    <main>
      <h1>{userdata?.me?.name}</h1>
        <img src={userdata?.me?.profilePicture} alt="user" />
    </main>
  );
}

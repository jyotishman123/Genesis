

import { gql, request, GraphQLClient } from "graphql-request";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-async-client-component


async function name() {
  const endpoint = 'https://gql.hashnode.com';
  const apiKey = '2b8ef261-8746-4849-bce4-b1f06b53477a';

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 2b8ef261-8746-4849-bce4-b1f06b53477a`,
    },
  })

  const query = gql`
  query Me {
    me {
      id
      username
      name
      profilePicture
    }
  }
`
const data = await graphQLClient.request<Data>(query)
 return data
}




export default async function Home() {
  

  const userdata = await name()
  console.log(userdata)
  return (
    <main>
      <h1>{userdata.me.name}</h1>
        <img src={userdata.me.profilePicture} alt="user" />
    </main>
  );
}

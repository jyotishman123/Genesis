import { gql, request } from "graphql-request";

export default async function Home() {
  const GET_BLOGS = gql`
  query Publication {
    publication(host: "webcentric.hashnode.dev") {
        isTeam
         title
     about{
        markdown
     }
   }
 }
  `;

  const endpoint = 'https://gql.hashnode.com';
  const apiKey = '47c9830b-9375-4476-9703-d0e0eb604856';

  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const data = await request(endpoint, GET_BLOGS, headers);
    console.log(data);
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }

  return (
    <main>
      <h1>Hashnode graphqlApi</h1>
    </main>
  );
}

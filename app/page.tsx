import { gql, GraphQLClient } from "graphql-request";

interface SocialMediaLinks {
  website?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  stackoverflow?: string;
  linkedin?: string;
  youtube?: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  dateAssigned: string;
  infoURL: string;
  suppressed: boolean;
}

interface Author {
  id: string;
  username: string;
  name: string;
  bio: {
    markdown: string;
    html: string;
    text: string;
  };
  profilePicture: string;
  socialMediaLinks: SocialMediaLinks;
  badges: Badge[];
}

interface UserData {
  followersCount: ReactNode;
  me: {
    followingsCount: ReactNode;
    followersCount: ReactNode;
    badges: any;
    socialMediaLinks: any;
    profilePicture: string | undefined;
    bio: any;
    id: string;
    username: string;
    name: string;
  };
}

const query = gql`
  query Me {
    me {
      id
      username
      name
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

async function fetchData() {
  const endpoint = process.env.HASHNODE_URL;
  const apiKey = process.env.HASHNODE_TOKEN;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
  });

  const data: UserData = await graphQLClient.request(query);
  return data;
}

export default async function Home() {
  const userData = await fetchData();
  console.log(userData);

  return (
    <main>
      <h1 className="p-5 text-center font-medium">{userData.me.name}</h1>
      <h2 className="p-5 text-center font-medium">{userData.me.username}</h2>
      <h2 className="p-5 text-center font-medium">{userData.me.bio.markdown}</h2>
      <p className="p-5 text-center font-medium">Github : {userData.me.socialMediaLinks.github}</p>
      <p className="p-5 text-center font-medium">Website : {userData.me.socialMediaLinks.website}</p>
      <p className="p-5 text-center font-medium">{userData.me.socialMediaLinks.twitter}</p>
      <img src={userData.me.profilePicture} alt="user" />
      <h3 className="p-5 text-center font-medium">{userData.me.followersCount}</h3>
      <h3 className="p-5 text-center font-medium">{userData.me.followingsCount}</h3>
    </main>
  );
}
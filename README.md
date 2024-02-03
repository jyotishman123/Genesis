# GENESIS : Developer&apos;s Portfolio Starter Kit

**Genesis** as the name suggests "The origin or coming into being of something" is no-fuss way of developing the **Portfolio** website using the API&apos;s sourced from [Hashnode](https://hashnode.com/settings/developer) and [Github](https://api.github.com/).

> Create your developer&apos;s Portfolio in minutes using the starter kit.

> Just connect the API&apos;s & PAT [Personal Access Token] and get started.

## For more detailed explanation read here at [Hashnode](https://webcentric.hashnode.dev/genesis-a-developers-portfolio-starter-kit)

## To replicate and spin up the repository in your system, do the following steps =>

 1. Clone the repository
    >git clone git@github.com:jyotishman123/Hashnode-.git

 2. Install the dependencies
    > npm install
 3. Run the server
    > npm run dev

### To populate the user&apos;s data in the web applications, follow the steps below =>

1. Create a **.env** file in the root of the repository.
2. Add the HASHNODE_TOKEN from [Hashnode](https://hashnode.com/settings/developer)
   >HASHNODE_TOKEN=************************
3. Add the HASHNODE_URL
   >HASHNODE_URL=https://gql.hashnode.com
4. Navigate to helper/getAllBlogPost.ts and replace your hashnode blog address in publication
   > publication(host: "webcentric.hashnode.dev")
5. In helper/getPost.ts, replace username by your hashnode username
   > user(username: "jyotishman421")
6. In helper/getGithubApi.ts replace the Github username in the following functions : getGitubUserDetails, getUserGithubRepo, getUserFollowers, getUsersFollowing.
   >example : https://api.github.com/users/jyotishman123
   >if your username is JohnDoe then the API would be https://api.github.com/users/JohnDoe

Feel free to raise an issue if you find any bugs or want to implement any interesting feature.

We&apos;ll look forward to it.

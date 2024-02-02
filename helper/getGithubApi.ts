

export const getGitubUserDetails = async () =>{
      return fetch('https://api.github.com/users/devkant21')
}

export const getUserGithubRepo = async () =>{
      return fetch('https://api.github.com/users/devkant21/repos?page=1&per_page=6')
}

export const getUserFollowers = async () => {
      return fetch('https://api.github.com/users/devkant21/followers')
}

export const getUsersFollowing = async () => {
       return fetch(`https://api.github.com/users/devkant21/following`)
}
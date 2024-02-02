


export const getUserGithubRepo = async () =>{
    return fetch('https://api.github.com/users/devkant21/repos?page=1&per_page=6')
}
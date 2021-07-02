import { apiFetch } from '../utils/FetchUtils';

const baseUrl = 'https://api.github.com';

const getUserRepoDetails = async (userName: string, repoId: string) => {
    let url = `${baseUrl}/repos/${userName}/${repoId}/git/trees/master?recursive=1`;
    return await apiFetch(url);
}

const getUserRepoReadMe = async (userName: string, repoId: string) => {
    let url = `${baseUrl}/repos/${userName}/${repoId}/contents/README.md`;
    return await apiFetch(url);
}

export {
    getUserRepoDetails,
    getUserRepoReadMe
};
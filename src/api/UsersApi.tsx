import { apiFetch } from '../utils/FetchUtils';

const baseUrl = 'https://api.github.com';

const getAllUsers = async (searchText: string, pageNumber: number = 1, pageLimit: number = 50) => {
    let url = `${baseUrl}/search/users`;
    if (searchText) {
        url += `?q=${searchText}&page=${pageNumber}&per_page=${pageLimit}`
    }
    return await apiFetch(url);
};

const getUserRepos = async (userName: string) => {
    let url = `${baseUrl}/users/${userName}/repos`;
    return await apiFetch(url);
}

export {
    getAllUsers,
    getUserRepos
};
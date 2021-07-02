export function apiFetch(url: string, type?: string, data?: any) {
    return fetch(url, {
        method: type,
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch(e => {
            return e;
        });
}

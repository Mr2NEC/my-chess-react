const getGQL = (
    url = 'http://localhost:4000/graphql',
    getHeaders = () =>
        localStorage.token
            ? { Authorization: `Bearer ${localStorage.token}` }
            : {}
) => (query = '', variables = {}) =>
    fetch(url, {
        method: 'POST',
        cors: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...getHeaders(),
        },
        body: JSON.stringify({ query, variables }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.errors) {
                throw new Error(JSON.stringify(data.errors, null, 4));
            }
            const firstKey = Object.keys(data.data)[0];
            return firstKey ? data.data[firstKey] : data.data;
        });

export const gql = getGQL();

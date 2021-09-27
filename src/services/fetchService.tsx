interface RequestObject {
    url: string,
    headers?: any,
    data?: object | string,
    method?: string
}

export default async ({url, headers, data, method}: RequestObject)=> {
    try {
        const response = await fetch(
            url,
            {
                method: method || 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: data ? JSON.stringify(data) : undefined
            }
        )

        if (response.status === 401) {
            console.log('not authenticated user')
        }

        if (response.status === 403) {
            console.log('not allowed to see')
        }
    
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
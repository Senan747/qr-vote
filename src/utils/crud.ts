export const fetchApi = (method: string, body: any) => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(body)
    }
    return options;
}
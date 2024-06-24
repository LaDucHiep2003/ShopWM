const API_DOMAIN = "http://localhost:8000/api/"

export const get = async (patch) => {
    const response = await fetch(API_DOMAIN + patch);
    const result = response.json()
    return result
}
export const post = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "POST",
        headers: {
            Accept: "appliction/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(option)
    });
    const result = response.json()
    return result
}
export const del = async (patch) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "DELETE",
    });
    const result = response.json()
    return result
}

export const patch = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(option)
    });
    const result = await response.json()
    return result
}
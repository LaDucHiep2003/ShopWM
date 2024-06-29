import { get, post } from "../utils/request";


export const login = async (option) => {
    const result = await post("auth/login",option);
    return result;
}

export const getDetailAcc = async () => {
    const result = await get(`auth/detailAcc`);
    return result;
}

export const logout = async () => {
    const result = await get(`auth/logout`);
    return result;
}
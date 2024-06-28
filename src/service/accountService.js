import { get, patch, post } from "../utils/request";


export const getAccountList = async () => {
    const result = await get("accounts");
    return result;
}

export const createAccount = async (option) => {
    const result = await post("accounts/create",option);
    return result;
}
export const editAccount = async (id, option) => {
    const result = patch(`accounts/edit/${id}`, option)
    return result;
}

export const getAccountDetail = async (id) => {
    const result = await get(`accounts/detail/${id}`);
    return result;
}
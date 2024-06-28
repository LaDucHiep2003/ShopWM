import { get, post } from "../utils/request";


export const getAccountList = async () => {
    const result = await get("accounts");
    return result;
}

export const createAccount = async (option) => {
    const result = await post("accounts/create",option);
    return result;
}
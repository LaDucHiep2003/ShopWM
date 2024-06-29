import { get } from "../utils/request";

export const getDashBoard = async () => {
    const result = await get("dashboard");
    return result;
}
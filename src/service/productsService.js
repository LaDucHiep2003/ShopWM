import { get } from "../utils/request"

export const getProductList = async () => {
    const result = get("product");
    return result;
}
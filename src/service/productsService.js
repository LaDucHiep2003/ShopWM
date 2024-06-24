import { del, get, patch } from "../utils/request"

export const getProductList = async () => {
    const result = get("product");
    return result;
}

export const changeStatus = async (id, option) => {
    const result = patch(`product/change-status/${id}`, option)
    return result;
}

export const deleteProduct = async (id) => {
    const result = del(`product/delete/${id}`)
    return result;
}
import { del, get, patch, post } from "../utils/request"

export const getProductList = async () => {
    const result = await get("product");
    return result;
}

export const getProductDetail = async (id) => {
    const result = await get(`product/detail/${id}`);
    return result;
}

export const createProduct = async (option) => {
    const result = await post("product/create",option);
    return result;
}

export const changeStatus = async (id, option) => {
    const result = patch(`product/change-status/${id}`, option)
    return result;
}

export const editProduct = async (id, option) => {
    const result = patch(`product/edit/${id}`, option)
    return result;
}

export const deleteProduct = async (id) => {
    const result = del(`product/delete/${id}`)
    return result;
}

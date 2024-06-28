import { del, get, patch, post } from "../utils/request"


// Product
export const getProductList = async () => {
    const result = await get("product");
    return result;
}

export const getProductDetail = async (id) => {
    const result = await get(`product/detail/${id}`);
    return result;
}

export const statusProduct = async (status) => {
    const result = await get(`product?status=${status}`);
    return result;
}
export const getSearchProduct = async (word) => {
    const result = await get(`product?keyword=${word}`);
    return result;
}

export const getSortProduct = async (key, value) => {
    const result = await get(`product?sortKey=${key}&sortValue=${value}`);
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

// Category

export const getCategoryList = async () => {
    const result = await get("product-category");
    return result;
}

export const getsearchCategory = async (word) => {
    const result = await get(`product-category?keyword=${word}`);
    return result;
}

export const getStatusCategory = async (status) => {
    const result = await get(`product-category?status=${status}`);
    return result;
}

export const changeStatusCategory = async (id, option) => {
    const result = await patch(`product-category/change-status/${id}`, option);
    return result;
}

export const getSortCategory = async (sortKey, sortValue) => {
    const result = await get(`product-category?sortKey=${sortKey}&sortValue=${sortValue}`);
    return result;
}

export const deleteCategory = async (id) => {
    const result = await patch(`product-category/delete/${id}`);
    return result;
}
export const createCategory = async (option) => {
    const result = await post("product-category/create",option);
    return result;
}

export const editCategory = async (id, option) => {
    const result = patch(`product-category/edit/${id}`, option)
    return result;
}
export const getCategoryDetail = async (id) => {
    const result = await get(`product-category/detail/${id}`);
    return result;
}

// Roles
export const getRoleList = async () => {
    const result = await get("roles");
    return result;
}

export const createRole = async (option) => {
    const result = await post("roles/create",option);
    return result;
}
export const editRole = async (id, option) => {
    const result = patch(`roles/edit/${id}`, option)
    return result;
}
export const getRoleDetail = async (id) => {
    const result = await get(`roles/detail/${id}`);
    return result;
}
export const deleteRole = async (id) => {
    const result = await patch(`roles/delete/${id}`);
    return result;
}

// Permission
export const getPermissionsList = async () => {
    const result = await get("roles/permissions");
    return result;
}

export const addPermissions = async (option) => {
    const result = patch(`roles/permissions/addPermissions`, option)
    return result;
}
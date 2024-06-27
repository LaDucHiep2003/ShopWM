import { Link } from "react-router-dom"
import { changeStatusCategory, deleteCategory } from "../../../../service/productsService"
import { useDispatch, useSelector } from "react-redux";
import {reload} from '../../../../actions/reload'

function CategoryList(props) {
    const {item, idx} = props;
    const reloadState = useSelector(state => state.reloadReducer)
    const dispatch = useDispatch()


    const handleChangeStatus = async (id, status) => {
        const newStatus = status === "active" ? "inactive" : "active"

        const result = await changeStatusCategory(id, { status: newStatus })
        if (result) {
            dispatch(reload())
        }
    }


    const handleDelete = async (id) => {
        const result = await deleteCategory(id);
        if (result) {
            dispatch(reload())
        }
    }
    return (
        <>
            <tr>
                <td>
                    <input type="checkbox"
                        name="id"
                        value={item._id} />
                </td>
                <td>
                    {idx}
                </td>
                <td>
                    <img
                        src={item.image}
                        alt={item.name}
                    />
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.position}
                </td>
                <td>
                    {item.status === "active" ? (
                        <button onClick={() => handleChangeStatus(item._id, item.status)} className='badge bg-success'> Hoạt động </button>
                    ) : (
                        <button onClick={() => handleChangeStatus(item._id, item.status)} className='badge bg-danger'> Dừng hoạt động</button>
                    )}
                </td>
                <td>
                    <Link to={`/admin/products/detail/${item._id}`} className='btn btn-secondary btn-sm mr-1'> <b>Chi tiết</b></Link>
                    <Link to={`/admin/products-category/edit/${item._id}`} className='btn btn-warning btn-sm'> <b>Sửa</b></Link>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger btn-sm'> <b>Xóa</b> </button>
                </td>
            </tr>
        </>
    )
}

export default CategoryList
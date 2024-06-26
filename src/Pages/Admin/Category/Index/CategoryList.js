import { Link } from "react-router-dom"

function CategoryList(props) {
    const {item, idx} = props
    const handleChangeStatus = async (id, status) => {
        // const newStatus = status === "active" ? "inactive" : "active"

        // const result = await changeStatus(id, { status: newStatus })
        // if (result) {
        //     onReload()
        // }
    }


    const handleDelete = async (id) => {
        // const result = await deleteProduct(id);
        // if (result) {
        //     console.log("ok");
        // }
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
                    <Link to={`/admin/products/edit/${item._id}`} className='btn btn-warning btn-sm'> <b>Sửa</b></Link>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger btn-sm'> <b>Xóa</b> </button>
                </td>
            </tr>
        </>
    )
}

export default CategoryList
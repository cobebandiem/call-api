import {Link} from 'react-router-dom';
function ProductItem(props) {
    let{id,name,price,status}=props.product;
    let onDelete=(id)=>{
        props.onDelete(id);
    }
    return (
        <tr>
            <td>{props.index+1}</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                {status?<span className="label label-success">Còn hàng</span>:<span className="label label-danger">Hết hàng</span>}
            </td>
            <td>
                <Link to={`product/${id}/edit`} type="button" className="btn btn-warning">Sửa</Link>&nbsp;
                <button type="button" className="btn btn-danger" onClick={()=>onDelete(id)}>Xóa</button>
            </td>
        </tr>

    );
}

export default ProductItem;

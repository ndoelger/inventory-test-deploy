import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ItemDetail() {

const location = useLocation();
const { item } = location.state;

    return (
        <div className='item-detail'>
            <h2>{item.productname}</h2>
            <h3><span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span></h3>
            <Link to={`/item/${item._id}/update`} state={{item: item}}>Edit</Link>
            <button>Delete</button>
        </div>
  )
}
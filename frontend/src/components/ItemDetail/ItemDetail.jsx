import { useLocation, useNavigate, Link } from "react-router-dom";
import { deleteItem } from "../../utilities/items-service";

export default function ItemDetail({ getItem }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state;

  async function removeItem(id) {
    await deleteItem(id);
    getItem();
    navigate("/");
  }

  return (
    <div className="modalDiv">
      <div className="modal">
            <div className="item-detail">
            <h2>{item.productname}</h2>
            <h3>
                <span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span>
            </h3>
            <Link to={`/item/${item._id}/update`} state={{ item: item }}>
                <button>Edit</button>
            </Link>{" "}
            <span> &nbsp; | &nbsp; </span>
            <button onClick={() => removeItem(item._id)}>Delete</button>
            <button onClick={() => navigate(-1)}>Close</button>
            </div>
        </div>
    </div>
  );
}

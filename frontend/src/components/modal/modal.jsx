import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { deleteItem } from "../../utilities/items-service";
import ItemDetail from '../ItemDetail/ItemDetail';
import EditItemForm from '../EditItemForm/EditItemForm';

export default function Modal({ getItem }) {
  const [showForm, setShowForm] = useState();
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

        <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Item Details' : 'Edit Item'}</button>
        { showForm ?
            <EditItemForm getItem={getItem} />
            :
            <ItemDetail getItem={getItem} />
        }

      </div>
    </div>
  );
}

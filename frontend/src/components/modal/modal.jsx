import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { deleteItem } from "../../utilities/items-service";
import ItemDetail from '../ItemDetail/ItemDetail';
import EditItemForm from '../EditItemForm/EditItemForm';
import './Modal.css';

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
        { showForm ?
            <EditItemForm getItem={getItem} />
            :
            <ItemDetail getItem={getItem} />
        }
        <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Item Details' : 'Edit Item'}</button>
      </div>
    </div>
  );
}

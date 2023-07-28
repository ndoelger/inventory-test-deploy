import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { deleteItem, updateItem, getOneItem } from "../../utilities/items-service";

export default function ItemDetail({ getItem }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentItem } = location.state;
  const [item, setItem] = useState({});

  async function removeItem(id) {
    await deleteItem(id);
    getItem();
    navigate("/");
  }

  async function plusMinusOne(changeValue){
    const updatedItemData = {
      _id: item._id,
      productname: item.productname,
      SKU: item.SKU,
      quantity: item.quantity+changeValue,
    }
    
    console.log(updatedItemData);
    await updateItem(updatedItemData);
    fetchOneItem();
    getItem();
  }

  async function fetchOneItem(){
    let oneItem = await getOneItem(currentItem._id);
    setItem(oneItem);
  }

  useEffect(()=>{
    fetchOneItem();
  },[])

  return (
    <div className="item-detail">
    <h2>{item.productname}</h2>
    <h3>
      <span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span>
    </h3>
    <button onClick={() => plusMinusOne(1)}>+1</button>
    <span> &nbsp;&nbsp; </span>
    <button onClick={() => plusMinusOne(-1)}>-1</button>
    <button onClick={() => removeItem(item._id)}>Delete</button>
    <span> &nbsp; | &nbsp; </span>
    <button onClick={() => navigate(-1)}>Close</button>
    </div>
  );
}

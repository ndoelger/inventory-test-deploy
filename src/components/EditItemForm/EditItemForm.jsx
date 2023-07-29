import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateItem, getOneItem } from "../../utilities/items-service";

export default function EditItemForm({ getItem, currentItem, setCurrentItem, fetchOneItem }) {
  const navigate = useNavigate();
  
  const [updatedItem, setUpdatedItem] = useState({
    _id: currentItem._id,
    productname: currentItem.productname,
    SKU: currentItem.SKU,
    quantity: currentItem.quantity,
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateItem(updatedItem);
    getItem();
    navigate(`/`);
  }

  function handleChange(evt) {
    const updatedItemData = {
      ...currentItem,
      [evt.target.name]: evt.target.value,
    };
    setUpdatedItem(updatedItemData);
  }

  useEffect(()=>{
    fetchOneItem();
  },[])

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="productname"
        defaultValue={currentItem.productname}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        defaultValue={currentItem.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="SKU"
        defaultValue={currentItem.SKU}
        onChange={handleChange}
      />
      <button type="submit">Sumbit</button>
      <button onClick={() => navigate(-1)}>Close</button>
    </form>
  );
}

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateItem, getOneItem } from "../../utilities/items-service";

export default function EditItemForm({ getItem }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentItem } = location.state;
  const [item, setItem] = useState({});
  
  const [updatedItem, setUpdatedItem] = useState({
    _id: currentItem._id,
    productname: currentItem.productname,
    SKU: currentItem.SKU,
    quantity: currentItem.quantity,
  });


  const [displayItem, setDisplayItem] = useState({
    _id: currentItem._id,
    productname: currentItem.productname,
    SKU: currentItem.SKU,
    quantity: 0,
  });


  async function fetchOneItem(){
    //console.log(currentItem._id);
    let oneItem = await getOneItem(currentItem._id);
    setDisplayItem(oneItem);
    displayItem.quantity = oneItem.quantity;


    console.log(displayItem);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateItem(updatedItem);
    getItem();
    navigate(`/`);
  }

  function handleChange(evt) {
    const updatedItemData = {
      ...updatedItem,
      [evt.target.name]: evt.target.value,
    };
    setUpdatedItem(updatedItemData);
  }

  useEffect(()=>{
    fetchOneItem();
    
    console.log(displayItem);
  },[])

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="productname"
        value={currentItem.productname}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        value={displayItem.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="SKU"
        value={currentItem.SKU}
        onChange={handleChange}
      />
      <button type="submit">Sumbit</button>
      <button onClick={() => navigate(-1)}>Close</button>
    </form>
  );
}

import { useParams } from "react-router-dom";


export default function ItemDetail({items}) {
  
const { itemid } = useParams();
  

  
    return (
        <>
            {items.map((i) => {
                if (i.id === itemid){
                    return (
                        <div className='item-detail'>
                            <h2>{i.productname}</h2>
                            <h3><span>Qty: {i.quantity}</span> | <span>SKU: {i.SKU}</span></h3>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    )
                }
                return null;
            })}





        </>

  )
}


export default function EditPage({item}) {
    return (
  
        <div className='edit-page'>
          <input>{item.productname}</input>
          <input>Qty: {item.quantity}</input>
          <input>SKU: {item.SKU}</input>
          <button>Save</button>
        </div>
  
    )
  }
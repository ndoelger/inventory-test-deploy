import './ItemCard.css';

export default function ItemCard({item}) {
  return (
    <li className='item-card'>
      <h2>{item.productname}</h2>
      <h3><span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span></h3>
    </li>
  )
}
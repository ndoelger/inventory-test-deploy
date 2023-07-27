import './ItemCard.css';
import { Link, useLocation } from 'react-router-dom';

export default function ItemCard({item}) {
  const location = useLocation();

  return (
    <Link to={`ItemDetail`} state={{item: item}}>
      <li className='item-card'>
        <h2>{item.productname}</h2>
        <h3><span>Qty: {item.quantity}</span> | <span>SKU: {item.SKU}</span></h3>
      </li>
    </Link>
  )
}
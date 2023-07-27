import { Link, useLocation, Outlet } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';
import './ItemsList.css';

export default function ItemsList({ getItem, items }) {
  const location = useLocation();
  const inventory = items.map((i) => {
    return <ItemCard item={i} key={i._id}/>;
  });

  return (
    <>
      <h1>InventoryItems</h1>
      <Link to='AddItem' state={{ background: location }}>Add Item</Link>
      {(items.length !== 0) ? <ul className='items-list'>{inventory}</ul> : <h2>No Items Yet!</h2>}
      <Outlet />
    </>
  )
};
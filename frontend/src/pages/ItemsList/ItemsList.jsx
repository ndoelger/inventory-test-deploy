import { useLayoutEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';


export default function ItemsList({ items }) {
  console.log(items)
  const inventory = items.map((i) => {
    return <ItemCard item={i}/>;
  });



  return (
    <>
      <h1>InventoryItems</h1>
      {(items.length !== 0) ? <ul>{inventory}</ul> : <h2>No Items Yet!</h2>}
    </>
  )
};
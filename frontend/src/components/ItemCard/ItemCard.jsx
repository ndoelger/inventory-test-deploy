export default function ItemCard({item}) {
  return (
    <li>
      <h1>ItemCard</h1>
      <div>{item.productname}</div>
      <div>{item.quantity}</div>
      <div>{item.SKU}</div>            
    </li>
  )
}
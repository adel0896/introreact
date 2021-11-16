export default function MyBasket({ basket }) {
  return (
    <aside className="Mybasket">
      <div className="items">
        <h1>Name of Item</h1>
        <p>Price: 5$ </p>
      </div>
      <p>Total items:{basket.length}</p>
      <div className="form">
        <h3>Checkout</h3>
      </div>
    </aside>
  );
}

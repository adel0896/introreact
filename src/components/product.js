export default function Product(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.price}$</p>
    </article>
  );
}

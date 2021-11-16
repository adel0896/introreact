import Product from "./product";
export default function ProductList({ product }) {
  return (
    <section>
      <Product title={product.productdisplayname} price={product.price} />
      <Product title="bag" />
      <Product title="t-shirt" />
      <Product title="shoes" />
      <Product title="bracelet" />
      <Product title="ring" />
    </section>
  );
}

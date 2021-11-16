import "./App.css";
import Nav from "./components/nav";
import ProductList from "./components/productlist";
import MyBasket from "./components/basket";
function App() {
  let product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };
  let basket = ["bag", "t-shirt", "shoes"];
  return (
    <div className="App">
      <Nav />
      <ProductList product={product} />
      <MyBasket basket={basket} />
    </div>
  );
}
export default App;
// ReactDOM.render(<App />, document.getElementById("root"));

import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "./redux/cartSlice"


const App = () => {

  const products = [
    {
      id: 1,
      name: "laptop",
      price: "50000",
    },
    {
      id: 2,
      name: "mobile",
      price: "20000",
    },
    {
      id: 3,
      name: "tv",
      price: "20000",
    }
  ]
  return (
    <div>
      <h1> shopping cart management </h1>
      <h3> products </h3>

      {
        products.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h3>price:{product.price} </h3>
            <button onClick={() => dispatch(addToCart(product))}>
              add to cart


            </button>
          </div>
        ))

      }
    </div>
  )
}

export default App

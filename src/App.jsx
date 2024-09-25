import React, { useEffect, useState } from "react";
import Nav from "./compnents/nav";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./config/redux/reducers/cartSlice";

function App() {
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart.cartItem);
  // console.log(selector);

  useEffect(() => {
    const getData = () => {
      axios("https://dummyjson.com/products")
        .then((res) => {
          // console.log(res.data.products);
          setProduct(res.data.products);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const addToCart = (item) => {
    // console.log('hello');
    dispatch(
      addCart({
        item,
      })
    );
  };

  return (
    <>
      <Nav />
      <div className="m-10">
        <h1 className="text-center text-3xl font-semibold">Products</h1>
        <div className="flex justify-center gap-6 flex-wrap m-5">
          {product ? (
            product.map((item, index) => {
              return (
                <div key={index}>
                  <div className="card card-compact bg-zinc-300 w-96 shadow-xl">
                    <figure>
                      <div className="object-cover w-52 h-60 bg-cover">
                        <img src={item.images[0]} alt="Shoes" />
                      </div>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p>{item.description.slice(0, 50) + "...."}</p>
                      <div className="card-actions justify-end">
                        <button
                          onClick={() => addToCart(item)}
                          className="btn btn-primary"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

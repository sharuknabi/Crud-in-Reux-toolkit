// import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h4>cart</h4>
      <div className="cartWrapper">
        {products.map((product) => {
          console.log(product);
          <div className="cartCard">
            <img src={product.image} alt={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Cart;

"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../Assets/img/emptyCart.svg";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";
import CartItem from "./CartItem";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  console.log(cartProducts)
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart" id="cart">
      <i
        className="bx bx-x cart__close"
        id="cart-close"
        onClick={toggleCart}
      ></i>

      <h2 className="cart__title-center">My Cart</h2>
      {cartProducts.length === 0 ? (
        <>
          <h6 style={{ textAlign: "center", marginTop: "2rem" }}>
            No item added to the cart
          </h6>
          <Image
            src={emptyCart}
            alt="emptyCart"
            width={100}
            height={100}
            style={{ width: "100%", height: "100%" }}
          />
        
        </>
      ) : (
        cartProducts.map((item, index) => <CartItem item={item} key={index} />)
      )}

      <div className="cart__prices">
      <span className="cart__prices-total">Sub-Total: &#8358;{totalAmount}</span>

        <span className="cart__prices-item">
          {" "}
          Checkout Button here??
        </span>

      </div>
    </div>
  );
};

export default Cart;

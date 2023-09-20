import Image from 'next/image';
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

export const Produxts = (props) => {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();
    const addToCart = () => {
      toast.success("Item added..");
      dispatch(
        cartActions.addItem({
          id,
          title,
          image01,
          price,
        })
      );
    };
  return (
    <article className="products__card">
    <Image
      src={image01}
      alt=""
      height={125}
      className="products__img"
    />

    <h3 className="products__title">{title}</h3>
    <span className="products__price">&#8358;{price}</span>

    <button className="products__button" onClick={addToCart}>
      <i className="bx bx-shopping-bag"></i>
    </button>
    <Toaster
        position="top-center"
        reverseOrder={true}
        containerStyle={{
          zIndex: 99999, // For the container
        }}
        toastOptions={{
          className: "",
          style: {
            zIndex: 99999, // For toasts
          },
        }}
      />
  </article>
  )
}



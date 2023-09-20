import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

const Featured = (props) => {
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
    <article className="featured__card">
      <span className="featured__tag">Sale</span>

      <Image src={image01} alt="" className="featured__img" height={214} />

      <div className="featured__data">
        <h3 className="featured__title">{title}</h3>
        <span className="featured__price">&#8358;{price}</span>
      </div>

      <button className="button featured__button" onClick={addToCart}>
        ADD TO CART
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
  );
};

export default Featured;

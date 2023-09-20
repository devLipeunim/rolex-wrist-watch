import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

const NewArrivals = (props) => {
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
    <article className="new__card swiper-slide">
      <span className="new__tag">New</span>

      <Image src={image01} alt="" height={215} className="new__img" />

      <div className="new__data">
        <h3 className="new__title">{title}</h3>
        <span className="new__price">&#8358;{price}</span>
      </div>

      <button className="button new__button" onClick={addToCart}>
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

export default NewArrivals;

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PK}`);  //$dia template string a dite hobe as cs. 
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2))
  return (
    <div className="w-full">
      <SectionTitle heading="payment" sunmHeading="Please Process"></SectionTitle>
    

      <Elements stripe={stripePromise}>
        <CheckOut cart={cart} price ={price} ></CheckOut>
      </Elements>

    </div>
  );
};

export default Payment;
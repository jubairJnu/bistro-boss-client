import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  return (
    <div className="w-full">
      <SectionTitle heading="payment" sunmHeading="Please Process"></SectionTitle>
    

      <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
      </Elements>

    </div>
  );
};

export default Payment;
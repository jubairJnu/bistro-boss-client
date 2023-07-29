import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';



const CheckOut = () => {
const stripe = useStripe();
const elements = useElements();
const [cardError, setCardError] = useState('')
const handleSubmit = async(event)=>{
  event.preventDefault();
  if(!stripe || !elements){
    return;
  }
  
  const card = elements.getElement(CardElement);
   
  if(card == null){
    return;
  }

  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card,
  });
  if(error){
    setCardError(error.message)
    console.log('card error', error)
  }
  else{
    setCardError('')
    console.log('paymentMethod', paymentMethod)
  }
}



  return (
    <div>
      <form className='m-10 w-2/3'  onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {cardError && <p className='text-red-600'>{cardError} </p>}
    </div>
  );
};

export default CheckOut;
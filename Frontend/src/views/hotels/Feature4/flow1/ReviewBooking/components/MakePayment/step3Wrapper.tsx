// Step3Wrapper.tsx
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Step3 from './Step3';
import { useEffect, useState } from 'react';
import type { Step1Props } from '../types';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Step3Wrapper = (props: Step1Props) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const res = await fetch('http://localhost:3000/payments/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: Math.round(props.roomData.price * 100), // in cents
            currency: 'sgd',
          }),
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error('Failed to fetch clientSecret:', err);
      }
    };

    createPaymentIntent();
  }, [props.roomData.price]);

  if (!clientSecret) return <div>Loading Payment Form...</div>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <Step3 clientSecret={clientSecret} {...props} />
    </Elements>
  );
};

export default Step3Wrapper;

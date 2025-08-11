// Step3Wrapper.tsx
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Step3 from './Step3';
import { useEffect, useState } from 'react';
import type { Step1Props } from '../types';

// Load Stripe publishable key for payment
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const API_BASE = import.meta.env.VITE_API_BASE || '/api'; // default to /api
// Wrapper component for Step3, handles Stripe payment intent creation
const Step3Wrapper = (props: Step1Props) => {
  // State for Stripe client secret
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Create Stripe payment intent when room price changes
    const createPaymentIntent = async () => {
      try {
        const res = await fetch(`${API_BASE}/payments/create-payment-intent`, {
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
        // Log error if payment intent creation fails
        console.error('Failed to fetch clientSecret:', err);
      }
    };

    createPaymentIntent();
  }, [props.roomData.price]);

  // Show loading message until clientSecret is available
  if (!clientSecret) return <div>Loading Payment Form...</div>;

  // Render Stripe Elements and Step3 payment component
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <Step3 clientSecret={clientSecret} {...props} />
    </Elements>
  );
};

export default Step3Wrapper;

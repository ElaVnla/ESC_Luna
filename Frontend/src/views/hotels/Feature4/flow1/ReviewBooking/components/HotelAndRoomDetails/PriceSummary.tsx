import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap';
import { useMemo } from 'react';
import type { Step1Props } from '../types';

type PriceSummaryProps = Step1Props & {
  guests?: number | string; // optional fallback
};

// Map currency codes to symbols for display
const currencySymbolMap: Record<string, string> = {
  SGD: 'S$',
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  KRW: '₩',
  VND: '₫',
  AUD: 'A$',
  CAD: 'C$',
  MYR: 'RM',
  THB: '฿',
  IDR: 'Rp',
};

// Parse guests from hotelParams or fallback value
const parseGuests = (hotelParams: any, guestsFallback?: number | string) => {
  const raw = hotelParams?.guests ?? guestsFallback ?? 1;
  if (typeof raw === 'number') return Math.max(1, raw);
  const m = String(raw).match(/\d+/);
  const n = m ? parseInt(m[0], 10) : NaN;
  return Number.isNaN(n) ? 1 : Math.max(1, n);
};

// Get currency code from room data
const getCurrencyCode = (roomData: any) =>
  roomData?.included_taxes_and_fees_in_currency?.[0]?.currency?.toUpperCase() ||
  roomData?.excluded_taxes_and_fees_currency?.toUpperCase() ||
  roomData?.currency?.toUpperCase?.() ||
  'SGD';

// Format amount as currency string
const formatMoney = (amount: number, code: string) => {
  const symbol = currencySymbolMap[code] || `${code} `;
  // amount here is already in major units (e.g. 647.28)
  return `${symbol}${Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

// Displays a summary of the price paid for the booking
const PriceSummary = ({ control, hotelParams, roomData, guests: guestsFallback }: PriceSummaryProps) => {
  // Calculate total guests
  const guestsTotal = useMemo(() => parseGuests(hotelParams, guestsFallback), [hotelParams, guestsFallback]);

  // Get currency code for display
  const currencyCode = useMemo(() => getCurrencyCode(roomData), [roomData]);

  // Get room charges (prefer converted_price if present)
  const roomCharges = useMemo(() => {
    return Number(roomData?.converted_price ?? roomData?.price ?? 0);
  }, [roomData]);

  // Get taxes and fees (prefer included taxes if present)
  const taxesAndFees = useMemo(() => {
    const amt = Number(roomData?.included_taxes_and_fees_total_in_currency ?? roomData?.included_taxes_and_fees_total ?? 0);
    return isNaN(amt) ? 0 : amt;
  }, [roomData]);

  // Calculate payable now amount (lowest_converted_price or fallback)
  const payableNowCalculated = useMemo(() => {
    const lowest = Number(roomData?.lowest_converted_price ?? roomCharges + taxesAndFees);
    return isNaN(lowest) ? 0 : lowest;
  }, [roomData, roomCharges, taxesAndFees]);

  // If Stripe payment was made and summary saved, override display
  const payableNowFromStripe = useMemo(() => {
    try {
      const s = sessionStorage.getItem('booking_summary');
      if (!s) return null;
      const parsed = JSON.parse(s);
      if (!parsed?.totalPaid) return null;
      const amount = Number(parsed.totalPaid); // already in major units from Step3
      const code = (parsed.currency || currencyCode).toUpperCase();
      return { amount, code };
    } catch {
      return null;
    }
  }, [currencyCode]);

  // Final payable now amount and currency
  const payableNowAmount = payableNowFromStripe?.amount ?? payableNowCalculated;
  const payableNowCurrency = payableNowFromStripe?.code ?? currencyCode;

  return (
    <Card className="shadow rounded-2">
      {/* Card header with title */}
      <CardHeader className="border-bottom">
        <CardTitle as="h5" className="mb-0">
          Price Summary
        </CardTitle>
      </CardHeader>

      <CardBody>
        <ul className="list-group list-group-borderless">
          {/* Guests row */}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Guests</span>
            <span className="fs-6">{guestsTotal}</span>
          </li>

          {/* Room charges row */}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Room Charges</span>
            <span className="fs-5">{formatMoney(roomCharges, currencyCode)}</span>
          </li>

          {/* Taxes & fees row, if present */}
          {taxesAndFees > 0 && (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="h6 fw-light mb-0"> Inc. Taxes &amp; Fees</span>
              <span className="fs-6">{formatMoney(taxesAndFees, currencyCode)}</span>
            </li>
          )}
        </ul>
      </CardBody>

      {/* Card footer showing payable now amount */}
      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">Payable Now</span>
          <span className="h5 mb-0">{formatMoney(payableNowAmount, payableNowCurrency)}</span>
        </div>
        {/* Stripe payment info note, if present */}
        {payableNowFromStripe && (
          <div className="text-muted small mt-1">* Amount reflects Stripe-confirmed charge.</div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PriceSummary;

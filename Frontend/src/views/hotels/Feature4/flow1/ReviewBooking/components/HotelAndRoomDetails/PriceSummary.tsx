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

// Prefer base rate currency; fall back sanely
const getCurrencyCode = (roomData: any) =>
  roomData?.base_rate_currency?.toUpperCase?.() ||
  roomData?.currency?.toUpperCase?.() ||
  'SGD';

// Format amount as currency string
const formatMoney = (amount: number, code: string) => {
  const symbol = currencySymbolMap[code] || `${code} `;
  return `${symbol}${Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const PriceSummary = ({ control, hotelParams, roomData, guests: guestsFallback }: PriceSummaryProps) => {
  // Total guests
  const guestsTotal = useMemo(() => parseGuests(hotelParams, guestsFallback), [hotelParams, guestsFallback]);

  // Currency strictly from base rate currency (or fallback)
  const currencyCode = useMemo(() => getCurrencyCode(roomData), [roomData]);

  // Room charges strictly = base_rate_in_currency (fallback to price)
  const roomCharges = useMemo(() => {
    const base = Number(roomData?.base_rate_in_currency ?? roomData?.price ?? 0);
    return isNaN(base) ? 0 : base;
  }, [roomData]);

  // Stripe-confirmed override after payment (optional)
  const payableNowFromStripe = useMemo(() => {
    try {
      const s = sessionStorage.getItem('booking_summary');
      if (!s) return null;
      const parsed = JSON.parse(s);
      if (!parsed?.totalPaid) return null;
      const amount = Number(parsed.totalPaid); // already in major units
      const code = (parsed.currency || currencyCode).toUpperCase();
      return { amount, code };
    } catch {
      return null;
    }
  }, [currencyCode]);

  // FINAL: Payable Now equals Room Charges unless Stripe override exists
  const payableNowAmount = payableNowFromStripe?.amount ?? roomCharges;
  const payableNowCurrency = payableNowFromStripe?.code ?? currencyCode;
  const guestsLabel = String(hotelParams?.guests ?? (guestsTotal ?? ''));
  return (
    <Card className="shadow rounded-2">
      <CardHeader className="border-bottom">
        <CardTitle as="h5" className="mb-0">Price Summary</CardTitle>
      </CardHeader>

      <CardBody>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Guests</span>
            <span className="fs-6">{guestsLabel}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Room Charges</span>
            <span className="fs-5">{formatMoney(roomCharges, currencyCode)}</span>
          </li>

          {/* Taxes/fees row intentionally removed */}
        </ul>
      </CardBody>

      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">Payable Now</span>
          <span className="h5 mb-0">{formatMoney(roomCharges, currencyCode)}</span>
        </div>
        {payableNowFromStripe && (
          <div className="text-muted small mt-1">* Amount reflects Stripe-confirmed charge.</div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PriceSummary;

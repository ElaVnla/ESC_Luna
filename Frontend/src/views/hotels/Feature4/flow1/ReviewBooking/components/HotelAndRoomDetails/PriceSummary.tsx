import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap';
import { useMemo } from 'react';
import type { Step1Props } from '../types';

type PriceSummaryProps = Step1Props & {
  guests?: number | string; // optional fallback
};

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

const parseGuests = (hotelParams: any, guestsFallback?: number | string) => {
  const raw = hotelParams?.guests ?? guestsFallback ?? 1;
  if (typeof raw === 'number') return Math.max(1, raw);
  const m = String(raw).match(/\d+/);
  const n = m ? parseInt(m[0], 10) : NaN;
  return Number.isNaN(n) ? 1 : Math.max(1, n);
};

const getCurrencyCode = (roomData: any) =>
  roomData?.included_taxes_and_fees_in_currency?.[0]?.currency?.toUpperCase() ||
  roomData?.excluded_taxes_and_fees_currency?.toUpperCase() ||
  roomData?.currency?.toUpperCase?.() ||
  'SGD';

const formatMoney = (amount: number, code: string) => {
  const symbol = currencySymbolMap[code] || `${code} `;
  // amount here is already in major units (e.g. 647.28)
  return `${symbol}${Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const PriceSummary = ({ control, hotelParams, roomData, guests: guestsFallback }: PriceSummaryProps) => {
  const guestsTotal = useMemo(() => parseGuests(hotelParams, guestsFallback), [hotelParams, guestsFallback]);

  const currencyCode = useMemo(() => getCurrencyCode(roomData), [roomData]);

  const roomCharges = useMemo(() => {
    // prefer converted_price if present, else price
    return Number(roomData?.converted_price ?? roomData?.price ?? 0);
  }, [roomData]);

  const taxesAndFees = useMemo(() => {
    // show included taxes if present; otherwise 0
    const amt = Number(roomData?.included_taxes_and_fees_total_in_currency ?? roomData?.included_taxes_and_fees_total ?? 0);
    return isNaN(amt) ? 0 : amt;
  }, [roomData]);

  const payableNowCalculated = useMemo(() => {
    // lowest_converted_price often equals what you charge; fallback to roomCharges + taxes
    const lowest = Number(roomData?.lowest_converted_price ?? roomCharges + taxesAndFees);
    return isNaN(lowest) ? 0 : lowest;
  }, [roomData, roomCharges, taxesAndFees]);

  // If we already charged via Stripe and saved summary, override the display
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

  const payableNowAmount = payableNowFromStripe?.amount ?? payableNowCalculated;
  const payableNowCurrency = payableNowFromStripe?.code ?? currencyCode;

  return (
    <Card className="shadow rounded-2">
      <CardHeader className="border-bottom">
        <CardTitle as="h5" className="mb-0">
          Price Summary
        </CardTitle>
      </CardHeader>

      <CardBody>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Guests</span>
            <span className="fs-6">{guestsTotal}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Room Charges</span>
            <span className="fs-5">{formatMoney(roomCharges, currencyCode)}</span>
          </li>

          {taxesAndFees > 0 && (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="h6 fw-light mb-0"> Inc. Taxes &amp; Fees</span>
              <span className="fs-6">{formatMoney(taxesAndFees, currencyCode)}</span>
            </li>
          )}
        </ul>
      </CardBody>

      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">Payable Now</span>
          <span className="h5 mb-0">{formatMoney(payableNowAmount, payableNowCurrency)}</span>
        </div>
        {payableNowFromStripe && (
          <div className="text-muted small mt-1">* Amount reflects Stripe-confirmed charge.</div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PriceSummary;

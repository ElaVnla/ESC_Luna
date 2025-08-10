import { currency as fallbackCurrencySymbol } from '@/states'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'

type PriceSummaryProps = {
  booking?: {
    price?: number | string
    currency?: string
  }
}

const PriceSummary = ({ booking }: PriceSummaryProps) => {
  const amount =
    typeof booking?.price === 'string'
      ? parseFloat(booking.price)
      : (booking?.price ?? 0)

  // Prefer ISO currency code from booking; fall back to your existing symbol
  const formatted = (() => {
    if (booking?.currency) {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: booking.currency.toUpperCase(),
          maximumFractionDigits: 2,
        }).format(amount)
      } catch {
        // if the code is invalid, fall through to symbol formatting
      }
    }
    // Fallback to your previous symbol formatting
    return `${fallbackCurrencySymbol}${amount.toLocaleString()}`
  })()

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
            <span className="h6 fw-light mb-0">Room Charges</span>
            <span className="fs-5">{formatted}</span>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">Paid</span>
          <span className="h5 mb-0">{formatted}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PriceSummary

import { currency as fallbackCurrencySymbol } from '@/states'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'react-bootstrap'

type PriceSummaryProps = {
  booking?: {
    price?: number | string
    currency?: string
  }
}

// Displays a summary of the price paid for the booking
const PriceSummary = ({ booking }: PriceSummaryProps) => {
  // Parse amount as number
  const amount =
    typeof booking?.price === 'string'
      ? parseFloat(booking.price)
      : (booking?.price ?? 0)

  // Format amount as currency string, prefer ISO code if available
  const formatted = (() => {
    if (booking?.currency) {
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: booking.currency.toUpperCase(),
          maximumFractionDigits: 2,
        }).format(amount)
      } catch {
        // If currency code is invalid, fall back to symbol formatting
      }
    }
    // Fallback to previous symbol formatting
    return `${fallbackCurrencySymbol}${amount.toLocaleString()}`
  })()

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
          {/* Room charges row */}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Room Charges</span>
            <span className="fs-5">{formatted}</span>
          </li>
        </ul>
      </CardBody>
      {/* Card footer showing paid amount */}
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

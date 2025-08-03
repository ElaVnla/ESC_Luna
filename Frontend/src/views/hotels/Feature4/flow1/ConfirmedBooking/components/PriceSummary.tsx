import { currency } from '@/states';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle
} from 'react-bootstrap';

type PriceSummaryProps = {
  price: {
    roomCharges: number;
    discountAmount: number;
    discountLabel?: string;
    priceAfterDiscount: number;
    taxesAndFees: number;
    totalPaid: number;
  };
};

const PriceSummary = ({ price }: PriceSummaryProps) => {
  const formatCurrency = (value: number) => `${currency}${value.toLocaleString()}`;

  return (
    <Card className="shadow rounded-2">
      <CardHeader className="border-bottom">
        <CardTitle as="h5" className="mb-0">
          Price Summary
        </CardTitle>
      </CardHeader>

      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">Paid</span>
          <span className="h5 mb-0">{formatCurrency(price.totalPaid)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PriceSummary;

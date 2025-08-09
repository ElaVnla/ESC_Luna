import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormLabel,
  Image,
  Row,
} from 'react-bootstrap';
import { BsCreditCard, BsWalletFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { TextFormInput } from '@/components';
import { CardElement } from '@stripe/react-stripe-js'; // ✅ added

import visaCard from '@/assets/images/element/visa.svg';
import masterCard from '@/assets/images/element/mastercard.svg';
import expressCard from '@/assets/images/element/expresscard.svg';

const paymentCards = [visaCard, masterCard, expressCard];

const PaymentOptions = () => {
  const { control } = useFormContext();

  return (
    <Card className="shadow">
      <CardHeader className="border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsWalletFill className="me-2" />
          Payment Options
        </h4>
      </CardHeader>
      <CardBody className="p-4 pb-0">
        <Accordion defaultActiveKey="1" className="accordion-icon accordion-bg-light" id="accordioncircle">
          <AccordionItem eventKey="1" className="mb-3">
            <AccordionHeader as="h6" id="heading-1">
              <BsCreditCard className="text-primary me-2" />
              <span className="me-5">Credit or Debit Card</span>
            </AccordionHeader>
            <AccordionBody>
              <div className="d-sm-flex justify-content-sm-between my-3">
                <h6 className="mb-2 mb-sm-0">We Accept:</h6>
                <ul className="list-inline my-0">
                  {paymentCards.map((card, idx) => (
                    <li key={idx} className="list-inline-item">
                      <Link to="">
                        <Image src={card} className="h-30px" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="g-3 row">
                <Col xs={12}>
                  <FormLabel>Card Details *</FormLabel>
                  <div className="form-control p-3">
                    <CardElement options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#000',
                          '::placeholder': {
                            color: '#888',
                          },
                        },
                      },
                    }} />
                  </div>
                </Col>

                <TextFormInput
                  containerClass="col-12"
                  label="Name on Card *"
                  control={control}
                  name="cardHolderName"
                  placeholder="Enter card holder name"
                  rules={{
                    required: 'Cardholder name is required',
                  }}
                />
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </CardBody>

      <div className="card-footer p-4 pt-0">
        <p className="mb-0">
          By processing, You accept Booking <Link to="">Terms of Services</Link> and <Link to="">Policy</Link>
        </p>
      </div>
    </Card>
  );
};

export default PaymentOptions;

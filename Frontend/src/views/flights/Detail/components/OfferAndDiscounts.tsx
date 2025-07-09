import { Button, Card, CardBody, CardTitle, FormControl, InputGroup } from 'react-bootstrap'

const OfferAndDiscounts = () => {
  return (
    <Card as={CardBody} className="bg-light">
      <CardTitle className="mb-0">
        <h5>Offer &amp; Discount</h5>
      </CardTitle>
      <InputGroup className="mt-2">
        <FormControl placeholder="Coupon code" />
        <Button>Apply</Button>
      </InputGroup>
    </Card>
  )
}

export default OfferAndDiscounts

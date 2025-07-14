import { Button, Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigateToBooking = () => {
return (
    <Card className="border p-4">
        <CardBody className="p-0">
            <Row className="g-2 g-sm-4 mb-4">
                <Col md={4} xl={3}>
                    <Button variant="dark" className="mb-0">
                <Link to="/hotels/review-booking" className="stretched-link">
                    Book Now
                </Link>
                    </Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
)
}

export default NavigateToBooking
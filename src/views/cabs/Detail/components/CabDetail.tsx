import { useViewPort } from '@/hooks'
import { currency } from '@/states'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sticky from 'react-sticky-el'
import CabCard from './CabCard'
import DriverAndCabDetails from './DriverAndCabDetails'
import TripDetail from './TripDetail'

import { cabData } from '../data'

const CabDetail = () => {
  const { width } = useViewPort()

  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4">
          <Col xl={8}>
            <div className="vstack gap-5">
              <CabCard cab={cabData} />

              <TripDetail />

              <DriverAndCabDetails />
            </div>
          </Col>
          <Col as="aside" xl={4}>
            <Sticky
              disabled={width <= 1199}
              topOffset={80}
              bottomOffset={0}
              boundaryElement="div.container"
              hideOnBoundaryHit={false}
              stickyStyle={{ transition: '0.2s all linear' }}
            >
              <Card className="card-body bg-light p-4">
                <h6 className="text-danger fw-normal">Hurry! Limited cars left</h6>
                <ul className="list-group list-group-borderless mb-0">
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">Base Price</span>
                    <span className="h6 fw-light mb-0">{currency}260</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">State Tax</span>
                    <span className="h6 fw-light mb-0">{currency}50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">Night Charge</span>
                    <span className="h6 fw-light mb-0">{currency}100</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">Convenience Fee</span>
                    <span className="h6 fw-light mb-0">{currency}25</span>
                  </li>
                  <li className="list-group-item py-0">
                    <hr className="my-0" />
                  </li>
                  <li className="list-group-item d-flex justify-content-between pb-0">
                    <span className="h5 fw-normal mb-0">Total</span>
                    <span className="h5 fw-normal mb-0">{currency}435</span>
                  </li>
                </ul>
                <div className="d-grid mt-4 gap-2">
                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="discountOptions" id="discount1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label h6 fw-normal mb-0" htmlFor="discount1">
                      Pay {currency}220 now (Half Payment)
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="discountOptions" id="discount2" defaultValue="option2" />
                    <label className="form-check-label h6 fw-normal mb-0" htmlFor="discount2">
                      Pay {currency}435 now (Full payment)
                    </label>
                  </div>
                  <Link to="/cabs/booking" className="btn btn-dark mb-0 mt-2">
                    Pay Now
                  </Link>
                </div>
              </Card>
            </Sticky>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CabDetail

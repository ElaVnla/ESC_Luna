import { currency } from '@/states'
import { Card, CardBody, CardHeader, Col, Image, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaPlane } from 'react-icons/fa'

import element9 from '@/assets/images/element/09.svg'

const FlightDetailTab = () => {
  return (
    <TabContainer defaultActiveKey="1">
      <Nav variant="tabs" role="tablist" justify className="nav-pills  nav-responsive bg-primary bg-opacity-10 rounded p-2 mb-3">
        <NavItem role="presentation">
          <NavLink eventKey="1" className="mb-0">
            Flight Information
          </NavLink>
        </NavItem>
        <NavItem role="presentation">
          <NavLink eventKey="2" className="mb-0">
            Fare Detail
          </NavLink>
        </NavItem>
        <NavItem role="presentation">
          <NavLink eventKey="3" className="mb-0">
            Baggage Rules
          </NavLink>
        </NavItem>
        <NavItem role="presentation">
          <NavLink eventKey="4" className="mb-0">
            Cancellation Rules
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="mb-0">
        <TabPane eventKey="1" className="fade">
          <Card className="border">
            <CardHeader>
              <div className="d-sm-flex justify-content-sm-between align-items-center">
                <div className="d-flex mb-2 mb-sm-0">
                  <Image src={element9} className="w-40px me-2" />
                  <h6 className="fw-normal mb-0">Phillippines Airline (PA - 5620)</h6>
                </div>
                <h6 className="fw-normal mb-0">
                  <span className="text-body">Travel Class:</span> Economy
                </h6>
              </div>
            </CardHeader>
            <CardBody className="p-4">
              <Row className="g-4">
                <Col sm={4}>
                  <h4>BOM</h4>
                  <h6 className="mb-0">14:50</h6>
                  <p className="mb-0">Chhatrapati Shivaji International Airport</p>
                </Col>
                <Col sm={4} className="my-sm-auto text-center">
                  <h5>9hr 50min</h5>
                  <div className="position-relative my-4">
                    <hr className="bg-primary opacity-5 position-relative" />
                    <div className="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
                      <FaPlane className="fa-fw rtl-flip" />
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <h4>CDG</h4>
                  <h6 className="mb-0">11:50</h6>
                  <p className="mb-0">Ch. De Gaulle, Paris, France</p>
                </Col>
              </Row>
              <div className="bg-light text-center fw-normal rounded-2 mt-3 mb-4 p-2">Change of planes: 3h 15m Layover in France</div>
              <Row className="g-4">
                <Col sm={4}>
                  <h4>CDG</h4>
                  <h6 className="mb-0">2:50</h6>
                  <p className="mb-0">Ch. De Gaulle, Paris, France</p>
                </Col>
                <Col sm={4} className="my-sm-auto text-center">
                  <h5>5hr 50min</h5>
                  <div className="position-relative my-4">
                    <hr className="bg-primary opacity-5 position-relative" />
                    <div className="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
                      <FaPlane className="rtl-flip" />
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <h4>JFK</h4>
                  <h6 className="mb-0">7:35</h6>
                  <p className="mb-0">John F Kennedy Intl-NY</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane eventKey="2" className="fade">
          <Card className="card-body">
            <div className="table-responsive-lg">
              <table className="table caption-bottom mb-0">
                <caption className="pb-0">*From The Date Of Departure</caption>
                <thead className="table-dark">
                  <tr>
                    <th scope="col" className="border-0 rounded-start">
                      Base Fare
                    </th>
                    <th scope="col" className="border-0">
                      Taxes and Fees
                    </th>
                    <th scope="col" className="border-0 rounded-end">
                      Total Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{currency}36,500</td>
                    <td>{currency}1,050</td>
                    <td>
                      <h5 className="mb-0">{currency}37,550</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabPane>
        <TabPane eventKey="3" className="fade">
          <Card className="border">
            <div className="card-header d-flex align-items-center border-bottom">
              <Image src={element9} className="h-20px me-1" />
              <h5 className="card-title mb-0">BOM - CDG</h5>
            </div>
            <CardBody>
              <div className="table-responsive-lg">
                <table className="table caption-bottom mb-0">
                  <caption className="pb-0">*1PC = 23KG</caption>
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className="border-0 rounded-start">
                        Baggage Type
                      </th>
                      <th scope="col" className="border-0">
                        Check In
                      </th>
                      <th scope="col" className="border-0 rounded-end">
                        Cabin
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-top-0">
                    <tr>
                      <td>Adult</td>
                      <td>2 PC</td>
                      <td>7 Kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane eventKey="4" className="fade">
          <Card className="border">
            <CardHeader className="d-flex align-items-center border-bottom">
              <img src={element9} className="h-20px me-1" />
              <h5 className="card-title mb-0">BOM - CDG</h5>
            </CardHeader>
            <div className="card-body">
              <div className="table-responsive-lg">
                <table className="table caption-bottom mb-0">
                  <caption className="pb-0">*From The Date Of Departure</caption>
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className="border-0 rounded-start">
                        Time Frame
                      </th>
                      <th scope="col" className="border-0 rounded-end">
                        Air Free + MMT Free
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-top-0">
                    <tr>
                      <td>0 hours to 24 hours</td>
                      <td>Non Refundable</td>
                    </tr>
                    <tr>
                      <td>24 hours to 365 days</td>
                      <td>
                        {currency}16,325 + {currency}250
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </TabPane>
      </TabContent>
    </TabContainer>
  )
}

export default FlightDetailTab

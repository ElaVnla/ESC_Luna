import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { BsArrowRight, BsGeoAlt, BsPatchCheckFill } from 'react-icons/bs'
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'
import { FaPersonSkating, FaPlane } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import sedan from '@/assets/images/category/cab/seadan.svg'
import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import element9 from '@/assets/images/element/09.svg'

const TourItinerary = () => {
  return (
    <Card className="bg-transparent p-0">
      <CardHeader className="bg-transparent border-bottom p-0 pb-3">
        <h3 className="mb-0">Itinerary</h3>
      </CardHeader>
      <CardBody className="p-0 pt-3">
        <Accordion defaultActiveKey="1" className="accordion-icon accordion-bg-light" id="accordionExample2">
          <AccordionItem eventKey="1" className="mb-3">
            <AccordionHeader as="h6" className="font-base" id="heading-1">
              <span className="lead me-1 fw-normal">Day 1:</span>Arrival in Kuta | Get ready for an ideal escape on this tropical island
            </AccordionHeader>
            <AccordionBody className="mt-3">
              <div className="vstack gap-4">
                <Card className="bg-transparent p-0">
                  <CardHeader className="bg-transparent p-0">
                    <span className="text-body items-center">
                      <FaCheckCircle className="me-2" />
                      Flight details
                    </span>
                    <div className="p-3 bg-light rounded-2 d-sm-flex justify-content-sm-between align-items-center mb-4 mt-2">
                      <h6 className="mb-0">New York - Malaysia</h6>
                      <h6 className="fw-normal mb-0">
                        <span className="text-body">Date:</span> 4 July 2022
                      </h6>
                    </div>
                  </CardHeader>
                  <CardBody className="p-0">
                    <Row className="g-4">
                      <Col md={3}>
                        <Image src={element9} className="w-80px mb-3" />
                        <h6 className="fw-normal small mb-0">Phillippines Airline</h6>
                      </Col>
                      <div className="col-4 col-md-3">
                        <h5>CDG</h5>
                        <h6 className="mb-0">2:50 pm</h6>
                      </div>
                      <div className="col-4 col-md-3 text-center">
                        <h6>5hr 50min</h6>
                        <div className="position-relative my-4">
                          <hr className="bg-primary opacity-5 position-relative" />
                          <div className="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle flex-centered">
                            <FaPlane className="fa-fw" size={14} />
                          </div>
                        </div>
                      </div>
                      <Col xs={4} md={3} className="text-end">
                        <h5>JFK</h5>
                        <h6 className="mb-0">7:35 pm</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <hr className="my-0" />
                <Card className="bg-transparent p-0">
                  <CardHeader className="bg-transparent p-0">
                    <span className="text-body items-center">
                      <FaCheckCircle className="me-2" />
                      Transfer from Airport to hotel
                    </span>
                  </CardHeader>
                  <CardBody className="p-0 mt-2">
                    <Row className="g-2 g-sm-4 align-items-center">
                      <Col sm={4} xl={3}>
                        <div className="bg-light rounded-3 px-4 py-5">
                          <Image src={sedan} />
                        </div>
                      </Col>
                      <Col sm={8} xl={9}>
                        <h5 className="card-title mb-2">Private Transfers</h5>
                        <h6 className="mb-2">Camry, Accord</h6>
                        <ul className="nav nav-divider mb-2">
                          <li className="nav-item">SEDAN</li>
                          <li className="nav-item">AC</li>
                          <li className="nav-item">4 Seats</li>
                          <li className="nav-item">2 luggage</li>
                          <li className="nav-item">First Aid</li>
                        </ul>
                        <Link to="" className="btn btn-sm btn-primary-soft mb-0 me-1">
                          Change
                        </Link>
                        <Link to="" className="btn btn-sm btn-danger-soft mb-0">
                          Remove
                        </Link>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <hr className="my-0" />
                <Card className="bg-transparent p-0">
                  <CardHeader className="bg-transparent p-0">
                    <span className="text-body items-center">
                      <FaCheckCircle className="me-2" />
                      Check-In to hotel
                    </span>
                  </CardHeader>
                  <CardBody className="p-0 mt-2">
                    <Row className="g-2 g-sm-4">
                      <div className="col-sm-4">
                        <Image src={hotel4} className="card-img" alt="Card image" />
                      </div>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between mb-2">
                          <div className="badge bg-dark">Hotel</div>
                          <Link to="/hotels/list" className="btn btn-sm btn-link p-0 mb-0 text-decoration-underline">
                            Change
                          </Link>
                        </div>
                        <h5 className="card-title mb-1">
                          <Link to="/hotels/detail">Courtyard by Marriott New York </Link>
                        </h5>
                        <span>2.9km from the airport</span>
                        <ul className="list-group list-group-borderless mb-0 mt-2 small">
                          <li className="list-group-item d-flex p-0 items-center">
                            <FaCalendarAlt className="me-2" />
                            Tue, 5 Jul 2022 - Sat 9 Jul 2022
                          </li>
                          <li className="list-group-item d-flex text-success p-0 items-center">
                            <BsPatchCheckFill className=" me-2" />
                            Free Breakfast
                          </li>
                        </ul>
                        <h6 className="mb-0 fw-light small mt-2">
                          Room type: Standard room - Holiday selection
                          <Link to="/hotels/detail" className="btn btn-sm btn-link p-0 mb-0 text-decoration-underline ms-3">
                            Change room
                          </Link>
                        </h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <hr className="my-0" />
                <Card className="bg-transparent p-0">
                  <CardHeader className="bg-transparent p-0">
                    <span className="text-body items-center">
                      <FaCheckCircle className="me-2" />
                      Today’s Activity
                    </span>
                  </CardHeader>
                  <CardBody className="p-0 mt-2">
                    <Row className="g-2 g-sm-4 align-items-center">
                      <div className="col-sm-4">
                        <Image src={hotel4} className="card-img" />
                      </div>
                      <Col sm={8}>
                        <h5 className="card-title mb-1">Sightseeing in Bali</h5>
                        <small className="mb-2 items-center">
                          <BsGeoAlt className=" me-2" />
                          Bali, Malaysia
                        </small>
                        <ul className="list-group list-group-borderless mb-0 mt-2">
                          <li className="list-group-item d-flex p-0 align-items-center">
                            <BsArrowRight className=" text-primary me-2" />
                            Tanah Lot Tour
                          </li>
                          <li className="list-group-item d-flex p-0 align-items-center">
                            <BsArrowRight className=" text-primary me-2" />
                            White water rafting
                          </li>
                        </ul>
                        <div className="hstack gap-3 flex-wrap mt-2">
                          <p className="mb-0">
                            Duration:<span className="h6 fw-light mb-0 ms-1">5 hrs</span>
                          </p>
                          <p className="mb-0">
                            Place Covered:<span className="h6 fw-light mb-0 ms-1">2</span>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Link to="" className="btn btn-primary mb-0">
                  <FaPersonSkating className="me-2" />
                  Add Activity
                </Link>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2" className="mb-3">
            <AccordionHeader as="h6" className="font-base" id="heading-2">
              <span className="lead me-1 fw-normal">Day 2:</span>A day filled with adventure | Indulge in Water sports at Tanjung Benoa Nusa Dua
            </AccordionHeader>
            <AccordionBody className="mt-3">
              <ul>
                <li className="mb-2">Get up with a delicious lunch and a beautiful view from your room.</li>
                <li className="mb-2">
                  Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar
                  impossible sentiments.
                </li>
                <li className="mb-2">
                  Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety
                  off out perpetual his you. Feel sold off felt nay rose met you.
                </li>
                <li className="mb-2">
                  Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished
                  raillery.
                </li>
                <li className="mb-2">
                  Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.{' '}
                </li>
                <li className="mb-2">
                  Applauded no discovery in newspaper allowance am northward. September how men saw tolerably two behavior arranging.{' '}
                </li>
              </ul>
              <Row className="g-4">
                <Col md={4}>
                  <Image src={hotel3} className="rounded-3" />
                </Col>
                <Col md={4}>
                  <Image src={hotel2} className="rounded-3" />
                </Col>
                <Col md={4}>
                  <Image src={hotel1} className="rounded-3" />
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="3" className="mb-3">
            <AccordionHeader as="h6" className="font-base" id="heading-3">
              <span className="lead me-1 fw-normal">Day 3:</span>Indulge in Water sports at Tanjung Benoa Nusa Dua
            </AccordionHeader>
            <AccordionBody className="mt-3">
              Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior
              arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward.
              Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness
              felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame
              possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward
              subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity
              inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is
              offices parlors.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="4" className="mb-3">
            <AccordionHeader as="h6" className="font-base" id="heading-4">
              <span className="lead me-1 fw-normal">Day 4:</span>Departure, Its Time to say Goodbye
            </AccordionHeader>
            <AccordionBody className="mt-3">
              <p>
                What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She
                offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality
                possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal
                dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on.
                Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage
                Mr be.
              </p>
              <p className="mb-0">
                At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While
                checking out your order. Be sure to fill in correct details for fast &amp; hassle-free payment processing.
              </p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  )
}

export default TourItinerary

import { Button, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { FaPlus, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { compareListings } from '../data'
import { BsArrowRight, BsCheckLg, BsXLg } from 'react-icons/bs'
import { currency } from '@/states'

const OurListings = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} className="col-12">
            <div className="table-responsive-xl">
              <table className="table table-compare align-middle">
                <thead className="align-top">
                  <tr>
                    <th scope="col">
                      <p className="h3">Compare Our Listing</p>
                      <button className="btn btn-lg btn-primary btn-round mb-0 flex-centered">
                        <FaPlus />
                      </button>
                    </th>

                    {compareListings.map((item, idx) => {
                      return (
                        <th scope="col" key={idx}>
                          <Card className="bg-transparent">
                            <Image src={item.image} className="rounded" alt="..." />
                            <CardBody className="px-0">
                              <span className="h6">
                                <Link to="">{item.name}</Link>
                              </span>
                              <div className="d-sm-flex justify-content-between align-items-center mt-2">
                                <span className="h6 text-success mb-0">
                                  {currency}
                                  {item.price}
                                </span>
                                <Link to="" className="btn btn-sm btn-link mb-0 p-0">
                                  View Listing
                                  <BsArrowRight className="ms-2" />
                                </Link>
                              </div>
                            </CardBody>
                          </Card>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Rating</span>
                    </th>
                    <td>
                      <ul className="list-inline mb-0">
                        {Array.from(new Array(4)).map((_val, idx) => (
                          <li className="list-inline-item me-1 small" key={idx}>
                            <FaStar size={16} className="text-warning" />
                          </li>
                        ))}
                        <li className="list-inline-item">
                          <FaRegStar size={16} className="text-warning" />
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="list-inline mb-0">
                        {Array.from(new Array(4)).map((_val, idx) => (
                          <li className="list-inline-item me-1 small" key={idx}>
                            <FaStar size={16} className="text-warning" />
                          </li>
                        ))}
                        <li className="list-inline-item">
                          <FaStarHalfAlt size={15} className="text-warning" />
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="list-inline mb-0">
                        {Array.from(new Array(5)).map((_val, idx) => (
                          <li className="list-inline-item me-1 small" key={idx}>
                            <FaStar size={16} className="text-warning" />
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Floor area</span>
                    </th>
                    <td>1700 sq.ft</td>
                    <td>1500 sq.ft</td>
                    <td>1650 sq.ft</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Bedroom</span>
                    </th>
                    <td>3 Bedroom 4 Beds</td>
                    <td>2 Bedroom 3 Beds</td>
                    <td>1 Bedroom 2 Beds</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Bathroom</span>
                    </th>
                    <td>2 Showers</td>
                    <td>2 Showers 1 Bathtub</td>
                    <td>1 Shower 1 Bathtub</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Swimming Pool</span>
                    </th>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-danger mb-0">
                        <BsXLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-danger mb-0">
                        <BsXLg />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Air conditioning</span>
                    </th>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Gym</span>
                    </th>
                    <td>
                      <span className="h5 text-danger mb-0">
                        <BsXLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-danger mb-0">
                        <BsXLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Internet</span>
                    </th>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                    <td>
                      <span className="h5 text-success mb-0">
                        <BsCheckLg />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="h6 mb-0">Actions</span>
                    </th>
                    <td>
                      <Button variant="outline-primary" size="sm" className="mb-0">
                        Remove
                      </Button>
                    </td>
                    <td>
                      <Button variant="outline-primary" size="sm" className="mb-0">
                        Remove
                      </Button>
                    </td>
                    <td>
                      <Button variant="outline-primary" size="sm" className="mb-0">
                        Remove
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurListings

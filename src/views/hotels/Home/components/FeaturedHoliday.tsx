import { Col, Container, Row } from 'react-bootstrap'
import { BsFillLightningFill, BsFillStopwatchFill, BsShieldFillCheck } from 'react-icons/bs'
import { FaStar, FaUtensils } from 'react-icons/fa6'

import about1 from '@/assets/images/about/01.jpg'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import element1 from '@/assets/images/element/01.svg'

const FeaturedHoliday = () => {
  return (
    <section className="pb-0 pb-xl-5">
      <Container>
        <Row className="g-4 justify-content-between align-items-center">
          <Col lg={5} className="position-relative">
            <figure className="position-absolute top-0 start-0 translate-middle z-index-1 ms-4">
              <svg className="fill-warning" width="77px" height="77px">
                <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
              </svg>
            </figure>

            <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
              <svg height={400} className="fill-primary opacity-2" viewBox="0 0 340 340">
                <circle cx="194.2" cy="2.2" r="2.2" />
                <circle cx="2.2" cy="2.2" r="2.2" />
                <circle cx="218.2" cy="2.2" r="2.2" />
                <circle cx="26.2" cy="2.2" r="2.2" />
                <circle cx="242.2" cy="2.2" r="2.2" />
                <circle cx="50.2" cy="2.2" r="2.2" />
                <circle cx="266.2" cy="2.2" r="2.2" />
                <circle cx="74.2" cy="2.2" r="2.2" />
                <circle cx="290.2" cy="2.2" r="2.2" />
                <circle cx="98.2" cy="2.2" r="2.2" />
                <circle cx="314.2" cy="2.2" r="2.2" />
                <circle cx="122.2" cy="2.2" r="2.2" />
                <circle cx="338.2" cy="2.2" r="2.2" />
                <circle cx="146.2" cy="2.2" r="2.2" />
                <circle cx="170.2" cy="2.2" r="2.2" />
                <circle cx="194.2" cy="26.2" r="2.2" />
                <circle cx="2.2" cy="26.2" r="2.2" />
                <circle cx="218.2" cy="26.2" r="2.2" />
                <circle cx="26.2" cy="26.2" r="2.2" />
                <circle cx="242.2" cy="26.2" r="2.2" />
                <circle cx="50.2" cy="26.2" r="2.2" />
                <circle cx="266.2" cy="26.2" r="2.2" />
                <circle cx="74.2" cy="26.2" r="2.2" />
                <circle cx="290.2" cy="26.2" r="2.2" />
                <circle cx="98.2" cy="26.2" r="2.2" />
                <circle cx="314.2" cy="26.2" r="2.2" />
                <circle cx="122.2" cy="26.2" r="2.2" />
                <circle cx="338.2" cy="26.2" r="2.2" />
                <circle cx="146.2" cy="26.2" r="2.2" />
                <circle cx="170.2" cy="26.2" r="2.2" />
                <circle cx="194.2" cy="50.2" r="2.2" />
                <circle cx="2.2" cy="50.2" r="2.2" />
                <circle cx="218.2" cy="50.2" r="2.2" />
                <circle cx="26.2" cy="50.2" r="2.2" />
                <circle cx="242.2" cy="50.2" r="2.2" />
                <circle cx="50.2" cy="50.2" r="2.2" />
                <circle cx="266.2" cy="50.2" r="2.2" />
                <circle cx="74.2" cy="50.2" r="2.2" />
                <circle cx="290.2" cy="50.2" r="2.2" />
                <circle cx="98.2" cy="50.2" r="2.2" />
                <circle cx="314.2" cy="50.2" r="2.2" />
                <circle cx="122.2" cy="50.2" r="2.2" />
                <circle cx="338.2" cy="50.2" r="2.2" />
                <circle cx="146.2" cy="50.2" r="2.2" />
                <circle cx="170.2" cy="50.2" r="2.2" />
                <circle cx="194.2" cy="74.2" r="2.2" />
                <circle cx="2.2" cy="74.2" r="2.2" />
                <circle cx="218.2" cy="74.2" r="2.2" />
                <circle cx="26.2" cy="74.2" r="2.2" />
                <circle cx="242.2" cy="74.2" r="2.2" />
                <circle cx="50.2" cy="74.2" r="2.2" />
                <circle cx="266.2" cy="74.2" r="2.2" />
                <circle cx="74.2" cy="74.2" r="2.2" />
                <circle cx="290.2" cy="74.2" r="2.2" />
                <circle cx="98.2" cy="74.2" r="2.2" />
                <circle cx="314.2" cy="74.2" r="2.2" />
                <circle cx="122.2" cy="74.2" r="2.2" />
                <circle cx="338.2" cy="74.2" r="2.2" />
                <circle cx="146.2" cy="74.2" r="2.2" />
                <circle cx="170.2" cy="74.2" r="2.2" />
                <circle cx="194.2" cy="98.2" r="2.2" />
                <circle cx="2.2" cy="98.2" r="2.2" />
                <circle cx="218.2" cy="98.2" r="2.2" />
                <circle cx="26.2" cy="98.2" r="2.2" />
                <circle cx="242.2" cy="98.2" r="2.2" />
                <circle cx="50.2" cy="98.2" r="2.2" />
                <circle cx="266.2" cy="98.2" r="2.2" />
                <circle cx="74.2" cy="98.2" r="2.2" />
                <circle cx="290.2" cy="98.2" r="2.2" />
                <circle cx="98.2" cy="98.2" r="2.2" />
                <circle cx="314.2" cy="98.2" r="2.2" />
                <circle cx="122.2" cy="98.2" r="2.2" />
                <circle cx="338.2" cy="98.2" r="2.2" />
                <circle cx="146.2" cy="98.2" r="2.2" />
                <circle cx="170.2" cy="98.2" r="2.2" />
                <circle cx="194.2" cy="122.2" r="2.2" />
                <circle cx="2.2" cy="122.2" r="2.2" />
                <circle cx="218.2" cy="122.2" r="2.2" />
                <circle cx="26.2" cy="122.2" r="2.2" />
                <circle cx="242.2" cy="122.2" r="2.2" />
                <circle cx="50.2" cy="122.2" r="2.2" />
                <circle cx="266.2" cy="122.2" r="2.2" />
                <circle cx="74.2" cy="122.2" r="2.2" />
                <circle cx="290.2" cy="122.2" r="2.2" />
                <circle cx="98.2" cy="122.2" r="2.2" />
                <circle cx="314.2" cy="122.2" r="2.2" />
                <circle cx="122.2" cy="122.2" r="2.2" />
                <circle cx="338.2" cy="122.2" r="2.2" />
                <circle cx="146.2" cy="122.2" r="2.2" />
                <circle cx="170.2" cy="122.2" r="2.2" />
                <circle cx="194.2" cy="146.2" r="2.2" />
                <circle cx="2.2" cy="146.2" r="2.2" />
                <circle cx="218.2" cy="146.2" r="2.2" />
                <circle cx="26.2" cy="146.2" r="2.2" />
                <circle cx="242.2" cy="146.2" r="2.2" />
                <circle cx="50.2" cy="146.2" r="2.2" />
                <circle cx="266.2" cy="146.2" r="2.2" />
                <circle cx="74.2" cy="146.2" r="2.2" />
                <circle cx="290.2" cy="146.2" r="2.2" />
                <circle cx="98.2" cy="146.2" r="2.2" />
                <circle cx="314.2" cy="146.2" r="2.2" />
                <circle cx="122.2" cy="146.2" r="2.2" />
                <circle cx="338.2" cy="146.2" r="2.2" />
                <circle cx="146.2" cy="146.2" r="2.2" />
                <circle cx="170.2" cy="146.2" r="2.2" />
                <circle cx="194.2" cy="170.2" r="2.2" />
                <circle cx="2.2" cy="170.2" r="2.2" />
                <circle cx="218.2" cy="170.2" r="2.2" />
                <circle cx="26.2" cy="170.2" r="2.2" />
                <circle cx="242.2" cy="170.2" r="2.2" />
                <circle cx="50.2" cy="170.2" r="2.2" />
                <circle cx="266.2" cy="170.2" r="2.2" />
                <circle cx="74.2" cy="170.2" r="2.2" />
                <circle cx="290.2" cy="170.2" r="2.2" />
                <circle cx="98.2" cy="170.2" r="2.2" />
                <circle cx="314.2" cy="170.2" r="2.2" />
                <circle cx="122.2" cy="170.2" r="2.2" />
                <circle cx="338.2" cy="170.2" r="2.2" />
                <circle cx="146.2" cy="170.2" r="2.2" />
                <circle cx="170.2" cy="170.2" r="2.2" />
                <circle cx="194.2" cy="194.2" r="2.2" />
                <circle cx="2.2" cy="194.2" r="2.2" />
                <circle cx="218.2" cy="194.2" r="2.2" />
                <circle cx="26.2" cy="194.2" r="2.2" />
                <circle cx="242.2" cy="194.2" r="2.2" />
                <circle cx="50.2" cy="194.2" r="2.2" />
                <circle cx="266.2" cy="194.2" r="2.2" />
                <circle cx="74.2" cy="194.2" r="2.2" />
                <circle cx="290.2" cy="194.2" r="2.2" />
                <circle cx="98.2" cy="194.2" r="2.2" />
                <circle cx="314.2" cy="194.2" r="2.2" />
                <circle cx="122.2" cy="194.2" r="2.2" />
                <circle cx="338.2" cy="194.2" r="2.2" />
                <circle cx="146.2" cy="194.2" r="2.2" />
                <circle cx="170.2" cy="194.2" r="2.2" />
                <circle cx="194.2" cy="218.2" r="2.2" />
                <circle cx="2.2" cy="218.2" r="2.2" />
                <circle cx="218.2" cy="218.2" r="2.2" />
                <circle cx="26.2" cy="218.2" r="2.2" />
                <circle cx="242.2" cy="218.2" r="2.2" />
                <circle cx="50.2" cy="218.2" r="2.2" />
                <circle cx="266.2" cy="218.2" r="2.2" />
                <circle cx="74.2" cy="218.2" r="2.2" />
                <circle cx="290.2" cy="218.2" r="2.2" />
                <circle cx="98.2" cy="218.2" r="2.2" />
                <circle cx="314.2" cy="218.2" r="2.2" />
                <circle cx="122.2" cy="218.2" r="2.2" />
                <circle cx="338.2" cy="218.2" r="2.2" />
                <circle cx="146.2" cy="218.2" r="2.2" />
                <circle cx="170.2" cy="218.2" r="2.2" />
                <circle cx="194.2" cy="242.2" r="2.2" />
                <circle cx="2.2" cy="242.2" r="2.2" />
                <circle cx="218.2" cy="242.2" r="2.2" />
                <circle cx="26.2" cy="242.2" r="2.2" />
                <circle cx="242.2" cy="242.2" r="2.2" />
                <circle cx="50.2" cy="242.2" r="2.2" />
                <circle cx="266.2" cy="242.2" r="2.2" />
                <circle cx="74.2" cy="242.2" r="2.2" />
                <circle cx="290.2" cy="242.2" r="2.2" />
                <circle cx="98.2" cy="242.2" r="2.2" />
                <circle cx="314.2" cy="242.2" r="2.2" />
                <circle cx="122.2" cy="242.2" r="2.2" />
                <circle cx="338.2" cy="242.2" r="2.2" />
                <circle cx="146.2" cy="242.2" r="2.2" />
                <circle cx="170.2" cy="242.2" r="2.2" />
                <circle cx="194.2" cy="266.2" r="2.2" />
                <circle cx="2.2" cy="266.2" r="2.2" />
                <circle cx="218.2" cy="266.2" r="2.2" />
                <circle cx="26.2" cy="266.2" r="2.2" />
                <circle cx="242.2" cy="266.2" r="2.2" />
                <circle cx="50.2" cy="266.2" r="2.2" />
                <circle cx="266.2" cy="266.2" r="2.2" />
                <circle cx="74.2" cy="266.2" r="2.2" />
                <circle cx="290.2" cy="266.2" r="2.2" />
                <circle cx="98.2" cy="266.2" r="2.2" />
                <circle cx="314.2" cy="266.2" r="2.2" />
                <circle cx="122.2" cy="266.2" r="2.2" />
                <circle cx="338.2" cy="266.2" r="2.2" />
                <circle cx="146.2" cy="266.2" r="2.2" />
                <circle cx="170.2" cy="266.2" r="2.2" />
                <circle cx="194.2" cy="290.2" r="2.2" />
                <circle cx="2.2" cy="290.2" r="2.2" />
                <circle cx="218.2" cy="290.2" r="2.2" />
                <circle cx="26.2" cy="290.2" r="2.2" />
                <circle cx="242.2" cy="290.2" r="2.2" />
                <circle cx="50.2" cy="290.2" r="2.2" />
                <circle cx="266.2" cy="290.2" r="2.2" />
                <circle cx="74.2" cy="290.2" r="2.2" />
                <circle cx="290.2" cy="290.2" r="2.2" />
                <circle cx="98.2" cy="290.2" r="2.2" />
                <circle cx="314.2" cy="290.2" r="2.2" />
                <circle cx="122.2" cy="290.2" r="2.2" />
                <circle cx="338.2" cy="290.2" r="2.2" />
                <circle cx="146.2" cy="290.2" r="2.2" />
                <circle cx="170.2" cy="290.2" r="2.2" />
                <circle cx="194.2" cy="314.2" r="2.2" />
                <circle cx="2.2" cy="314.2" r="2.2" />
                <circle cx="218.2" cy="314.2" r="2.2" />
                <circle cx="26.2" cy="314.2" r="2.2" />
                <circle cx="242.2" cy="314.2" r="2.2" />
                <circle cx="50.2" cy="314.2" r="2.2" />
                <circle cx="266.2" cy="314.2" r="2.2" />
                <circle cx="74.2" cy="314.2" r="2.2" />
                <circle cx="290.2" cy="314.2" r="2.2" />
                <circle cx="98.2" cy="314.2" r="2.2" />
                <circle cx="314.2" cy="314.2" r="2.2" />
                <circle cx="122.2" cy="314.2" r="2.2" />
                <circle cx="338.2" cy="314.2" r="2.2" />
                <circle cx="146.2" cy="314.2" r="2.2" />
                <circle cx="170.2" cy="314.2" r="2.2" />
                <circle cx="194.2" cy="338.2" r="2.2" />
                <circle cx="2.2" cy="338.2" r="2.2" />
                <circle cx="218.2" cy="338.2" r="2.2" />
                <circle cx="26.2" cy="338.2" r="2.2" />
                <circle cx="242.2" cy="338.2" r="2.2" />
                <circle cx="50.2" cy="338.2" r="2.2" />
                <circle cx="266.2" cy="338.2" r="2.2" />
                <circle cx="74.2" cy="338.2" r="2.2" />
                <circle cx="290.2" cy="338.2" r="2.2" />
                <circle cx="98.2" cy="338.2" r="2.2" />
                <circle cx="314.2" cy="338.2" r="2.2" />
                <circle cx="122.2" cy="338.2" r="2.2" />
                <circle cx="338.2" cy="338.2" r="2.2" />
                <circle cx="146.2" cy="338.2" r="2.2" />
                <circle cx="170.2" cy="338.2" r="2.2" />
              </svg>
            </figure>

            <img src={about1} className="rounded-3 position-relative" />

            <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5">
              <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3">
                <img src={element1} className="position-absolute top-0 start-0 translate-middle w-40px" />

                <div className="me-4">
                  <h6 className="fw-light">Client</h6>

                  <ul className="avatar-group mb-0">
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <div className="avatar-img rounded-circle bg-primary">
                        <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="fw-light mb-3">Rating</h6>
                  <h6 className="m-0 d-flex">
                    4.5
                    <FaStar size={18} className="text-warning ms-1" />
                  </h6>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <h2 className="mb-3 mb-lg-5">The Best Holidays Start Here!</h2>
            <p className="mb-3 mb-lg-5">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>

            <Row className="g-4">
              <Col sm={6}>
                <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle flex-centered">
                  <FaUtensils />
                </div>
                <h5 className="mt-2">Quality Food</h5>
                <p className="mb-0">Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
              </Col>

              <Col sm={6}>
                <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle flex-centered">
                  <BsFillStopwatchFill />
                </div>
                <h5 className="mt-2">Quick Services</h5>
                <p className="mb-0">Supposing so be resolving breakfast am or perfectly. </p>
              </Col>

              <Col sm={6}>
                <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle flex-centered">
                  <BsShieldFillCheck />
                </div>
                <h5 className="mt-2">High Security</h5>
                <p className="mb-0">Arranging rapturous did believe him all had supported. </p>
              </Col>

              <Col sm={6}>
                <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle flex-centered">
                  <BsFillLightningFill />
                </div>
                <h5 className="mt-2">24 Hours Alert</h5>
                <p className="mb-0">Rapturous did believe him all had supported.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturedHoliday

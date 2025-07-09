import { SelectFormInput } from '@/components'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { BsArrowRight, BsCalendar, BsGeoAlt, BsSend } from 'react-icons/bs'
import { FaRightLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import bgImg1 from '@/assets/images/bg/01.jpg'
import Flatpicker from '@/components/Flatpicker'

const Hero = () => {

  return (
    <section className="py-0">
      <Container>
        <div
          className="rounded-3 p-3 p-sm-5"
          style={{ backgroundImage: `url(${bgImg1})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Row>
            <Col md={10} className="mx-auto text-center">
              <h1 className="text-dark display-3 pt-sm-5 my-5">Ready to take off?</h1>
            </Col>
          </Row>
          <form className="bg-mode position-relative px-3 px-sm-4 pt-4 mb-4 mb-sm-0">
            <figure className="position-absolute top-0 start-0 h-100 ms-n2 ms-sm-n1">
              <svg className="h-100" viewBox="0 0 12.9 324">
                <path
                  className="fill-mode"
                  d="M9.8,316.4c1.1-26.8,2-53.4,1.9-80.2c-0.1-18.2-0.8-36.4-1.2-54.6c-0.2-8.9-0.2-17.7,0.8-26.6 c0.5-4.5,1.1-9,1.4-13.6c0.1-1.9,0.1-3.7,0.1-5.6c-0.2-0.2-0.6-1.5-0.2-3.1c-0.3-1.8-0.4-3.7-0.4-5.5c-1.2-3-1.8-6.3-1.7-9.6 c0.9-19,0.5-38.1,0.8-57.2c0.3-17.1,0.6-34.2,0.2-51.3c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.8,0-1.6,0-2.4c0-0.5,0-1.1,0-1.6 c0-1.2,0-2.3,0.2-3.5H0v11.8c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V31c3.3,0,6.1,2.7,6.1,6.1S3.3,43.3,0,43.3v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 s-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V324h9.5C9.6,321.4,9.7,318.8,9.8,316.4z"
                />
              </svg>
            </figure>
            <figure className="position-absolute top-0 end-0 h-100 rotate-180 me-n2 me-sm-n1">
              <svg className="h-100" viewBox="0 0 21 324">
                <path
                  className="fill-mode"
                  d="M9.8,316.4c1.1-26.8,2-53.4,1.9-80.2c-0.1-18.2-0.8-36.4-1.2-54.6c-0.2-8.9-0.2-17.7,0.8-26.6 c0.5-4.5,1.1-9,1.4-13.6c0.1-1.9,0.1-3.7,0.1-5.6c-0.2-0.2-0.6-1.5-0.2-3.1c-0.3-1.8-0.4-3.7-0.4-5.5c-1.2-3-1.8-6.3-1.7-9.6 c0.9-19,0.5-38.1,0.8-57.2c0.3-17.1,0.6-34.2,0.2-51.3c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.8,0-1.6,0-2.4c0-0.5,0-1.1,0-1.6 c0-1.2,0-2.3,0.2-3.5H0v11.8c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V31c3.3,0,6.1,2.7,6.1,6.1S3.3,43.3,0,43.3v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 s-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V324h9.5C9.6,321.4,9.7,318.8,9.8,316.4z"
                />
              </svg>
            </figure>

            <TabContainer defaultActiveKey="one-way">
              <Row className="g-4 position-relative">
                <Col lg={6}>
                  <Nav variant="pills" className="nav-pills-dark">
                    <NavItem>
                      <NavLink eventKey="one-way" className="rounded-start rounded-0 mb-0">
                        One Way
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink eventKey="round-trip" className="nav-link rounded-end rounded-0 mb-0">
                        Round Trip
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col lg={3} className="ms-auto">
                  <div className="form-control-bg-light form-fs-md">
                    <SelectFormInput className="form-select js-choice">
                      <option value={-1}>Select Class</option>
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </SelectFormInput>
                  </div>
                </Col>
                <Col lg={3} className="ms-auto">
                  <div className="form-control-bg-light form-fs-md">
                    <SelectFormInput className="form-select js-choice">
                      <option value={-1}>Select Travelers</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </SelectFormInput>
                  </div>
                </Col>
              </Row>
              <TabContent className="mt-4">
                <TabPane eventKey="one-way">
                  <Row className="g-4">
                    <Col md={6} lg={4} className="position-relative">
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1 items-center">
                          <BsGeoAlt className=" me-2" />
                          From
                        </label>
                        <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                          <option value={-1}>Select location</option>
                          <option>San Jacinto, USA</option>
                          <option>North Dakota, Canada</option>
                          <option>West Virginia, Paris</option>
                        </SelectFormInput>
                      </div>
                      <div className="btn-flip-icon mt-3 mt-md-0">
                        <button className="btn btn-white shadow btn-round mb-0">
                          <FaRightLeft />
                        </button>
                      </div>
                    </Col>
                    <Col md={6} lg={4}>
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1 items-center">
                          <BsSend className=" me-2" />
                          To
                        </label>
                        <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                          <option value={-1}>Select location</option>
                          <option>San Jacinto, USA</option>
                          <option>North Dakota, Canada</option>
                          <option>West Virginia, Paris</option>
                        </SelectFormInput>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1 items-center">
                          <BsCalendar className=" me-2" />
                          Departure
                        </label>
                        <Flatpicker options={{ dateFormat: 'd M Y' }} placeholder="Select date" className="form-control flatpickr" />
                      </div>
                    </Col>
                    <div className="col-12 text-end pt-0">
                      <Link className="btn btn-primary mb-n4" to="">
                        Find ticket <BsArrowRight className=" ms-3" />
                      </Link>
                    </div>
                  </Row>
                </TabPane>
                <TabPane eventKey="round-trip">
                  <Row className="g-4">
                    <Col md={6} xl={3} className="position-relative">
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1 items-center">
                          <BsGeoAlt className=" me-2" />
                          From
                        </label>
                        <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                          <option value={-1}>Select location</option>
                          <option>San Jacinto, USA</option>
                          <option>North Dakota, Canada</option>
                          <option>West Virginia, Paris</option>
                        </SelectFormInput>
                      </div>
                      <div className="btn-flip-icon mt-3 mt-md-0">
                        <button className="btn btn-white shadow btn-round mb-0">
                          <FaRightLeft />
                        </button>
                      </div>
                    </Col>
                    <Col md={6} xl={3}>
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1 items-center">
                          <BsSend className=" me-2" />
                          To
                        </label>
                        <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                          <option value={-1}>Select location</option>
                          <option>San Jacinto, USA</option>
                          <option>North Dakota, Canada</option>
                          <option>West Virginia, Paris</option>
                        </SelectFormInput>
                      </div>
                    </Col>
                    <Col md={6} xl={3}>
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1 items-center">
                          <BsCalendar className=" me-2" />
                          Departure
                        </label>
                        <Flatpicker options={{ dateFormat: 'd M Y', defaultDate: new Date().toDateString() }} />
                      </div>
                    </Col>
                    <Col md={6} xl={3}>
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1">
                          <BsCalendar className=" me-2" />
                          Return
                        </label>
                        <Flatpicker
                          options={{ dateFormat: 'd M Y', defaultDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString() }}
                        />
                      </div>
                    </Col>
                    <div className="col-12 text-end pt-0">
                      <Link className="btn btn-primary mb-n4" to="">
                        Find ticket <BsArrowRight className=" ms-3" />
                      </Link>
                    </div>
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Hero

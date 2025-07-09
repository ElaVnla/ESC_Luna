import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'
import clsx from 'clsx'
import { useState } from 'react'
import { Col, Container, Row, TabContent, TabPane } from 'react-bootstrap'
import { BsArrowRight, BsCalendar, BsGeoAlt, BsSend } from 'react-icons/bs'
import { FaRightLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'one-way' | 'round-trip'>('one-way')

  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col xs={12}>
            <form className="bg-mode border rounded position-relative px-4 pt-4 mb-4 mb-sm-0">
              <Row className="g-4">
                <Col lg={6}>
                  <ul className="nav nav-pills nav-pills-dark" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setActiveTab('one-way')}
                        className={clsx('nav-link rounded-start rounded-0 mb-0', activeTab === 'one-way' && 'active')}
                        id="pills-one-way-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-one-way"
                        type="button"
                        role="tab"
                        aria-selected="true">
                        One Way
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setActiveTab('round-trip')}
                        className={clsx('nav-link rounded-end rounded-0 mb-0', activeTab === 'round-trip' && 'active')}
                        id="pills-round-trip-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-round-trip"
                        type="button"
                        role="tab"
                        aria-selected="false">
                        Round Trip
                      </button>
                    </li>
                  </ul>
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
              <TabContent className="mt-4" id="pills-tabContent">
                <TabPane
                  className={clsx('fade', activeTab === 'one-way' && 'show active')}
                  id="pills-one-way"
                  role="tabpanel"
                  aria-labelledby="pills-one-way-tab">
                  <Row className="g-4">
                    <Col md={6} lg={4} className="position-relative">
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1">
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
                        <button type="button" className="btn btn-white shadow btn-round mb-0 flex-centered">
                          <FaRightLeft />
                        </button>
                      </div>
                    </Col>
                    <Col md={6} lg={4} className="col-md-6 col-lg-4">
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1">
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
                        <label className="mb-1">
                          <BsCalendar className=" me-2" />
                          Departure
                        </label>
                        <Flatpicker options={{ dateFormat: 'd M Y', defaultDate: new Date().toDateString() }} />
                      </div>
                    </Col>
                    <Col xs={12} className="text-end pt-0">
                      <Link className="btn btn-primary mb-n4" to="">
                        Find ticket <BsArrowRight className=" ms-3" />
                      </Link>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane
                  className={clsx('fade', activeTab === 'round-trip' && 'show active')}
                  id="pills-round-trip"
                  role="tabpanel"
                  aria-labelledby="pills-round-trip-tab">
                  <Row className="g-4">
                    <Col md={6} xl={3} className="position-relative">
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1">
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
                        <button className="btn btn-white shadow btn-round mb-0 flex-centered">
                          <FaRightLeft />
                        </button>
                      </div>
                    </Col>
                    <Col md={6} xl={3}>
                      <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label className="mb-1">
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
                        <label className="mb-1">
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
                          options={{ dateFormat: 'd M Y', defaultDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString() }} />
                      </div>
                    </Col>
                    <Col xs={12} className="text-end pt-0">
                      <Link className="btn btn-primary mb-n4" to="">
                        Find ticket <BsArrowRight className=" ms-3" />
                      </Link>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

import { SelectFormInput } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'
import { Button, Card, CardHeader, Col, Container, FormCheck, Image, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import { FaRightLeft } from 'react-icons/fa6'

import bgImg3 from '@/assets/images/bg/03.jpg'
import Flatpicker from '@/components/Flatpicker'

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'one-way' | 'round-trip'>('one-way')

  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row>
          <Col lg={10} className="ms-auto position-relative">
            <Image src={bgImg3} className="rounded-3" />
            <Col xs={11} sm={10} lg={8} xl={6} className="position-lg-middle ms-lg-8 ms-xl-7">
              <Card className="shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">
                <CardHeader className="border-bottom p-3 p-sm-4">
                  <h5 className="card-title mb-0">Book Your Online Cab</h5>
                </CardHeader>
                <form className="card-body form-control-border p-3 p-sm-4">
                  <TabContainer>
                    <Nav className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <NavItem
                        className="form-check form-check-inline active"
                        id="cab2-one-way-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#cab2-one-way"
                        role="tab"
                        aria-controls="cab2-one-way"
                        aria-selected="true"
                      >
                        <FormCheck
                          type="radio"
                          name="trip-route-type"
                          id="cabRadio1"
                          checked={activeTab === 'one-way'}
                          onChange={() => setActiveTab('one-way')}
                        />
                        <FormCheckLabel className="form-check-label" htmlFor="cabRadio1">
                          One Way
                        </FormCheckLabel>
                      </NavItem>
                      <NavItem
                        className="form-check form-check-inline"
                        id="cab2-round-way-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#cab2-round-way"
                        role="tab"
                        aria-controls="cab2-round-way"
                        aria-selected="false"
                      >
                        <FormCheck
                          type="radio"
                          name="trip-route-type"
                          id="cabRadio2"
                          checked={activeTab === 'round-trip'}
                          onChange={() => setActiveTab('round-trip')}
                        />
                        <FormCheckLabel className="form-check-label" htmlFor="cabRadio2">
                          Round Trip
                        </FormCheckLabel>
                      </NavItem>
                    </Nav>
                    <TabContent className="my-4" id="pills-tabContent">
                      <TabPane
                        eventKey="1"
                        className={clsx('fade', activeTab === 'one-way' && 'show active')}
                        id="cab2-one-way"
                        role="tabpanel"
                        aria-labelledby="cab2-one-way-tab"
                      >
                        <Row className="g-2 g-md-4">
                          <Col md={6} className=" position-relative">
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small">Pickup</label>
                              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                                <option value={-1}>Select location</option>
                                <option>New York</option>
                                <option>Canada</option>
                                <option>Paris</option>
                              </SelectFormInput>
                            </div>
                            <div className="btn-flip-icon z-index-9 mt-2 mt-md-1">
                              <button className="btn btn-dark shadow btn-round mb-0 flex-centered">
                                <FaRightLeft />
                              </button>
                            </div>
                          </Col>
                          <Col md={6} className="text-md-end">
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small ms-3 ms-md-0 me-md-3">Drop</label>
                              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                                <option value={-1}>Select Location</option>
                                <option>Canada</option>
                                <option>New York</option>
                                <option>Paris</option>
                              </SelectFormInput>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small">Pickup Date</label>
                              <Flatpicker placeholder="Select Date" options={{ dateFormat: 'd M' }} />
                            </div>
                          </Col>
                          <Col md={6} className="text-md-end">
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small ms-3 ms-md-0 me-md-3">Pickup time</label>
                              <Flatpicker
                                className="text-md-end"
                                placeholder="Select Date"
                                options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane
                        eventKey="2"
                        className={clsx('fade', activeTab === 'round-trip' && 'show active')}
                        id="cab2-round-way"
                        role="tabpanel"
                        aria-labelledby="cab2-round-way-tab"
                      >
                        <Row className="g-2 g-md-4">
                          <Col md={6} className="position-relative">
                            <label className="form-label small">Pickup</label>
                            <div className="form-fs-lg form-control-transparent">
                              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                                <option value={-1}>Select Location</option>
                                <option>New York</option>
                                <option>Canada</option>
                                <option>Paris</option>
                              </SelectFormInput>
                            </div>
                            <div className="btn-flip-icon z-index-9 mt-2 mt-md-1">
                              <Button variant="dark" className="shadow btn-round mb-0 flex-centered">
                                <FaRightLeft />
                              </Button>
                            </div>
                          </Col>
                          <Col sm={6} className="text-sm-end">
                            <label className="form-label small ms-3 ms-md-0 me-md-3">Drop</label>
                            <div className="form-fs-lg form-control-transparent">
                              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                                <option value={-1}>Select Location</option>
                                <option>Canada</option>
                                <option>New York</option>
                                <option>Paris</option>
                              </SelectFormInput>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small">Pickup Date</label>
                              <Flatpicker placeholder="Select Date" options={{ dateFormat: 'd M' }} />
                            </div>
                          </Col>
                          <Col sm={6} className="text-sm-end">
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small ms-3 ms-md-0 me-md-3">Pickup time</label>
                              <Flatpicker
                                className="text-md-end"
                                options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                                placeholder="Select Time"
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small">Return Date</label>
                              <Flatpicker placeholder="Select Date" options={{ dateFormat: 'd M' }} />
                            </div>
                          </Col>
                          <Col sm={6} className="text-sm-end">
                            <div className="form-fs-lg form-control-transparent">
                              <label className="form-label small ms-3 ms-md-0 me-md-3">Return time</label>
                              <Flatpicker
                                className="text-md-end"
                                options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                                placeholder="Select Time"
                              />
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </TabContainer>
                  <div className="d-grid">
                    <Button variant="dark" className="mb-0">
                      Search Cabs
                    </Button>
                  </div>
                </form>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

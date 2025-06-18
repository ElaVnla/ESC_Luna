import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'
import clsx from 'clsx'
import { useState } from 'react'
import { Button, Col, Container, FormLabel, Row, TabContent, TabPane } from 'react-bootstrap'

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'one-way' | 'round-trip'>('one-way')

  return (
    <section className="bg-primary">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="form-control-bg-light bg-mode border p-4 rounded-3">
              <Row className="g-4">
                <Col lg={6}>
                  <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <div
                      className="form-check form-check-inline active"
                      id="cab-one-way-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#cab-one-way"
                      role="tab"
                      aria-controls="cab-one-way"
                      aria-selected="true">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadiocab1"
                        checked={activeTab === 'one-way'}
                        onChange={() => setActiveTab('one-way')}
                      />
                      <label className="form-check-label" htmlFor="inlineRadiocab1">
                        One Way
                      </label>
                    </div>
                    <div
                      className="form-check form-check-inline"
                      id="cab-round-way-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#cab-round-way"
                      role="tab"
                      aria-controls="cab-round-way"
                      aria-selected="false">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadiocab2"
                        checked={activeTab === 'round-trip'}
                        onChange={() => setActiveTab('round-trip')}
                      />
                      <label className="form-check-label" htmlFor="inlineRadiocab2">
                        Round Trip
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
              <TabContent className="mt-0">
                <TabPane
                  className={clsx('fade', activeTab === 'one-way' && 'show active')}
                  id="cab-one-way"
                  role="tabpanel"
                  aria-labelledby="cab-one-way-tab">
                  <form className="row g-4 align-items-center">
                    <Col xl={10}>
                      <Row className="g-4">
                        <Col md={6} xl={4}>
                          <div className="form-size-lg">
                            <FormLabel>Pickup</FormLabel>
                            <SelectFormInput className="form-select js-choice" data-search-enabled="true" aria-label=".form-select-sm">
                              <option value={-1}>Select location</option>
                              <option>San Jacinto, USA</option>
                              <option>North Dakota, Canada</option>
                              <option>West Virginia, Paris</option>
                            </SelectFormInput>
                          </div>
                        </Col>
                        <Col md={6} xl={4}>
                          <div className="form-size-lg">
                            <FormLabel>Drop</FormLabel>
                            <SelectFormInput className="form-select js-choice" data-search-enabled="true" aria-label=".form-select-sm">
                              <option value={-1}>Select location</option>
                              <option>San Jacinto, USA</option>
                              <option>North Dakota, Canada</option>
                              <option>West Virginia, Paris</option>
                            </SelectFormInput>
                          </div>
                        </Col>
                        <Col md={6} xl={2}>
                          <FormLabel>Pickup Date</FormLabel>
                          <Flatpicker className="form-control-lg" placeholder="Select date" options={{ dateFormat: 'd M', defaultDate: '20 Nov' }} />
                        </Col>
                        <Col md={6} xl={2}>
                          <FormLabel>Pickup time</FormLabel>
                          <Flatpicker
                            className="form-control-lg"
                            placeholder="Select time"
                            options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K', defaultDate: '2:50 PM' }}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={2} className="d-grid mt-xl-auto">
                      <Button variant="primary" size="lg" className="mb-0" href="">
                        Update
                      </Button>
                    </Col>
                  </form>
                </TabPane>
                <TabPane
                  className={clsx('fade', activeTab === 'round-trip' && 'show active')}
                  id="cab-round-way"
                  role="tabpanel"
                  aria-labelledby="cab-round-way-tab">
                  <form className="row g-4 align-items-center">
                    <Col xl={12}>
                      <Row className="g-4">
                        <Col md={6} xl={6}>
                          <div className="form-size-lg">
                            <FormLabel>Pickup</FormLabel>
                            <SelectFormInput className="form-select js-choice" data-search-enabled="true" aria-label=".form-select-sm">
                              <option value={-1}>Select location</option>
                              <option>New York</option>
                              <option>Canada</option>
                              <option>Paris</option>
                            </SelectFormInput>
                          </div>
                        </Col>
                        <Col md={6} xl={6}>
                          <div className="form-size-lg">
                            <FormLabel>Drop</FormLabel>
                            <SelectFormInput className="form-select js-choice" data-search-enabled="true" aria-label=".form-select-sm">
                              <option value={-1}>Select location</option>
                              <option>Canada</option>
                              <option>New York</option>
                              <option>Paris</option>
                            </SelectFormInput>
                          </div>
                        </Col>
                        <Col md={6} xl={3}>
                          <FormLabel>Pickup Date</FormLabel>
                          <Flatpicker className="form-control-lg" placeholder="Select date" options={{ dateFormat: 'd M', defaultDate: '20 Nov' }} />
                        </Col>
                        <Col md={6} xl={3}>
                          <FormLabel>Pickup time</FormLabel>
                          <Flatpicker
                            className="form-control-lg"
                            placeholder="Select time"
                            options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K', defaultDate: '2:50 PM' }}
                          />
                        </Col>
                        <Col md={6} xl={3}>
                          <FormLabel>Return Date</FormLabel>
                          <Flatpicker className="form-control-lg" placeholder="Select date" options={{ dateFormat: 'd M', defaultDate: '20 Nov' }} />
                        </Col>
                        <Col md={6} xl={3}>
                          <FormLabel>Return time</FormLabel>
                          <Flatpicker
                            className="form-control-lg"
                            placeholder="Select time"
                            options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K', defaultDate: '2:50 PM' }}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={2}>
                      <Button size="lg" variant="primary" className="btn btn-lg w-100 mb-0" href="">
                        Update
                      </Button>
                    </Col>
                  </form>
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

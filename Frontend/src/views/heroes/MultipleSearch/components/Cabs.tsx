import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'
import clsx from 'clsx'
import { useState } from 'react'
import { CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { BsArrowRight, BsCalendar, BsGeoAlt } from 'react-icons/bs'
import { FaCar, FaRightLeft } from 'react-icons/fa6'

const Cabs = () => {
  const [activeTab, setActiveTab] = useState<'one-way' | 'round-trip'>('one-way')

  return (
    <form className="card shadow p-0">
      <CardHeader className="d-sm-flex justify-content-between align-items-center p-4">
        <h5 className="mb-3 mb-sm-0">
          <FaCar className="me-2" />
          Cab Booking
        </h5>
        <ul className="nav nav-pills nav-pills-dark" id="pills-tab-2" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              type="button"
              onClick={() => setActiveTab('one-way')}
              className={clsx('nav-link mb-0 rounded-start rounded-0', activeTab === 'one-way' && 'active')}
            >
              One Way
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              onClick={() => setActiveTab('round-trip')}
              className={clsx('nav-link mb-0 rounded-end rounded-0', activeTab === 'round-trip' && 'active')}
            >
              Round Trip
            </button>
          </li>
        </ul>
      </CardHeader>
      <CardBody className="p-4 pt-0">
        <div className="tab-content" id="pills-tabContent3">
          <div
            className={clsx('tab-pane fade', activeTab === 'one-way' && 'show active')}
            id="pills-one-way-2"
            role="tabpanel"
            aria-labelledby="pills-one-way-2-tab"
          >
            <Row className="g-4">
              <Col md={6} className="position-relative">
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Select pickup location</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsGeoAlt className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
                <div className="btn-flip-icon z-index-9">
                  <button type="button" className="btn btn-white shadow btn-round mb-0 flex-centered">
                    <FaRightLeft />
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Select drop location</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsGeoAlt className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker className="form-control-lg" options={{ dateFormat: 'd M y' }} placeholder="Select pickup date" />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker
                    className="form-control-lg"
                    options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                    placeholder="Select pickup time"
                  />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
            </Row>
            <div className="text-center pt-0">
              <button className="btn btn-lg btn-primary mb-n7">
                Search Cabs <BsArrowRight className=" ms-3" />
              </button>
            </div>
          </div>
          <div
            className={clsx('tab-pane fade', activeTab === 'round-trip' && 'show active')}
            id="pills-round-way-2"
            role="tabpanel"
            aria-labelledby="pills-round-way-2-tab"
          >
            <Row className="g-4">
              <Col md={6} className="position-relative">
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Select pickup location</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsGeoAlt className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
                <div className="btn-flip-icon z-index-9">
                  <button type="button" className="btn btn-white shadow btn-round mb-0 flex-centered">
                    <FaRightLeft />
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Select drop location</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsGeoAlt className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker className="form-control-lg" options={{ dateFormat: 'd M y' }} placeholder="Select pickup date" />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker
                    className="form-control-lg"
                    options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                    placeholder="Select pickup time"
                  />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker className="form-control-lg" options={{ dateFormat: 'd M y' }} placeholder="Select return date" />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker
                    className="form-control-lg"
                    options={{ enableTime: true, noCalendar: true, dateFormat: 'h:i K' }}
                    placeholder="Select return time"
                  />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
            </Row>
            <div className="text-center pt-0">
              <button className="btn btn-lg btn-primary mb-n7">
                Search cabs <BsArrowRight className=" ms-3" />
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </form>
  )
}

export default Cabs

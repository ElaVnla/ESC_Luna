import { SelectFormInput, TextFormInput } from '@/components'
import { useToggle } from '@/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import Nouislider from 'nouislider-react'
import { useState } from 'react'
import { Col, Collapse, Container, FormLabel, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCalendar, BsGeoAlt, BsSliders, BsStarFill } from 'react-icons/bs'
import { FaPersonSkating } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import DiscountAlert from './DiscountAlert'

import bgImg4 from '@/assets/images/bg/04.jpg'
import Flatpicker from '@/components/Flatpicker'

const Hero = () => {
  const { isOpen, toggle } = useToggle()
  const [priceRange, setPriceRange] = useState<string[]>(['700', '1500'])
  const [stayDuration, setStayDuration] = useState<string[]>(['3', '4'])

  const paymentSchema = yup.object({
    tourName: yup.string().required('Please enter tour name'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(paymentSchema),
  })

  return (
    <section className="pt-0">
      <Container>
        <div
          className="p-3 p-sm-5 rounded-3"
          style={{ backgroundImage: `url(${bgImg4})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Row>
            <Col md={8} className="mx-auto my-5">
              <h1 className="text-center text-dark">Maldives</h1>
              <ul className="nav nav-divider h6 text-dark mb-0 justify-content-center">
                <li className="nav-item">1 Destination</li>
                <li className="nav-item">115 Package</li>
              </ul>
            </Col>
          </Row>
        </div>
        <Row className="mt-n4 mt-sm-n7">
          <Col xs={11} className="mx-auto">
            <div className="bg-mode shadow p-4 rounded-3">
              <form onSubmit={handleSubmit(() => {})} className="form-control-bg-transparent bg-mode rounded-3">
                <Row className="g-4 align-items-center">
                  <Col xl={10}>
                    <Row className="g-4">
                      <Col md={6} lg={4}>
                        <label className="h6 fw-normal mb-0 items-center">
                          <BsGeoAlt className=" text-primary me-1" />
                          Location
                        </label>
                        <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                          <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                            <option value={-1}>Select location</option>
                            <option>San Jacinto, USA</option>
                            <option>North Dakota, Canada</option>
                            <option>West Virginia, Paris</option>
                          </SelectFormInput>
                        </div>
                      </Col>
                      <Col md={6} lg={4}>
                        <label className="h6 fw-normal mb-0 items-center">
                          <BsCalendar className=" text-primary me-1" />
                          Date
                        </label>
                        <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                          <Flatpicker placeholder="Choose a date" options={{ dateFormat: 'd M Y', defaultDate: '20 Nov 2022' }} />
                        </div>
                      </Col>
                      <Col md={6} lg={4}>
                        <label className="h6 fw-normal mb-0 items-center">
                          <FaPersonSkating className="text-primary me-1" />
                          Tour type
                        </label>
                        <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                          <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                            <option value={-1}>Select type</option>
                            <option>Adventure</option>
                            <option>Beach</option>
                            <option>Desert</option>
                            <option>History</option>
                          </SelectFormInput>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={2}>
                    <div className="d-grid">
                      <Link to="" className="btn btn-lg btn-dark mb-0">
                        Take a Tour
                      </Link>
                    </div>
                  </Col>
                </Row>
              </form>
              <div className="d-grid mt-4">
                <input type="checkbox" className="btn-check" id="btn-check-soft" />
                <label onClick={toggle} className="btn btn-primary-soft btn-primary-check mb-0 flex-centered" htmlFor="btn-check-soft">
                  <BsSliders className=" fa-fe me-2" />
                  Advance Filters
                </label>
              </div>
              <Collapse in={isOpen}>
                <form className="row g-4 mt-3">
                  <Col md={6} lg={4}>
                    <TextFormInput
                      containerClass="form-control-borderless"
                      label="Enter Tour Name"
                      className="form-control-lg bg-light"
                      control={control}
                      name="tourName"
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <FormLabel>Price Range</FormLabel>
                    <div className="position-relative">
                      <div className="noui-wrapper">
                        <div className="d-flex justify-content-between">
                          <input type="text" className="text-body input-with-range-min" value={priceRange[0].split('.')[0]} readOnly />
                          <input type="text" className="text-body input-with-range-max" value={priceRange[1].split('.')[0]} readOnly />
                        </div>

                        <Nouislider
                          start={priceRange}
                          range={{
                            min: 500,
                            max: 2000,
                          }}
                          step={1}
                          onChange={setPriceRange}
                          className="noui-slider-range mt-2"
                          connect
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <FormLabel>Duration (3D/4N)</FormLabel>
                    <div className="position-relative">
                      <div className="noui-wrapper">
                        <div className="d-flex justify-content-between">
                          <input type="text" className="text-body input-with-range-min" value={stayDuration[0].split('.')[0]} readOnly />
                          <input type="text" className="text-body input-with-range-max" value={stayDuration[1].split('.')[0]} readOnly />
                        </div>

                        <Nouislider
                          start={stayDuration}
                          range={{
                            min: 2,
                            max: 7,
                          }}
                          step={1}
                          onChange={setStayDuration}
                          className="noui-slider-range mt-2"
                          connect
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <FormLabel>Flights</FormLabel>
                    <div>
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                        <label className="btn btn-light btn-primary-soft-check mb-0" htmlFor="btnradio1">
                          With Flights
                        </label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                        <label className="btn btn-light btn-primary-soft-check mb-0" htmlFor="btnradio2">
                          Without Flights
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4}>
                    <FormLabel>Star Rating</FormLabel>
                    <ul className="list-inline mb-0 g-3">
                      {Array.from(new Array(5)).map((_val, idx) => (
                        <li className="list-inline-item" key={idx}>
                          <input type="checkbox" className="btn-check" id={`btn-check-filter-${idx}`} />
                          <label className="btn btn-light btn-primary-soft-check items-center" htmlFor={`btn-check-filter-${idx}`}>
                            {idx + 1}
                            <BsStarFill size={16} />
                          </label>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6} lg={4}>
                    <div className="form-control-bg-light form-size-lg">
                      <label className="form-label">Holiday Type</label>
                      <SelectFormInput className="form-select js-choice">
                        <option value={-1}>Select Option</option>
                        <option>Most Popular</option>
                        <option>Experiential Stays</option>
                        <option>Featured</option>
                        <option>Group Holiday</option>
                        <option>Experiential</option>
                        <option>Offbeat</option>
                        <option>Indulgence</option>
                        <option>Fully Loaded</option>
                        <option>Kid-friendly</option>
                      </SelectFormInput>
                    </div>
                  </Col>
                </form>
              </Collapse>
            </div>
          </Col>
        </Row>

        <DiscountAlert />
      </Container>
    </section>
  )
}

export default Hero

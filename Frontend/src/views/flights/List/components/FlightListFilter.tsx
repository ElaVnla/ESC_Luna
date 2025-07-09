import { useToggle } from '@/hooks'
import Nouislider from 'nouislider-react'
import { Fragment, useState } from 'react'
import { Card, Col, Collapse, Image } from 'react-bootstrap'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import element12 from '@/assets/images/element/12.svg'
import element13 from '@/assets/images/element/13.svg'
import element14 from '@/assets/images/element/14.svg'
import element15 from '@/assets/images/element/15.svg'

const FlightListFilter = () => {
  const { isOpen, toggle } = useToggle()
  const { isOpen: openCollapse, toggle: toggleCollapse } = useToggle()

  const [priceRange, setPriceRange] = useState<string[]>(['700', '1500'])

  return (
    <form className="rounded-3 shadow">
      <Card className="card-body rounded-0 rounded-top p-4">
        <h6 className="mb-2">Popular Filters</h6>
        <Col xs={12}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="popolarType1" />
              <label className="form-check-label" htmlFor="popolarType1">
                Refundable Fare
              </label>
            </div>
            <span className="small">(41)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="popolarType2" />
              <label className="form-check-label" htmlFor="popolarType2">
                1 Stop
              </label>
            </div>
            <span className="small">(20)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="popolarType3" />
              <label className="form-check-label" htmlFor="popolarType3">
                Late Departure
              </label>
            </div>
            <span className="small">(4)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="popolarType4" />
              <label className="form-check-label" htmlFor="popolarType4">
                Non-Stop
              </label>
            </div>
            <span className="small">(2)</span>
          </div>
        </Col>
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 p-4">
        <h6 className="mb-2">Price</h6>
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
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 p-4">
        <h6 className="mb-2">Onward Stops</h6>
        <ul className="list-inline mb-0 g-3">
          <li className="list-inline-item mb-0">
            <input type="checkbox" className="btn-check" id="btn-check-c1" />
            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c1">
              Direct
            </label>
          </li>
          <li className="list-inline-item mb-0">
            <input type="checkbox" className="btn-check" id="btn-check-c2" />
            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c2">
              1 Stop
            </label>
          </li>
          <li className="list-inline-item mb-0">
            <input type="checkbox" className="btn-check" id="btn-check-c3" />
            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c3">
              2+ Stops
            </label>
          </li>
        </ul>
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 p-4">
        <h6 className="mb-2">Return Stops</h6>
        <ul className="list-inline mb-0 g-3">
          <li className="list-inline-item mb-0">
            <input type="checkbox" className="btn-check" id="btn-check-6" />
            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-6">
              Direct
            </label>
          </li>
          <li className="list-inline-item mb-0">
            <input type="checkbox" className="btn-check" id="btn-check-7" />
            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-7">
              1 Stop
            </label>
          </li>
          <li className="list-inline-item mb-0">
            <input type="checkbox" className="btn-check" id="btn-check-8" />
            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-8">
              2+ Stops
            </label>
          </li>
        </ul>
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 p-4">
        <h6 className="mb-2">Preferred Airline</h6>
        <Col xs={12}>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="airlineType1" />
            <label className="form-check-label" htmlFor="airlineType1">
              <Image src={element12} className="h-15px fa-fw me-2" />
              &nbsp;Blogzine
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="airlineType2" />
            <label className="form-check-label" htmlFor="airlineType2">
              <Image src={element13} className="h-15px fa-fw me-2" />
              Wizixo
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="airlineType3" />
            <label className="form-check-label" htmlFor="airlineType3">
              <Image src={element14} className="h-15px fa-fw me-2" />
              Folio airline
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="airlineType4" />
            <label className="form-check-label" htmlFor="airlineType4">
              <Image src={element15} className="h-15px fa-fw me-2" />
              Booking
            </label>
          </div>
          <Collapse in={isOpen}>
            <div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="airlineType7" />
                <label className="form-check-label" htmlFor="airlineType7">
                  <Image src={element15} className="h-15px fa-fw me-2" />
                  Formex
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="airlineType8" />
                <label className="form-check-label" htmlFor="airlineType8">
                  <Image src={element13} className="h-15px fa-fw me-2" />
                  Realty
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="airlineType9" />
                <label className="form-check-label" htmlFor="airlineType9">
                  <Image src={element12} className="h-15px fa-fw me-2" />
                  rocyon
                </label>
              </div>
            </div>
          </Collapse>

          <a onClick={toggle} className="p-0 mb-0 mt-2 btn-more d-flex align-items-center collapsed">
            {!isOpen ? (
              <Fragment>
                <span role="button" className="see-more">
                  See more
                </span>
                <FaAngleDown className="ms-2" />
              </Fragment>
            ) : (
              <Fragment>
                <span role="button">See less</span>
                <FaAngleUp className="ms-2" />
              </Fragment>
            )}
          </a>
        </Col>
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 rounded-bottom p-4">
        <h6 className="mb-2">Layover Airport</h6>
        <Col xs={12}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="lauoverType1" />
              <label className="form-check-label" htmlFor="lauoverType1">
                Abu Dhabi
              </label>
            </div>
            <span className="small">(01)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="lauoverType2" />
              <label className="form-check-label" htmlFor="lauoverType2">
                Amsterdam
              </label>
            </div>
            <span className="small">(02)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="lauoverType3" />
              <label className="form-check-label" htmlFor="lauoverType3">
                Chicago
              </label>
            </div>
            <span className="small">(02)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="lauoverType4" />
              <label className="form-check-label" htmlFor="lauoverType4">
                Doha
              </label>
            </div>
            <span className="small">(03)</span>
          </div>
          <Collapse in={openCollapse}>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="lauoverType7" />
                  <label className="form-check-label" htmlFor="lauoverType7">
                    Dubai
                  </label>
                </div>
                <span className="small">(04)</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="lauoverType8" />
                  <label className="form-check-label" htmlFor="lauoverType8">
                    New Delhi
                  </label>
                </div>
                <span className="small">(15)</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="lauoverType9" />
                  <label className="form-check-label" htmlFor="lauoverType9">
                    Paris
                  </label>
                </div>
                <span className="small">(04)</span>
              </div>
            </div>
          </Collapse>
          <a onClick={toggleCollapse} className="btn-more d-flex align-items-center collapsed p-0 mb-0 mt-2">
            {!openCollapse ? (
              <Fragment>
                <span role="button" className="see-more">
                  See more
                </span>
                <FaAngleDown className="ms-2" />
              </Fragment>
            ) : (
              <Fragment>
                <span role="button">See less</span>
                <FaAngleUp className="ms-2" />
              </Fragment>
            )}
          </a>
        </Col>
      </Card>
    </form>
  )
}

export default FlightListFilter

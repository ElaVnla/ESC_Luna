import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'
import { CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { BsArrowRight, BsCalendar, BsGeoAlt } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaPersonSkating } from 'react-icons/fa6'

const Tour = () => {
  return (
    <form className="card shadow p-0">
      <CardHeader className="p-4">
        <h5 className="mb-0">
          <FaGlobeAmericas className="fa-fw me-2" />
          Tour Booking
        </h5>
      </CardHeader>
      <CardBody className="p-4 pt-0">
        <Row className="g-4">
          <Col lg={4}>
            <div className="form-icon-input form-size-lg form-fs-lg">
              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                <option value={-1}>Select tour location</option>
                <option>San Jacinto, USA</option>
                <option>North Dakota, Canada</option>
                <option>West Virginia, Paris</option>
              </SelectFormInput>
              <span className="form-icon">
                <div>
                  <BsGeoAlt className="mb-1" size={21} />
                </div>
              </span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="form-icon-input form-fs-lg">
              <Flatpicker className="form-control-lg" options={{ dateFormat: 'd M y' }} placeholder="Select date" />
              <span className="form-icon">
                <div>
                  <BsCalendar className=" mb-1" size={21} />
                </div>
              </span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="form-icon-input form-size-lg form-fs-lg">
              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                <option value={-1}>Select tour type</option>
                <option>Adventure</option>
                <option>Beach</option>
                <option>Desert</option>
                <option>History</option>
              </SelectFormInput>
              <span className="form-icon">
                <div>
                  <FaPersonSkating className="mb-1" size={21} />
                </div>
              </span>
            </div>
          </Col>
        </Row>
        <div className="text-center pt-0">
          <button className="btn btn-lg btn-primary mb-n7">
            Search Tour <BsArrowRight className=" ms-3" />
          </button>
        </div>
      </CardBody>
    </form>
  )
}

export default Tour

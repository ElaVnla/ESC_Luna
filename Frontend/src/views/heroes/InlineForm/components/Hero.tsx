import { SelectFormInput } from '@/components'
import { Col, Container, Row } from 'react-bootstrap'

import bgImg10 from '@/assets/images/bg/10.jpg'
import Flatpicker from '@/components/Flatpicker'

const Hero = () => {
  return (
    <section
      className="position-relative py-xl-9"
      style={{ backgroundImage: `url(${bgImg10})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
      <Container className="z-index-9">
        <Row>
          <Col lg={10} className="m-auto text-center position-relative z-index-9">
            <form className="form-control-inline my-5">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <label className="form-control-inline-text">We are</label>
                <span className="d-flex align-items-center">
                  <SelectFormInput className="form-select js-choice">
                    <option value={-1}>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>5+</option>
                  </SelectFormInput>
                </span>
                <label className="form-control-inline-text">People, Looking for</label>
                <span className="d-inline-block">
                  <SelectFormInput className="form-select js-choice">
                    <option value={-1}>Select</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Hotel</option>
                    <option>Hostel</option>
                  </SelectFormInput>
                </span>
                <label className="form-control-inline-text">around</label>
                <span className="d-inline-block">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Select</option>
                    <option>California, USA</option>
                    <option>New York, USA</option>
                    <option>London, UK</option>
                  </SelectFormInput>
                </span>
                <label className="form-control-inline-text">,</label>
                <span className="d-inline-block">
                  <Flatpicker options={{ mode: 'range', dateFormat: 'd M' }} placeholder="From - To" />
                </span>
                <label className="form-control-inline-text">.</label>
              </div>
              <button className="icon-xxl bg-primary btn-dark-hover rounded-circle btn fs-6 text-white p-0 mt-4" type="button">
                Search
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

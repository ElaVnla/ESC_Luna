import { SelectFormInput } from '@/components'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsAirplane, BsBuilding, BsCarFront, BsCupStraw, BsEggFried, BsEmojiKiss, BsFire, BsGeoAlt, BsSearch, BsTv } from 'react-icons/bs'
import { FaCrosshairs } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import bgImg20 from '@/assets/images/bg/20.jpg'

const Hero = () => {
  return (
    <section
      className="position-relative py-8 py-lg-9"
      style={{ backgroundImage: `url(${bgImg20})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
    >
      <div className="bg-overlay bg-dark opacity-8" />
      <Container className="z-index-9 position-relative">
        <Row className="py-sm-5">
          <Col xl={8} className="m-auto text-center">
            <h6 className="text-white fw-normal mb-3">Discover &amp; Connect With Great Places Around The World</h6>
            <h1 className="display-4 text-white mb-0">
              Let's Discover
              <span className="position-relative z-index-9 d-block">
                London
                <span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-md-block mt-4">
                  <svg width="390.5px" height="21.5px" viewBox="0 0 445.5 21.5">
                    <path
                      className="fill-primary opacity-7"
                      d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </Col>
          <Col xl={10} className="mx-auto">
            <div className="bg-blur bg-white bg-opacity-10 border border-light border-opacity-25 rounded-3 p-4 mt-5">
              <form className="row g-3 justify-content-center align-items-center">
                <Col lg={5}>
                  <Dropdown className="form-input-dropdown position-relative">
                    <DropdownToggle
                      as="input"
                      className="form-control form-control-lg me-1 ps-5 arrow-none"
                      placeholder="What are you looking for.."
                    />
                    <DropdownMenu className="input-dropdown shadow rounded-0 rounded-bottom w-100">
                    
                        <DropdownItem className="items-center">
                          <BsBuilding className=" fa-fw text-primary me-2" />
                          Hotels
                        </DropdownItem>
                      
                        <DropdownItem className="items-center">
                          <BsEggFried className=" fa-fw text-primary me-2" />
                          Restaurants
                        </DropdownItem>
                    
                        <DropdownItem className="items-center">
                          <BsAirplane className=" fa-fw text-primary me-2" />
                          Flights
                        </DropdownItem>
                      
                        <DropdownItem className="items-center">
                          <BsCupStraw className=" fa-fw text-primary me-2" />
                          Bars
                        </DropdownItem>
                   
                        <DropdownItem className="items-center">
                          <BsTv className=" fa-fw text-primary me-2" />
                          Arts &amp; Entertainment
                        </DropdownItem>
                     
                        <DropdownItem className="items-center">
                          <BsCarFront className=" fa-fw text-primary me-2" />
                          Automotive
                        </DropdownItem>
                   
                        <DropdownItem className="items-center">
                          <BsEmojiKiss className=" fa-fw text-primary me-2" />
                          Beauty &amp; Spa
                        </DropdownItem>
                     
                        <DropdownItem className="items-center">
                          <BsFire className=" fa-fw text-primary me-2" />
                          Nightlife
                        </DropdownItem>
                     
                    </DropdownMenu>
                    <span className="position-absolute top-50 start-0 translate-middle ps-5">
                      <BsSearch className=" fs-5" />
                    </span>
                  </Dropdown>
                </Col>
                <Col lg={5}>
                  <div className="form-mix-icon-input form-size-lg">
                    <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                      <option value={-1}>Search hotel</option>
                      <option>San Jacinto, USA</option>
                      <option>North Dakota, Canada</option>
                      <option>West Virginia, Paris</option>
                    </SelectFormInput>
                    <span className="position-absolute top-50 start-0 translate-middle ps-5">
                      <BsGeoAlt className="fs-5" />
                    </span>
                    <Link to="" className="h6 mb-0 position-absolute top-50 end-0 translate-middle pe-1">
                      <FaCrosshairs />
                    </Link>
                  </div>
                </Col>
                <Col lg={2} className="d-grid">
                  <Link className="btn btn-lg btn-primary mb-0" to="">
                    Search
                  </Link>
                </Col>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

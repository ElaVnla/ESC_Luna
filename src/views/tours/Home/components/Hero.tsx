import { Button, Card, CardBody, CardImg, Col, Container, Image, Row } from 'react-bootstrap'

import bgImg2 from '@/assets/images/bg/02.jpg'
import element5 from '@/assets/images/element/05.svg'
import tour5 from '@/assets/images/category/tour/05.jpg'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsCalendar, BsGeoAlt } from 'react-icons/bs'
import { FaPersonSkating } from 'react-icons/fa6'
import { useToggle } from '@/hooks'
import { currency } from '@/states'
import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'

const recentSearches = [
  'Taman Sari',
  'The Grand Palace',
  'Glacier National Park',
  'Machu Picchu',
  'Prambanan Temple ',
  'Batu Gong',
  'Barobadur Temple',
  'Great Barrier Reef',
  'Argentine Patagonia',
]

const RecentSearch = ({ searchName }: { searchName: string }) => {
  const { isOpen, toggle } = useToggle(true)
  return (
    <>
      {isOpen && (
        <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
          <span className="me-1">{searchName}</span>
          <button type="button" className="btn-close small p-2" onClick={toggle} />
        </div>
      )}
    </>
  )
}

const OfferCard = () => {
  return (
    <Card className="shadow p-2 pb-0">
      <div className="position-absolute top-0 start-0 mt-n3 ms-n3 z-index-9">
        <Image src={element5} className="position-relative h-70px" />
        <span className="h5 text-white position-absolute top-50 start-50 translate-middle">40%</span>
      </div>
      <div className="rounded-3 overflow-hidden position-relative">
        <CardImg src={tour5} />
        <div className="bg-overlay bg-dark opacity-4" />
        <div className="card-img-overlay d-flex">
          <h6 className="text-white fw-normal mt-auto mb-0">5 Days / 4 Nights</h6>
        </div>
      </div>
      <CardBody className="px-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Link to="" className="badge bg-primary bg-opacity-10 text-primary">
            Adventure
          </Link>
          <h6 className="fw-light m-0 items-center">
            <FaStar size={18} className="text-warning me-2" />
            4.5
          </h6>
        </div>
        <h6 className="card-title">
          <Link to="">Maldives Sightseeing &amp; Adventure Tour</Link>
        </h6>
        <div className="d-flex justify-content-between align-items-center mb-0">
          <h6 className="text-success mb-0">
            {currency}385 <span className="fw-light">/person</span>
          </h6>
          <span className="text-decoration-line-through mb-0 text-reset">{currency}682</span>
        </div>
      </CardBody>
    </Card>
  )
}

const Hero = () => {
  return (
    <section className="pt-0">
      <Container className="position-relative">
        <div
          className="rounded-3 p-4 p-sm-5"
          style={{ backgroundImage: `url(${bgImg2})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Row className="justify-content-between pt-0 pb-5">
            <Col md={7} lg={8} xxl={7} className="pb-5 mb-0 mb-lg-5">
              <h1 className="text-white">Life Is Adventure Make The Best Of It</h1>
              <p className="text-white mb-0">
                Planning for a trip? we will organize your best trip with the best destination and within the best budgets!
              </p>
            </Col>
            <Col md={5} lg={4} xl={3} className="mb-3 mb-sm-0">
              <OfferCard />
            </Col>
          </Row>
        </div>
        <Row className="mt-n7">
          <Col xs={11} className="mx-auto">
            <form className="bg-mode shadow rounded-3 p-4">
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
                        <Flatpicker
                          options={{ dateFormat: 'd M Y' }}
                          className="py-2"
                          placeholder="Choose a date"
                        />
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
                    <Button variant="dark" size="lg" className="mb-0">
                      Take a Tour
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className="g-2 mt-6">
          <Col lg={2}>
            <h4 className="mb-0">Recent Searches</h4>
          </Col>
          <Col lg={10}>
            <div className="hstack flex-wrap gap-3">
              {recentSearches.map((search, idx) => (
                <RecentSearch searchName={search} key={idx} />
              ))}
              <button type="button" className="btn btn-sm btn-primary-soft mb-0">
                {' '}
                Clear all
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

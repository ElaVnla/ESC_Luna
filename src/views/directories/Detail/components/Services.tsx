import { Col, Row } from 'react-bootstrap'
import { BsArrowRight, BsScissors } from 'react-icons/bs'
import { FaSpa } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <h5 className="mb-3 items-center gap-1">
        <FaSpa size={21} className="fa-fw text-warning" /> Spa Services
      </h5>
      <Row>
        <Col sm={6} lg={4} xl={3}>
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Foot Treatments{' '}
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Body Massage{' '}
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Our Special Massage
              </Link>
            </li>
          </ul>
        </Col>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Head &amp; Foot Treatments{' '}
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Body Spa - Scrubs
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Body DE-Tanning
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Body Polishing{' '}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Back Treatments{' '}
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Manicure &amp; Pedicure
              </Link>
            </li>
          </ul>
        </div>
      </Row>
      <h5 className="mb-3 mt-5 items-center gap-1">
        <BsScissors size={21} className=" fa-fw text-warning" /> Salon Services
      </h5>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Threading
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Bleach
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Waxing
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Blow Dry
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Hair Colour
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Facial &amp; Cleanup
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ul className="list-group list-group-borderless mb-0">
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Pre Bridal
              </Link>
            </li>
            <li className="list-group-item h6 fw-normal mb-0">
              <Link to="" className="mb-0">
                {' '}
                <BsArrowRight className=" fa-fw me-1" />
                Bridal Makeup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Services

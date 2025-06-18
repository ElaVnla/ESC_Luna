import { Card, CardBody } from 'react-bootstrap'
import { BsEnvelope, BsGeoAlt, BsTelephoneForward } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const GetDirection = () => {
  return (
    <Card className="shadow mb-4">
      <div className="card-header border-bottom">
        <h5 className="mb-0">Get Direction</h5>
      </div>
      <CardBody>
        <iframe
          className="w-100 grayscale rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
          height={200}
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex={0}
        />
        <ul className="list-group list-group-borderless my-3">
          <li className="list-group-item">
            <Link to="" className="h6 fw-normal mb-0 items-center">
              <BsGeoAlt className=" fa-fw me-2" />
              5855 W Century Blvd, Los Angeles
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="" className="h6 fw-normal mb-0 items-center">
              <BsTelephoneForward className=" fa-fw me-2" />
              +31 123 456 789
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="" className="h6 fw-normal mb-0 items-center">
              <BsEnvelope className=" fa-fw me-2" />
              example@gmail.com
            </Link>
          </li>
        </ul>
        <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item">Follow us on: </li>
          <li className="list-inline-item">
            {' '}
            <Link className="btn btn-sm px-2 bg-facebook mb-0 me-2" to="">
              <FaFacebookF className="fa-fw" />
            </Link>{' '}
          </li>
          <li className="list-inline-item">
            {' '}
            <Link className="btn btn-sm shadow px-2 bg-instagram mb-0 me-2" to="">
              <FaInstagram />
            </Link>{' '}
          </li>
          <li className="list-inline-item">
            {' '}
            <Link className="btn btn-sm shadow px-2 bg-twitter mb-0 me-2" to="">
              <FaTwitter />
            </Link>{' '}
          </li>
          <li className="list-inline-item">
            {' '}
            <Link className="btn btn-sm shadow px-2 bg-linkedin mb-0 me-2" to="">
              <FaLinkedinIn className="fa-fw" />
            </Link>{' '}
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default GetDirection

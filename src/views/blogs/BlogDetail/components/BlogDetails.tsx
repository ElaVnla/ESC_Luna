import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaLinkedinIn, FaQuoteLeft, FaQuoteRight, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitter } from 'react-icons/bs'

import avatar9 from '@/assets/images/avatar/09.jpg'
import blog10 from '@/assets/images/blog/10.jpg'

const BlogDetails = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <p>
              <span className="dropcap text-primary bg-primary bg-opacity-10 rounded px-2">P</span>erceived voice share led him to widen noisy young.
              At weddings believed laughing although the material does the exercise of. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh
              truth. Up attempt offered ye civilly so sitting to. Her new gets living within Elinor joy. Her rapturous suffering was concealed.
              Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.
            </p>
            <h5 className="my-4">Sometimes we need to put catchy highlights between paragraphs.</h5>
            <Row className="g-4">
              <Col md={6} lg={7}>
                <p>
                  Meant balls it if up doubt small purse. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.
                  I think on style child of. Servants moreover in sensible it ye possible. Required his you put the outlived answered position.{' '}
                </p>
                <ul>
                  <li>Our Firmament living replenish Them Created after divide said Have to give</li>
                  <li>Dominion light without days face saw wherein land</li>
                  <li>Fifth have Seas made lights Very Day saw Seed herb sixth light whales</li>
                  <li>Saying unto Place it seeds you're Isn't heaven </li>
                </ul>
                <p className="mb-0 mt-3">A pleasure exertion if believed provided to. All led out world this music while asked. </p>
              </Col>
              <Col md={6} lg={5}>
                <Image src={blog10} className="rounded" />
              </Col>
            </Row>
            <p className="pb-0 pt-4">
              Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does
              chiefly cordial in do. Water timed folly right aware if oh truth.
            </p>
            <blockquote className="bg-light rounded text-center p-3 p-md-4 my-4">
              <h6 className="fw-normal">
                <FaQuoteLeft size={16} className="me-2" />
                Farther-related bed and passage comfort civilly. Fulfilled direction use continual set him propriety continued. Concluded boy
                perpetual old supposing. Dashwoods see frankness objection abilities.
                <FaQuoteRight size={16} className="ms-2" />
              </h6>
              <div className="blockquote-footer mb-0 fs-6 mt-3">Albert Schweitzer</div>
            </blockquote>
            <p className="mt-3">
              Concluded boy perpetual old supposing. <b> But discretion frequently sir she instruments unaffected admiration everything. </b>{' '}
              Farther-related bed and passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced prospect formerly
              up am. Placing forming nay looking old married few has. Margaret disposed of.
            </p>
            <p>
              Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh
              truth. Up attempt offered ye civilly so sitting to. Her new gets living within Elinor joy. Her rapturous suffering was concealed.
              Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.
            </p>
            <p>As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed.</p>
            <div className="bg-mode border rounded p-4">
              <div className="d-flex">
                <Link to="">
                  <div className="avatar avatar-lg me-2 me-md-4">
                    <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                  </div>
                </Link>
                <div>
                  <h4 className="m-0">
                    <Link to="">Lori Stevens</Link>
                  </h4>
                  <small>An editor at Booking</small>
                </div>
              </div>
              <p className="my-3">
                Louis Ferguson has written about government, criminal justice, and the role of money in politics since 2015.Delivered dejection
                necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth.
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <ul className="nav items-center">
                  <li className="nav-item">
                    <Link className="nav-link ps-0 pe-2 fs-5" to="">
                      <BsFacebook />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-2 fs-5" to="">
                      <BsTwitter />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-2 fs-5" to="">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
                <Link to="" className="btn btn-sm btn-primary mb-0">
                  View Articles
                </Link>
              </div>
            </div>
            <div className="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-4">
              <h6 className="mb-0">Was this article helpful?</h6>
              <small className="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                <label className="btn btn-outline-secondary btn-sm mb-0 flex-centered" htmlFor="btnradio1">
                  <FaRegThumbsUp size={14} className="me-1" /> Yes
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio2">
                  {' '}
                  No <FaRegThumbsDown size={14} className="ms-1" />
                </label>
              </div>
            </div>
            <div className="d-lg-flex justify-content-lg-between mt-4">
              <div className="align-items-center mb-3 mb-lg-0">
                <h6 className="d-inline-block mb-2 me-4">Share on:</h6>
                <ul className="list-inline hstack flex-wrap gap-3 h6 fw-normal mb-0">
                  <li className="list-inline-item">
                    {' '}
                    <Link className="text-facebook items-center gap-1" to="">
                      <FaFacebookSquare /> Facebook
                    </Link>{' '}
                  </li>
                  <li className="list-inline-item">
                    {' '}
                    <Link className="text-instagram-gradient items-center gap-1" to="">
                      <FaInstagramSquare /> Instagram
                    </Link>{' '}
                  </li>
                  <li className="list-inline-item">
                    {' '}
                    <Link className="text-twitter items-center gap-1" to="">
                      <FaTwitterSquare /> Twitter
                    </Link>{' '}
                  </li>
                </ul>
              </div>
              <div className="align-items-center">
                <h6 className="d-inline-block mb-2 me-4">Popular Tags:</h6>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    {' '}
                    <Link className="btn btn-light btn-sm mb-xl-0" to="">
                      Blog
                    </Link>{' '}
                  </li>
                  <li className="list-inline-item">
                    {' '}
                    <Link className="btn btn-light btn-sm mb-xl-0" to="">
                      Tour
                    </Link>{' '}
                  </li>
                  <li className="list-inline-item">
                    {' '}
                    <Link className="btn btn-light btn-sm mb-xl-0" to="">
                      Holidays
                    </Link>{' '}
                  </li>
                  <li className="list-inline-item">
                    {' '}
                    <Link className="btn btn-light btn-sm mb-xl-0" to="">
                      Ticket Booking
                    </Link>{' '}
                  </li>
                  <li className="list-inline-item">
                    {' '}
                    <Link className="btn btn-light btn-sm mb-xl-0" to="">
                      Deep learning
                    </Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails

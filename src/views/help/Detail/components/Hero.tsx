import { TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import bgPattern from '@/assets/images/element/bg-pattern.png'

const Hero = () => {
  const subScribeSchema = yup.object({
    search: yup.string().required('Please enter your question'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(subScribeSchema),
  })

  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col xs={12}>
            <Card
              className="card-body bg-primary justify-content-center text-center px-4 px-sm-5 pt-6 pt-md-8 pb-8"
              style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <h1 className="fs-2 text-white mb-4">How Can We Help You?</h1>
              <form onSubmit={handleSubmit(() => {})} className="col-md-6 bg-body rounded mx-auto p-2 mb-3">
                <div className="input-group">
                  <TextFormInput
                    name="search"
                    className="form-control border-0 me-1"
                    placeholder="Search question..."
                    control={control}
                    combinedInput
                  />
                  <Button variant="dark" type="submit" className="rounded mb-0">
                    Search
                  </Button>
                </div>
              </form>
              <div className="row align-items-center mt-4 mb-2">
                <div className="col-md-9 mx-auto">
                  <h6 className="text-white mb-3">Popular questions</h6>
                  <div className="list-group hstack gap-3 justify-content-center flex-wrap mb-0">
                    <Link className="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0" to="/help/detail">
                      {' '}
                      How can we help?
                    </Link>
                    <Link className="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0" to="/help/detail">
                      {' '}
                      How to upload data to the system?{' '}
                    </Link>
                    <Link className="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0" to="/help/detail">
                      {' '}
                      Installation Guide?{' '}
                    </Link>
                    <Link className="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0" to="/help/detail">
                      {' '}
                      How to view expired tickets?{' '}
                    </Link>
                    <Link className="btn btn-link text-white p-0 mb-0" to="#!">
                      View all question
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="mt-n8 pt-2">
          <Col xs={11} className="mx-auto">
            <Card className="shadow">
              <CardHeader className="border-bottom p-4">
                <h4 className="mb-0">Get started with node.js</h4>
                <ul className="nav nav-divider">
                  <li className="nav-item">Last updated: 7 months ago</li>
                  <li className="nav-item">by Sam Lanson</li>
                </ul>
              </CardHeader>
              <CardBody className="p-4">
                <p>
                  Started several mistakes joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him
                  affixed noisier yet. Tickets regard to up he hardly. View four has said do men saw find dear shy.{' '}
                  <b> Talent men wicket add garden.</b>{' '}
                </p>
                <a href="#!" className="btn btn-primary mb-0">
                  Download Node JS
                </a>
                <h5 className="mt-4">Table of Contents</h5>
                <p>Age she way earnestly the fulfilled extremely.</p>
                <Alert variant="warning" role="alert">
                  <strong>Note: </strong>She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am
                  northward.{' '}
                  <a className="alert-link" href="#!">
                    View more
                  </a>
                </Alert>
                <p>
                  Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy
                  alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.{' '}
                </p>
                <ul>
                  <li>
                    Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished
                    raillery.
                  </li>
                  <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
                  <li>
                    Offered chiefly farther of my no colonel shyness. <strong> Such on help ye some door if in.</strong>
                  </li>
                  <li>First am plate jokes to began to cause a scale. Subjects he prospect elegance followed</li>
                  <li>Laughter proposal laughing any son law consider. Needed except up piqued an. </li>
                  <li>
                    <i> To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage.</i>
                  </li>
                  <li>Post no so what deal evil rent by real in. But her ready least set lived spite solid.</li>
                </ul>
                <p className="mb-0">
                  Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my
                  cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in.{' '}
                  <u> Off melancholy alteration principles old. </u>Is do speedily kindness properly oh. Respect article painted cottage he is offices
                  parlors.{' '}
                </p>
              </CardBody>
              <CardFooter className="border-0 p-4 pt-0">
                <div className="border p-3 rounded d-lg-flex align-items-center justify-content-between text-center">
                  <h5 className="m-0">Was this article helpful?</h5>
                  <small className="py-3 py-lg-0 d-block">20 out of 45 found this helpful</small>
                  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                    <label className="btn btn-outline-light btn-sm mb-0 items-center" htmlFor="btnradio1">
                      <FaThumbsUp className="me-1" /> Yes
                    </label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                    <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio2">
                      {' '}
                      No <FaThumbsDown className="ms-1" />
                    </label>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

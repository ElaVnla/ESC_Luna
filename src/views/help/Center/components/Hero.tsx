import { TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import { helpServices } from '../data'

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
              <form onSubmit={handleSubmit(() => { })} className="col-md-6 bg-body rounded mx-auto p-2 mb-3">
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
        <Row className="g-4 mt-n8">
          <Col xs={10} lg={11} xl={10} className="mx-auto">
            <Row className="g-4">
              {helpServices.map((help, idx) => {
                const Icon = help.icon
                return (
                  <Col key={idx} lg={4}>
                    <Card className="shadow h-100">
                      <CardHeader className="d-flex align-items-center pb-3 mt-2">
                        <Icon className={clsx('fs-2 me-2', help.variant)} />
                        <h5 className="card-title mb-0">{help.title}</h5>
                      </CardHeader>
                      <CardBody className="pt-0">
                        <ul className="nav flex-column">
                          {help.services.map((service, idx) => (
                            <li key={idx} className="nav-item">
                              <Link className="nav-link d-flex" to="/help/detail">
                                <span ><FaAngleRight size={24} className="text-primary" /></span>
                                <p className='mb-0'>{service}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

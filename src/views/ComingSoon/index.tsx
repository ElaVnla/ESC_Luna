import { PageMetaData, TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import comingSoon from '@/assets/images/element/coming-soon.svg'

const ComingSoon = () => {
  const subScribeSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(subScribeSchema),
  })

  return (
    <main>
      <PageMetaData title="Coming Soon" />
      <section className="p-xl-0">
        <Container>
          <Row className="d-flex justify-content-center align-items-center text-center vh-100">
            <Col xl={8}>
              <h6 className="text-primary">Coming Soon</h6>
              <h1>New website is on a roll!!</h1>
              <p className="mb-0">Hey, you! Booking is coming. We are doing our best to launch our website and we will be back soon.</p>
              <form onSubmit={handleSubmit(() => {})} className="mt-4">
                <h6>Notify me when the website is launched</h6>
                <Col md={9} className="mx-auto border rounded-2 p-2">
                  <div className="input-group">
                    <TextFormInput
                      name="email"
                      type="email"
                      className="form-control border-0 me-1"
                      placeholder="Enter your email"
                      control={control}
                      combinedInput
                    />
                    <button type="submit" className="btn btn-primary rounded-2 mb-0">
                      Notify Me!
                    </button>
                  </div>
                </Col>
              </form>
              <ul className="list-inline hstack flex-wrap gap-2 gap-lg-4 h6 justify-content-center mt-4 mb-0">
                <li className="list-inline-item">
                  {' '}
                  <Link className="items-center gap-1 text-facebook" to="">
                    <FaFacebookSquare /> Facebook
                  </Link>{' '}
                </li>
                <li className="list-inline-item">
                  {' '}
                  <Link className="items-center gap-1 text-instagram-gradient" to="">
                    <FaInstagramSquare /> Instagram
                  </Link>{' '}
                </li>
                <li className="list-inline-item">
                  {' '}
                  <Link className="items-center gap-1 text-twitter" to="">
                    <FaTwitterSquare /> Twitter
                  </Link>{' '}
                </li>
                <li className="list-inline-item">
                  {' '}
                  <Link className="items-center gap-1 text-linkedin" to="">
                    <FaLinkedin /> Linkedin
                  </Link>{' '}
                </li>
              </ul>
              <Image src={comingSoon} className="h-sm-300px h-xxl-400px mt-4" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default ComingSoon

import { TextAreaFormInput, TextFormInput } from '@/components'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'

import about5 from '@/assets/images/about/05.jpg'

const ContactForm = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup.string().required('Please enter your email'),
    message: yup.string().required('Please enter your message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  return (
    <section className="pt-4 pt-md-5">
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <h1>Let's talk about traveling</h1>
            <form onSubmit={handleSubmit(() => {})} className="mt-4">
              <TextFormInput name="name" label="Your name *" containerClass="mb-4 form-control-bg-light" control={control} />
              <TextFormInput name="email" label="Email address *" containerClass="mb-4 form-control-bg-light" control={control} />
              <TextAreaFormInput name="message" label="Message *" rows={4} containerClass="mb-4 form-control-bg-light" control={control} />
              <div>
                <Button variant="primary" size="lg" className="mb-0" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </Col>
          <Col lg={6} xl={5} className="text-center text-lg-end position-relative ms-auto">
            <figure className="position-absolute start-0 top-0 d-none d-md-block mt-n5 ms-n3">
              <svg height={400} className="fill-primary opacity-2" viewBox="0 0 340 340">
                {' '}
                <circle cx="194.2" cy="2.2" r="2.2" /> <circle cx="2.2" cy="2.2" r="2.2" /> <circle cx="218.2" cy="2.2" r="2.2" />{' '}
                <circle cx="26.2" cy="2.2" r="2.2" /> <circle cx="242.2" cy="2.2" r="2.2" /> <circle cx="50.2" cy="2.2" r="2.2" />{' '}
                <circle cx="266.2" cy="2.2" r="2.2" /> <circle cx="74.2" cy="2.2" r="2.2" /> <circle cx="290.2" cy="2.2" r="2.2" />{' '}
                <circle cx="98.2" cy="2.2" r="2.2" /> <circle cx="314.2" cy="2.2" r="2.2" /> <circle cx="122.2" cy="2.2" r="2.2" />{' '}
                <circle cx="338.2" cy="2.2" r="2.2" /> <circle cx="146.2" cy="2.2" r="2.2" /> <circle cx="170.2" cy="2.2" r="2.2" />{' '}
                <circle cx="194.2" cy="26.2" r="2.2" /> <circle cx="2.2" cy="26.2" r="2.2" /> <circle cx="218.2" cy="26.2" r="2.2" />{' '}
                <circle cx="26.2" cy="26.2" r="2.2" /> <circle cx="242.2" cy="26.2" r="2.2" /> <circle cx="50.2" cy="26.2" r="2.2" />{' '}
                <circle cx="266.2" cy="26.2" r="2.2" /> <circle cx="74.2" cy="26.2" r="2.2" /> <circle cx="290.2" cy="26.2" r="2.2" />{' '}
                <circle cx="98.2" cy="26.2" r="2.2" /> <circle cx="314.2" cy="26.2" r="2.2" /> <circle cx="122.2" cy="26.2" r="2.2" />{' '}
                <circle cx="338.2" cy="26.2" r="2.2" /> <circle cx="146.2" cy="26.2" r="2.2" /> <circle cx="170.2" cy="26.2" r="2.2" />{' '}
                <circle cx="194.2" cy="50.2" r="2.2" /> <circle cx="2.2" cy="50.2" r="2.2" /> <circle cx="218.2" cy="50.2" r="2.2" />{' '}
                <circle cx="26.2" cy="50.2" r="2.2" /> <circle cx="242.2" cy="50.2" r="2.2" /> <circle cx="50.2" cy="50.2" r="2.2" />{' '}
                <circle cx="266.2" cy="50.2" r="2.2" /> <circle cx="74.2" cy="50.2" r="2.2" /> <circle cx="290.2" cy="50.2" r="2.2" />{' '}
                <circle cx="98.2" cy="50.2" r="2.2" /> <circle cx="314.2" cy="50.2" r="2.2" /> <circle cx="122.2" cy="50.2" r="2.2" />{' '}
                <circle cx="338.2" cy="50.2" r="2.2" /> <circle cx="146.2" cy="50.2" r="2.2" /> <circle cx="170.2" cy="50.2" r="2.2" />{' '}
                <circle cx="194.2" cy="74.2" r="2.2" /> <circle cx="2.2" cy="74.2" r="2.2" /> <circle cx="218.2" cy="74.2" r="2.2" />{' '}
                <circle cx="26.2" cy="74.2" r="2.2" /> <circle cx="242.2" cy="74.2" r="2.2" /> <circle cx="50.2" cy="74.2" r="2.2" />{' '}
                <circle cx="266.2" cy="74.2" r="2.2" /> <circle cx="74.2" cy="74.2" r="2.2" /> <circle cx="290.2" cy="74.2" r="2.2" />{' '}
                <circle cx="98.2" cy="74.2" r="2.2" /> <circle cx="314.2" cy="74.2" r="2.2" /> <circle cx="122.2" cy="74.2" r="2.2" />{' '}
                <circle cx="338.2" cy="74.2" r="2.2" /> <circle cx="146.2" cy="74.2" r="2.2" /> <circle cx="170.2" cy="74.2" r="2.2" />{' '}
                <circle cx="194.2" cy="98.2" r="2.2" /> <circle cx="2.2" cy="98.2" r="2.2" /> <circle cx="218.2" cy="98.2" r="2.2" />{' '}
                <circle cx="26.2" cy="98.2" r="2.2" /> <circle cx="242.2" cy="98.2" r="2.2" /> <circle cx="50.2" cy="98.2" r="2.2" />{' '}
                <circle cx="266.2" cy="98.2" r="2.2" /> <circle cx="74.2" cy="98.2" r="2.2" /> <circle cx="290.2" cy="98.2" r="2.2" />{' '}
                <circle cx="98.2" cy="98.2" r="2.2" /> <circle cx="314.2" cy="98.2" r="2.2" /> <circle cx="122.2" cy="98.2" r="2.2" />{' '}
                <circle cx="338.2" cy="98.2" r="2.2" /> <circle cx="146.2" cy="98.2" r="2.2" /> <circle cx="170.2" cy="98.2" r="2.2" />{' '}
                <circle cx="194.2" cy="122.2" r="2.2" /> <circle cx="2.2" cy="122.2" r="2.2" /> <circle cx="218.2" cy="122.2" r="2.2" />{' '}
                <circle cx="26.2" cy="122.2" r="2.2" /> <circle cx="242.2" cy="122.2" r="2.2" /> <circle cx="50.2" cy="122.2" r="2.2" />{' '}
                <circle cx="266.2" cy="122.2" r="2.2" /> <circle cx="74.2" cy="122.2" r="2.2" /> <circle cx="290.2" cy="122.2" r="2.2" />{' '}
                <circle cx="98.2" cy="122.2" r="2.2" /> <circle cx="314.2" cy="122.2" r="2.2" /> <circle cx="122.2" cy="122.2" r="2.2" />{' '}
                <circle cx="338.2" cy="122.2" r="2.2" /> <circle cx="146.2" cy="122.2" r="2.2" /> <circle cx="170.2" cy="122.2" r="2.2" />{' '}
                <circle cx="194.2" cy="146.2" r="2.2" /> <circle cx="2.2" cy="146.2" r="2.2" /> <circle cx="218.2" cy="146.2" r="2.2" />{' '}
                <circle cx="26.2" cy="146.2" r="2.2" /> <circle cx="242.2" cy="146.2" r="2.2" /> <circle cx="50.2" cy="146.2" r="2.2" />{' '}
                <circle cx="266.2" cy="146.2" r="2.2" /> <circle cx="74.2" cy="146.2" r="2.2" /> <circle cx="290.2" cy="146.2" r="2.2" />{' '}
                <circle cx="98.2" cy="146.2" r="2.2" /> <circle cx="314.2" cy="146.2" r="2.2" /> <circle cx="122.2" cy="146.2" r="2.2" />{' '}
                <circle cx="338.2" cy="146.2" r="2.2" /> <circle cx="146.2" cy="146.2" r="2.2" /> <circle cx="170.2" cy="146.2" r="2.2" />{' '}
                <circle cx="194.2" cy="170.2" r="2.2" /> <circle cx="2.2" cy="170.2" r="2.2" /> <circle cx="218.2" cy="170.2" r="2.2" />{' '}
                <circle cx="26.2" cy="170.2" r="2.2" /> <circle cx="242.2" cy="170.2" r="2.2" /> <circle cx="50.2" cy="170.2" r="2.2" />{' '}
                <circle cx="266.2" cy="170.2" r="2.2" /> <circle cx="74.2" cy="170.2" r="2.2" /> <circle cx="290.2" cy="170.2" r="2.2" />{' '}
                <circle cx="98.2" cy="170.2" r="2.2" /> <circle cx="314.2" cy="170.2" r="2.2" /> <circle cx="122.2" cy="170.2" r="2.2" />{' '}
                <circle cx="338.2" cy="170.2" r="2.2" /> <circle cx="146.2" cy="170.2" r="2.2" /> <circle cx="170.2" cy="170.2" r="2.2" />{' '}
                <circle cx="194.2" cy="194.2" r="2.2" /> <circle cx="2.2" cy="194.2" r="2.2" /> <circle cx="218.2" cy="194.2" r="2.2" />{' '}
                <circle cx="26.2" cy="194.2" r="2.2" /> <circle cx="242.2" cy="194.2" r="2.2" /> <circle cx="50.2" cy="194.2" r="2.2" />{' '}
                <circle cx="266.2" cy="194.2" r="2.2" /> <circle cx="74.2" cy="194.2" r="2.2" /> <circle cx="290.2" cy="194.2" r="2.2" />{' '}
                <circle cx="98.2" cy="194.2" r="2.2" /> <circle cx="314.2" cy="194.2" r="2.2" /> <circle cx="122.2" cy="194.2" r="2.2" />{' '}
                <circle cx="338.2" cy="194.2" r="2.2" /> <circle cx="146.2" cy="194.2" r="2.2" /> <circle cx="170.2" cy="194.2" r="2.2" />{' '}
                <circle cx="194.2" cy="218.2" r="2.2" /> <circle cx="2.2" cy="218.2" r="2.2" /> <circle cx="218.2" cy="218.2" r="2.2" />{' '}
                <circle cx="26.2" cy="218.2" r="2.2" /> <circle cx="242.2" cy="218.2" r="2.2" /> <circle cx="50.2" cy="218.2" r="2.2" />{' '}
                <circle cx="266.2" cy="218.2" r="2.2" /> <circle cx="74.2" cy="218.2" r="2.2" /> <circle cx="290.2" cy="218.2" r="2.2" />{' '}
                <circle cx="98.2" cy="218.2" r="2.2" /> <circle cx="314.2" cy="218.2" r="2.2" /> <circle cx="122.2" cy="218.2" r="2.2" />{' '}
                <circle cx="338.2" cy="218.2" r="2.2" /> <circle cx="146.2" cy="218.2" r="2.2" /> <circle cx="170.2" cy="218.2" r="2.2" />{' '}
                <circle cx="194.2" cy="242.2" r="2.2" /> <circle cx="2.2" cy="242.2" r="2.2" /> <circle cx="218.2" cy="242.2" r="2.2" />{' '}
                <circle cx="26.2" cy="242.2" r="2.2" /> <circle cx="242.2" cy="242.2" r="2.2" /> <circle cx="50.2" cy="242.2" r="2.2" />{' '}
                <circle cx="266.2" cy="242.2" r="2.2" /> <circle cx="74.2" cy="242.2" r="2.2" /> <circle cx="290.2" cy="242.2" r="2.2" />{' '}
                <circle cx="98.2" cy="242.2" r="2.2" /> <circle cx="314.2" cy="242.2" r="2.2" /> <circle cx="122.2" cy="242.2" r="2.2" />{' '}
                <circle cx="338.2" cy="242.2" r="2.2" /> <circle cx="146.2" cy="242.2" r="2.2" /> <circle cx="170.2" cy="242.2" r="2.2" />{' '}
                <circle cx="194.2" cy="266.2" r="2.2" /> <circle cx="2.2" cy="266.2" r="2.2" /> <circle cx="218.2" cy="266.2" r="2.2" />{' '}
                <circle cx="26.2" cy="266.2" r="2.2" /> <circle cx="242.2" cy="266.2" r="2.2" /> <circle cx="50.2" cy="266.2" r="2.2" />{' '}
                <circle cx="266.2" cy="266.2" r="2.2" /> <circle cx="74.2" cy="266.2" r="2.2" /> <circle cx="290.2" cy="266.2" r="2.2" />{' '}
                <circle cx="98.2" cy="266.2" r="2.2" /> <circle cx="314.2" cy="266.2" r="2.2" /> <circle cx="122.2" cy="266.2" r="2.2" />{' '}
                <circle cx="338.2" cy="266.2" r="2.2" /> <circle cx="146.2" cy="266.2" r="2.2" /> <circle cx="170.2" cy="266.2" r="2.2" />{' '}
                <circle cx="194.2" cy="290.2" r="2.2" /> <circle cx="2.2" cy="290.2" r="2.2" /> <circle cx="218.2" cy="290.2" r="2.2" />{' '}
                <circle cx="26.2" cy="290.2" r="2.2" /> <circle cx="242.2" cy="290.2" r="2.2" /> <circle cx="50.2" cy="290.2" r="2.2" />{' '}
                <circle cx="266.2" cy="290.2" r="2.2" /> <circle cx="74.2" cy="290.2" r="2.2" /> <circle cx="290.2" cy="290.2" r="2.2" />{' '}
                <circle cx="98.2" cy="290.2" r="2.2" /> <circle cx="314.2" cy="290.2" r="2.2" /> <circle cx="122.2" cy="290.2" r="2.2" />{' '}
                <circle cx="338.2" cy="290.2" r="2.2" /> <circle cx="146.2" cy="290.2" r="2.2" /> <circle cx="170.2" cy="290.2" r="2.2" />{' '}
                <circle cx="194.2" cy="314.2" r="2.2" /> <circle cx="2.2" cy="314.2" r="2.2" /> <circle cx="218.2" cy="314.2" r="2.2" />{' '}
                <circle cx="26.2" cy="314.2" r="2.2" /> <circle cx="242.2" cy="314.2" r="2.2" /> <circle cx="50.2" cy="314.2" r="2.2" />{' '}
                <circle cx="266.2" cy="314.2" r="2.2" /> <circle cx="74.2" cy="314.2" r="2.2" /> <circle cx="290.2" cy="314.2" r="2.2" />{' '}
                <circle cx="98.2" cy="314.2" r="2.2" /> <circle cx="314.2" cy="314.2" r="2.2" /> <circle cx="122.2" cy="314.2" r="2.2" />{' '}
                <circle cx="338.2" cy="314.2" r="2.2" /> <circle cx="146.2" cy="314.2" r="2.2" /> <circle cx="170.2" cy="314.2" r="2.2" />{' '}
                <circle cx="194.2" cy="338.2" r="2.2" /> <circle cx="2.2" cy="338.2" r="2.2" /> <circle cx="218.2" cy="338.2" r="2.2" />{' '}
                <circle cx="26.2" cy="338.2" r="2.2" /> <circle cx="242.2" cy="338.2" r="2.2" /> <circle cx="50.2" cy="338.2" r="2.2" />{' '}
                <circle cx="266.2" cy="338.2" r="2.2" /> <circle cx="74.2" cy="338.2" r="2.2" /> <circle cx="290.2" cy="338.2" r="2.2" />{' '}
                <circle cx="98.2" cy="338.2" r="2.2" /> <circle cx="314.2" cy="338.2" r="2.2" /> <circle cx="122.2" cy="338.2" r="2.2" />{' '}
                <circle cx="338.2" cy="338.2" r="2.2" /> <circle cx="146.2" cy="338.2" r="2.2" /> <circle cx="170.2" cy="338.2" r="2.2" />{' '}
              </svg>{' '}
            </figure>
            <Image src={about5} className="rounded-3 position-relative" />
          </Col>
        </Row>
        <Row className="g-4 align-items-center mt-5">
          <Col lg={4}>
            <h5 className="mb-0">Another way to getting in touch</h5>
          </Col>
          <Col lg={8}>
            <ul className="list-inline hstack flex-wrap gap-2 gap-lg-4 justify-content-lg-end h6 mb-0">
              <li className="list-inline-item me-1">
                {' '}
                <Link className="text-facebook" to="">
                  <FaFacebookSquare /> Facebook
                </Link>{' '}
              </li>
              <li className="list-inline-item me-1">
                {' '}
                <Link className="text-instagram-gradient" to="">
                  <FaInstagramSquare /> Instagram
                </Link>{' '}
              </li>
              <li className="list-inline-item me-1">
                {' '}
                <Link className="text-twitter" to="">
                  <FaTwitterSquare /> Twitter
                </Link>{' '}
              </li>
              <li className="list-inline-item me-1">
                {' '}
                <Link className="text-linkedin" to="">
                  <FaLinkedin /> Linkedin
                </Link>{' '}
              </li>
              <li className="list-inline-item me-1">
                {' '}
                <Link className="text-whatsapp" to="">
                  <FaWhatsappSquare /> WhatsApp
                </Link>{' '}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactForm

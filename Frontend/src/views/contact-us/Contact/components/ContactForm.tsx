import { Button, Card, CardBody, CardHeader, Col, Container, Image, Row } from 'react-bootstrap'
import contactImg from '@/assets/images/element/contact.svg'
import { CheckFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { useForm } from 'react-hook-form'

const ContactForm = () => {

  const { control, handleSubmit } = useForm()
  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row className="g-4 g-lg-5 align-items-center">
          <Col lg={6} className="text-center">
            <Image src={contactImg} />
          </Col>
          <Col lg={6}>
            <Card className="bg-light p-4">
              <figure className="position-absolute end-0 bottom-0 mb-n4 me-n2">
                <svg className="fill-orange" width="104.2px" height="95.2px">
                  <circle cx="2.6" cy="92.6" r="2.6" />
                  <circle cx="2.6" cy="77.6" r="2.6" />
                  <circle cx="2.6" cy="62.6" r="2.6" />
                  <circle cx="2.6" cy="47.6" r="2.6" />
                  <circle cx="2.6" cy="32.6" r="2.6" />
                  <circle cx="2.6" cy="17.6" r="2.6" />
                  <circle cx="2.6" cy="2.6" r="2.6" />
                  <circle cx="22.4" cy="92.6" r="2.6" />
                  <circle cx="22.4" cy="77.6" r="2.6" />
                  <circle cx="22.4" cy="62.6" r="2.6" />
                  <circle cx="22.4" cy="47.6" r="2.6" />
                  <circle cx="22.4" cy="32.6" r="2.6" />
                  <circle cx="22.4" cy="17.6" r="2.6" />
                  <circle cx="22.4" cy="2.6" r="2.6" />
                  <circle cx="42.2" cy="92.6" r="2.6" />
                  <circle cx="42.2" cy="77.6" r="2.6" />
                  <circle cx="42.2" cy="62.6" r="2.6" />
                  <circle cx="42.2" cy="47.6" r="2.6" />
                  <circle cx="42.2" cy="32.6" r="2.6" />
                  <circle cx="42.2" cy="17.6" r="2.6" />
                  <circle cx="42.2" cy="2.6" r="2.6" />
                  <circle cx={62} cy="92.6" r="2.6" />
                  <circle cx={62} cy="77.6" r="2.6" />
                  <circle cx={62} cy="62.6" r="2.6" />
                  <circle cx={62} cy="47.6" r="2.6" />
                  <circle cx={62} cy="32.6" r="2.6" />
                  <circle cx={62} cy="17.6" r="2.6" />
                  <circle cx={62} cy="2.6" r="2.6" />
                  <circle cx="81.8" cy="92.6" r="2.6" />
                  <circle cx="81.8" cy="77.6" r="2.6" />
                  <circle cx="81.8" cy="62.6" r="2.6" />
                  <circle cx="81.8" cy="47.6" r="2.6" />
                  <circle cx="81.8" cy="32.6" r="2.6" />
                  <circle cx="81.8" cy="17.6" r="2.6" />
                  <circle cx="81.8" cy="2.6" r="2.6" />
                  <circle cx="101.7" cy="92.6" r="2.6" />
                  <circle cx="101.7" cy="77.6" r="2.6" />
                  <circle cx="101.7" cy="62.6" r="2.6" />
                  <circle cx="101.7" cy="47.6" r="2.6" />
                  <circle cx="101.7" cy="32.6" r="2.6" />
                  <circle cx="101.7" cy="17.6" r="2.6" />
                  <circle cx="101.7" cy="2.6" r="2.6" />
                </svg>
              </figure>
              <CardHeader className="bg-light p-0 pb-3">
                <h3 className="mb-0">Send us message</h3>
              </CardHeader>
              <CardBody className="p-0">
                <form onSubmit={handleSubmit(() => {})} className="row g-4">
                  <TextFormInput name="name" label="Your name *" containerClass="col-md-6" control={control} />
                  <TextFormInput name="email" label="Email address *" containerClass="col-md-6" control={control} />
                  <TextFormInput name="mobileNo" label="Mobile number *" containerClass="col-12" control={control} />
                  <TextAreaFormInput name="message" label="Message *" containerClass="col-12" rows={3} control={control} />
                  <CheckFormInput
                    id="contact-us-checkbox"
                    name="checkbox"
                    type="checkbox"
                    label="By submitting this form you agree to our terms and conditions."
                    containerClass="col-12 form-check ms-2"
                    control={control}
                  />
                  <Col xs={12}>
                    <Button variant="dark" className="mb-0" type="submit">
                      Send Message
                    </Button>
                  </Col>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactForm

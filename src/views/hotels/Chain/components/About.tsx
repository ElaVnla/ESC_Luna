import { Card, CardBody, Col, Container, Image, Modal, ModalBody, ModalHeader, Row } from 'react-bootstrap'
import { BsEye } from 'react-icons/bs'
import PureCounter from '@srexi/purecounterjs'
import { useEffect } from 'react'
import { hotelFeatures } from '../data'
import { useToggle } from '@/hooks'

import about7 from '@/assets/images/about/07.jpg'

const About = () => {
  const { isOpen: isModalOpen, toggle: toggleModal } = useToggle()

  useEffect(() => {
    new PureCounter()
  })

  return (
    <div className="py-0 py-lg-7">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h2>We always provide the best for our hotel visitors. We are happy to help you.</h2>
            <p className="mb-0">
              We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded
              Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get
              the job done.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col xl={4}>
            <Card as={CardBody} className="bg-primary bg-opacity-10 vstack gap-4 justify-content-center h-100 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="purecounter text-primary mb-0" data-purecounter-start={0} data-purecounter-end={10} data-purecounter-delay={200}>
                  0
                </h3>
                <h6 className="fw-normal mb-0">Total Hotels</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center me-3">
                  <h3 className="purecounter text-primary mb-0" data-purecounter-start={0} data-purecounter-end={200} data-purecounter-delay={300}>
                    0
                  </h3>
                  <span className="h3 text-primary mb-0">+</span>
                </div>
                <h6 className="fw-normal mb-0">Total Staff</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center me-3">
                  <h3 className="purecounter text-primary mb-0" data-purecounter-start={0} data-purecounter-end={50} data-purecounter-delay={300}>
                    0
                  </h3>
                  <span className="h3 text-primary mb-0">+</span>
                </div>
                <h6 className="fw-normal mb-0">Amazing Services</h6>
              </div>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <div className="card  overflow-hidden">
              <Image src={about7} className="rounded-3" />
              <div className="w-100 h-100">
                <button className="btn btn-dark position-absolute top-50 start-50 translate-middle mb-0 items-center" onClick={toggleModal}>
                  <BsEye className="me-2" />
                  View 360
                </button>
              </div>
            </div>
            <Modal show={isModalOpen} onHide={toggleModal} className="fade" id="map360">
              <ModalHeader>
                <h5 className="modal-title" id="map360label">
                  Hotel 360 View
                </h5>
                <button type="button" className="btn-close" onClick={toggleModal} />
              </ModalHeader>
              <ModalBody className="p-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1664190302197!6m8!1m7!1sgWjBbRwH2wMmQTbvyZwkGw!2m2!1d51.49712857925994!2d-0.1593322776188391!3f348.1837813715552!4f17.07463868756892!5f0.8485845663286693"
                  width="100%"
                  height={400}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </ModalBody>
            </Modal>
          </Col>
          <Col md={6} xl={4}>
            <ul className="list-group list-group-borderless">
              {hotelFeatures.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <li className="list-group-item py-3" key={idx}>
                    <h6 className="mb-0 fw-normal">
                      <Icon className={`fa-fw ${feature.variant} me-2`} />
                      &nbsp;
                      {feature.name}
                    </h6>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About

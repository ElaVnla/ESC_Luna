import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqContents } from '../data'

const FAQs = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row>
          <Col lg={10} xl={8} className="mx-auto">
            <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
            <Accordion className="accordion-icon accordion-bg-light">
              {faqContents.map((item, idx) => {
                return (
                  <AccordionItem key={idx} eventKey={`${idx}`} className="mb-3 rounded">
                    <AccordionHeader as="h6">
                      <div className="font-base fw-bold">{item.title}</div>
                    </AccordionHeader>
                    <AccordionBody className="mt-3 pb-0">{item.description}</AccordionBody>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQs

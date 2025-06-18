import { Accordion, AccordionCollapse, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { helpFaqs } from '../data'
import clsx from 'clsx'

const FAQs = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 className="mb-0">Frequently Asked Questions</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={10} className="mx-auto">
            <Accordion defaultActiveKey="0" className="accordion-icon accordion-bg-light">
              {helpFaqs.map((faq, idx) => {
                return (
                  <AccordionItem key={idx} eventKey={`${idx}`} className={clsx(helpFaqs.length - 1 !== idx && 'mb-3')}>
                    <AccordionHeader as="h6" className="font-base" id="heading-1">
                      <div className="fw-bold">{faq.title}</div>
                    </AccordionHeader>
                    <AccordionCollapse eventKey={`${idx}`}>
                      <div className="accordion-body mt-3">{faq.description}</div>
                    </AccordionCollapse>
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

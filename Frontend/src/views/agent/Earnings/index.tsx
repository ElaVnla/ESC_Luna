import { Col, Container, Row } from 'react-bootstrap'
import { BsGraphUpArrow } from 'react-icons/bs'
import EarningChart from './components/EarningChart'
import EarningStatistics from './components/EarningStatistics'
import InvoiceHistory from './components/InvoiceHistory'
import { PageMetaData } from '@/components'

const Earnings = () => {
  return (
    <>
      <PageMetaData title="Agent Earnings" />

      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsGraphUpArrow className=" fa-fw me-1" />
                Earnings
              </h1>
            </Col>
          </Row>

          <EarningStatistics />

          <Row>
            <Col xs={12}>
              <EarningChart />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <InvoiceHistory />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Earnings

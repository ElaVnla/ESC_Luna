import { Col, Row } from 'react-bootstrap'
import StatisticWidget from './StatisticWidget'
import { statisticData } from '../data'

const Statistics = () => {
  return (
    <Row className="g-4 mb-5">
      {statisticData.map((statistic, idx) => (
        <Col md={6} xxl={3} key={idx}>
          <StatisticWidget statistic={statistic} />
        </Col>
      ))}
    </Row>
  )
}

export default Statistics

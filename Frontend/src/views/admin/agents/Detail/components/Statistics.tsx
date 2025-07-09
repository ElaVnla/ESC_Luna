import { Col, Row } from 'react-bootstrap'
import StatisticWidget from './StatisticWidget'
import { statisticsData } from '../data'

const Statistics = () => {
  return (
    <Row className="g-4 mb-4">
      {statisticsData.map((statistic, idx) => {
        return (
          <Col key={idx} lg={4}>
            <StatisticWidget statistic={statistic} />
          </Col>
        )
      })}
    </Row>
  )
}

export default Statistics

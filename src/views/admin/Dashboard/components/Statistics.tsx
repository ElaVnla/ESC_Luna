import { Col, Row } from 'react-bootstrap'
import { statisticData } from '../data'
import StatisticWidget from './StatisticWidget'

const Statistics = () => {
  return (
    <Row className="g-4 mb-5">
      {statisticData.map((item, idx) => {
        return (
          <Col md={6} xxl={3} key={idx}>
            <StatisticWidget statistic={item} />
          </Col>
        )
      })}
    </Row>
  )
}

export default Statistics

import { currency } from '@/states'
import { type ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, Col, Row } from 'react-bootstrap'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

const EarningChart = () => {
  const chartOpts: ApexOptions = {
    colors: ['#2163e8'],
    series: [
      {
        name: 'Users',
        data: [100, 401, 305, 501, 409, 602, 609, 901, 848, 602, 809, 901],
      },
    ],
    chart: {
      height: 320,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    grid: {
      strokeDashArray: 4,
      position: 'back',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      show: true,
      horizontalAlign: 'right',
      position: 'top',
      labels: {},
    },
    xaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  }

  return (
    <Card className="card-body border overflow-hidden">
      <Row className="g-4">
        <Col sm={6} md={4}>
          <span className="badge text-bg-dark">Current Month</span>
          <h4 className="text-primary my-2">{currency}35000</h4>
          <p className="mb-0 items-center">
            <span className="text-success me-1 items-center">
              0.20%
              <BsArrowUp />
            </span>
            vs last month
          </p>
        </Col>
        <Col sm={6} md={4}>
          <span className="badge text-bg-dark">Last Month</span>
          <h4 className="my-2">{currency}28000</h4>
          <p className="mb-0 items-center">
            <span className="text-danger me-1 items-center">
              0.10%
              <BsArrowDown />
            </span>
            Then last month
          </p>
        </Col>
      </Row>
      <ReactApexChart height={320} type="area" options={chartOpts} series={chartOpts.series} />
    </Card>
  )
}

export default EarningChart

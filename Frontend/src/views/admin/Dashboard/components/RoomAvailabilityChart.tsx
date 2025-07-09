import { type ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { FaCircle } from 'react-icons/fa'

const getRootColor = (color: string): string => {
  const selector = document.querySelector(':root')
  if (selector) return window.getComputedStyle(selector).getPropertyValue(color)
  else return '#5143d9'
}

const RoomAvailabilityChart = () => {
  const chartOpts: ApexOptions = {
    series: [70, 30],
    labels: ['Sold Out', 'Available'],
    chart: {
      height: 300,
      width: 300,
      offsetX: 0,
      type: 'donut',
      sparkline: {
        enabled: !0,
      },
    },
    colors: [getRootColor('--bs-danger'), getRootColor('--bs-success')],
    tooltip: {
      theme: 'dark',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }

  return (
    <Card className="shadow h-100">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Room Availability</h5>
      </CardHeader>
      <CardBody className="p-3">
        <Col sm={6} className="mx-auto">
          <ReactApexChart
            className="d-flex justify-content-center"
            height={300}
            width={300}
            type="donut"
            options={chartOpts}
            series={chartOpts.series}
          />
        </Col>
        <ul className="list-group list-group-borderless mb-0">
          <li className="list-group-item d-flex justify-content-between">
            <span className="h6 fw-light mb-0 items-center gap-1">
              <FaCircle size={16} className="text-success me-2" /> Available
            </span>
            <span className="h6 fw-light mb-0">73 Rooms</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="h6 fw-light mb-0 items-center gap-1">
              <FaCircle size={16} className="text-danger me-2" /> Sold Out
            </span>
            <span className="h6 fw-light mb-0">245 Rooms</span>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default RoomAvailabilityChart

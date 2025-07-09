import { type ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { FaCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const getRootColor = (color: string): string => {
  const selector = document.querySelector(':root')
  if (selector) return window.getComputedStyle(selector).getPropertyValue(color)
  else return '#5143d9'
}

const BookingTrafficChart = () => {
  const chartOpts: ApexOptions = {
    series: [70, 15, 10, 5],
    labels: ['Organic', 'Google', 'Social media', 'Referral'],
    chart: {
      height: 200,
      width: 200,
      offsetX: 0,
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    colors: [getRootColor('--bs-primary'), getRootColor('--bs-success'), getRootColor('--bs-warning'), getRootColor('--bs-danger')],
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
    <Card className="border h-100">
      <CardHeader className="border-bottom d-flex justify-content-between align-items-center">
        <h5 className="card-header-title">Booking Traffic</h5>
        <Link to="" className="btn btn-link p-0 mb-0">
          View all
        </Link>
      </CardHeader>
      <CardBody className="p-3">
        <div className="d-flex justify-content-center">
          <ReactApexChart className="mt-2" type="donut" width={200} height={200} options={chartOpts} series={chartOpts.series} />
          <div className="d-flex justify-content-center" id="ChartTrafficViews" />
        </div>
        <ul className="list-group list-group-borderless align-items-center mt-3">
          <li className="list-group-item">
            <FaCircle className="text-primary me-2" />
            Organic
          </li>
          <li className="list-group-item">
            <FaCircle className="text-success me-2" />
            Google
          </li>
          <li className="list-group-item">
            <FaCircle className="text-warning me-2" />
            Social media
          </li>
          <li className="list-group-item">
            <FaCircle className="text-danger me-2" />
            Referral program
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default BookingTrafficChart

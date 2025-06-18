import { type ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsSquareFill } from 'react-icons/bs'

const getRootColor = (color: string): string => {
  const selector = document.querySelector(':root')
  if (selector) return window.getComputedStyle(selector).getPropertyValue(color)
  else return '#5143d9'
}
const GuestActivityChart = () => {
  const chartOpts: ApexOptions = {
    series: [
      {
        name: 'Check-in',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Check-out',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [getRootColor('--bs-primary'), getRootColor('--bs-info')],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'category',
      categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    },
  }

  return (
    <Card className="shadow h-100">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Guest Activity</h5>
      </CardHeader>

      <CardBody>
        <div className="d-flex gap-4 mb-3">
          <h6>
            <span className="fw-light">
              <BsSquareFill className="text-primary" /> Check-in:
            </span>{' '}
            475 Guests
          </h6>
          <h6>
            <span className="fw-light">
              <BsSquareFill className="text-info" /> Check-out:
            </span>{' '}
            157 Guests
          </h6>
        </div>

        <ReactApexChart className="mt-2" height={350} type="area" options={chartOpts} series={chartOpts.series} />
      </CardBody>
    </Card>
  )
}

export default GuestActivityChart

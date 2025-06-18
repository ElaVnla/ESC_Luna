import { type ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader } from 'react-bootstrap'

const BookingChart = () => {
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
    <Card className="border h-100">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Booking stats</h5>
      </CardHeader>
      <CardBody>
        <ReactApexChart className="mt-2" type="area" height={320} options={chartOpts} series={chartOpts.series} />
      </CardBody>
    </Card>
  )
}

export default BookingChart

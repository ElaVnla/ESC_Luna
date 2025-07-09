import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs'

const BookingPolicy = () => {
  return (
    <Card className="p-0 bg-transparent">
      <CardHeader className="border-bottom bg-transparent px-0">
        <h4 className="card-title mb-0">Booking Policy</h4>
      </CardHeader>
      <CardBody className="px-0">
        <p>
          Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy
          alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
        </p>
        <p>
          Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
          Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr
          be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in.
        </p>
        <ul className="list-group list-group-borderless mb-2">
          <li className="list-group-item items-center">
            <span className='flex-shrink-0'>
              <BsCheckCircleFill className="me-2" />
            </span>
            This is a family farmhouse, hence we request you to not indulge.
          </li>
          <li className="list-group-item items-center">
            <span className='flex-shrink-0'>
              <BsCheckCircleFill className="me-2" />
            </span>
            Drinking and smoking within controlled limits are permitted at the farmhouse but please do not create a mess or ruckus at the house.
          </li>
          <li className="list-group-item items-center">
            <span className='flex-shrink-0'>
              <BsCheckCircleFill className="me-2" />
            </span>
            Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.
          </li>
          <li className="list-group-item items-center">
            <span className="flex-shrink-0">
              <BsXCircleFill className="me-2" />
            </span>
            For any update, the customer shall pay applicable cancellation/modification charges.
          </li>
        </ul>
        <ul>
          <li>
            Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.
          </li>
          <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
          <li>
            Offered chiefly farther of my no colonel shyness. <strong> Such on help ye some door if in.</strong>
          </li>
          <li>First am plate jokes began to cause a scale. Subjects he prospect elegance followed</li>
        </ul>
        <div className="bg-danger bg-opacity-10 rounded-2 p-3">
          <p className="text-danger mb-0">
            Smoke alarm not reported — The host hasn't reported a smoke alarm on the property. We suggest bringing a portable detector for your trip.
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default BookingPolicy

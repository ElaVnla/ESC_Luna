import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const ImportantInformation = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom px-4">
        <CardTitle as="h3" className="mb-0">
          Important Information
        </CardTitle>
      </CardHeader>
      <CardBody className="py-4">
        <h5 className="mb-3 items-center">
          <BsArrowRight className=" rtl-flip me-2" />
          Passengers traveling to the United States, please note
        </h5>
        <ul>
          <li className="mb-2">
            Who can travel?{' '}
            <strong>
              All fully vaccinated travelers are allowed to enter the country. All WHO-approved vaccines, including Covishield and Covaxin, are
              accepted by the USA.
            </strong>
          </li>
          <li className="mb-2">
            Destination restrictions:{' '}
            <strong>Non-vaccinated travelers from India cannot enter. Any traveler transiting via EU/UK cannot enter the USA.</strong>
          </li>
          <li className="mb-2">Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor.</li>
          <li className="mb-2">
            Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
          </li>
          <li className="mb-2">
            {' '}
            Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.{' '}
          </li>
        </ul>
        <h5 className="mb-3 items-center">
          <BsArrowRight className=" rtl-flip me-2" />A Note on Guidelines
        </h5>
        <p className="ps-3 mb-0">
          While we do our best to get you the latest information, due to the rapidly evolving nature of current events, sometimes that is not
          possible. Please note, it is the sole responsibility of the passenger to ensure his or her eligibility to enter the destination or transit
          countries (as applicable). We accept no liability in this regard. Please check the travel rules of all regulatory websites before to booking
          as well as commencing.
        </p>
      </CardBody>
    </Card>
  )
}

export default ImportantInformation

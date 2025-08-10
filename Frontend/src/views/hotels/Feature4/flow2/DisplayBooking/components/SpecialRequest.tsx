import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs'

type SpecialRequestProps = {
  message?: string
}

const SpecialRequest = ({ message }: SpecialRequestProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsPeopleFill className=" me-2" />
          Special Requests
        </h4>
      </CardHeader>
      <CardBody>
        <textarea
          className="form-control"
          rows={3}
          value={message || ''}
          readOnly
          disabled
          placeholder="No special requests provided"
          style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
        />
      </CardBody>
    </Card>
  )
}

export default SpecialRequest

import { CheckFormInput, SelectFormInput, TextFormInput, TextAreaFormInput } from '@/components'
import { Alert, Button, Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SpecialRequestList = ['Smoking room', 'Late check-in', 'Early check-in', 'Room on a high floor', 'Large bed', 'Airport transfer', 'Twin beds']
const SpecialRequest = () => {
    const { control } = useForm()
    return(
        <Card className="shadow">
              <CardHeader className="card-header border-bottom p-4">
                <h4 className="card-title mb-0 items-center">
                  <BsPeopleFill className=" me-2" />
                  Special Requests
                </h4>
              </CardHeader>
              <CardBody>
                    <form className="hstack flex-wrap gap-3">
                      {SpecialRequestList.map((request, idx) => {
                        return <CheckFormInput key={idx} id={`checkbox-${idx}`} type="checkbox" name={`checkbox-${idx}`} label={request} control={control} />
                      })}
                    </form>
                    <Col xs={12} className="mt-3">
                    <TextAreaFormInput control={control} name="shortDescription" rows={2} label="Other Requests" placeholder="Enter....." />
                  </Col>
                  </CardBody>
            </Card>
    )
}

export default SpecialRequest

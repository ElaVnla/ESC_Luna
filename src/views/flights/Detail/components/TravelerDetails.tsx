import { SelectFormInput, TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

const TravelerDetails = () => {
  const paymentSchema = yup.object({
    mobileNo: yup.number().required('Please enter your mobile number'),
    email: yup.string().required('Please enter your email'),
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(paymentSchema),
  })

  return (
    <Card as="form" onSubmit={handleSubmit(() => { })} className="border">
      <CardHeader className="border-bottom px-4">
        <CardTitle as="h3" className="card-title mb-0">
          Traveler Details
        </CardTitle>
      </CardHeader>
      <CardBody className="py-4">
        <div className="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
          <p className="h6 fw-light small mb-0">
            <span className="badge bg-danger me-2">New</span>Please make sure you enter the Name as per your passport
          </p>
        </div>
        <div className="text-end mb-3">
          <Link to="" className="btn btn-primary-soft mb-0">
            Add New Adult
          </Link>
        </div>
        <Accordion defaultActiveKey="1" className="accordion-icon accordion-bg-light" id="accordionExample2">
          <AccordionItem eventKey="1" className="mb-3">
            <AccordionHeader as="h6" className="font-base fw-bold">
              <span className="fw-bold">Adult 1</span>
            </AccordionHeader>
            <AccordionBody className="mt-3">
              <Row className="g-4">
                <Col md={3}>
                  <label className="form-label">Title</label>
                  <SelectFormInput className="form-select js-choice">
                    <option value={-1}>Select Title</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                  </SelectFormInput>
                </Col>
                <Col md={9}>
                  <label className="form-label">Full name</label>
                  <div className="input-group">
                    <TextFormInput control={control} name="firstName" placeholder="First Name" combinedInput />
                    <TextFormInput control={control} name="lastName" placeholder="Last Name" combinedInput />
                  </div>
                </Col>
                <Col md={6}>
                  <label className="form-label">Date Of Birth</label>
                  <Row className="g-0">
                    <Col xs={4}>
                      <div className="choice-radius-end">
                        <SelectFormInput className="form-select js-choice z-index-9 rounded-start">
                          <option value={-1}>Date</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </SelectFormInput>
                      </div>
                    </Col>
                    <div className="col-4">
                      <div className="choice-radius-0">
                        <SelectFormInput className="form-select choice-radius-0 js-choice z-index-9 border-0 bg-light">
                          <option value={-1}>Month</option>
                          <option>Jan</option>
                          <option>Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>May</option>
                          <option>Jun</option>
                          <option>Jul</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </SelectFormInput>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="choice-radius-start">
                        <SelectFormInput className="form-select js-choice z-index-9 border-0 bg-light">
                          <option value={-1}>Year</option>
                          <option>1990</option>
                          <option>1991</option>
                          <option>1992</option>
                          <option>1993</option>
                          <option>1994</option>
                          <option>1995</option>
                          <option>1996</option>
                          <option>1997</option>
                          <option>1998</option>
                          <option>1999</option>
                          <option>2000</option>
                          <option>2001</option>
                          <option>2002</option>
                          <option>2003</option>
                          <option>2004</option>
                          <option>2005</option>
                        </SelectFormInput>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col md={6}>
                  <label className="form-label">Nationality</label>
                  <SelectFormInput className="form-select js-choice">
                    <option value={-1}>Select Nationality</option>
                    <option>Indian</option>
                    <option>Mali</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                  </SelectFormInput>
                </Col>
                <Col md={6}>
                  <label className="form-label">Passport Number</label>
                  <input type="text" className="form-control" placeholder="Enter passport number" />
                </Col>
                <Col md={6}>
                  <label className="form-label">Passport Issuing Country</label>
                  <SelectFormInput className="form-select js-choice">
                    <option value={-1}>Select Country</option>
                    <option>India</option>
                    <option>Canada</option>
                    <option>Japan</option>
                    <option>China</option>
                  </SelectFormInput>
                </Col>
                <Col md={6}>
                  <label className="form-label">Passport Expiry</label>
                  <input type="text" className="form-control flatpickr" placeholder="Enter passport date" data-date-format="d M y" />
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <AccordionHeader as="h6" className="font-base" id="heading-2">
              <span className="fw-bold">Adult 2</span>
            </AccordionHeader>
            <AccordionBody className="mt-3">
              What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She
              offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality
              possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal
              dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved
              own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <h5 className="mt-4">Booking detail will be sent to</h5>
        <Row className="g-3 g-md-4">
          <TextFormInput
            name="mobileNo"
            type="text"
            label="Mobile Number"
            placeholder="Enter your mobile number"
            containerClass="col-md-6"
            control={control}
          />
          <TextFormInput
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            containerClass="col-md-6"
            control={control}
          />
        </Row>
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary mb-0">
            Proceed To Payment
          </button>
        </div>
      </CardBody>
    </Card>
  )
}

export default TravelerDetails

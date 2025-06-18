import { CheckFormInput, TextFormInput } from '@/components'
import { useToggle } from '@/hooks'
import { currency } from '@/states'
import { Button, Card, CardBody, CardHeader, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsEye } from 'react-icons/bs'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  const { isOpen, toggle } = useToggle()

  const { control, handleSubmit } = useForm()

  return (
    <Card className="card-body border bg-transparent">
      <div className="hstack gap-2 mb-1">
        <h3 className="card-title mb-0">{currency}280</h3>
        <span className="fs-5">/person</span>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <ul className="list-inline mb-0 items-center">
          <li className="list-inline-item me-2 h6 mb-0">4.5</li>

          {Array.from(new Array(4)).map((_val, idx) => (
            <li key={idx} className="list-inline-item me-1 small">
              <FaStar size={16} className="text-warning" />
            </li>
          ))}

          <li className="list-inline-item me-0 small">
            <FaStarHalfAlt size={16} className="text-warning" />
          </li>
        </ul>
        <Link to="" className="mb-0 m-0 text-reset text-primary-hover">
          (365 reviews)
        </Link>
      </div>
      <div className="d-grid gap-2">
        <Link to="/tours/booking" className="btn btn-primary">
          Book Now
        </Link>
        <Button variant="outline-primary" onClick={toggle} className="mb-0 flex-centered" type="button">
          <BsEye className=" fa-fw me-2" />
          Send Inquiry
        </Button>
      </div>

      <Modal show={isOpen} onHide={toggle} className="fade">
        <ModalHeader>
          <h5 className="modal-title" id="inquiryFormlabel">
            Get Inquiry
          </h5>
          <button type="button" className="btn-close" onClick={toggle} />
        </ModalHeader>
        <ModalBody className="p-3">
          <Card className="bg-transparent">
            <CardHeader className="bg-transparent">
              <h6 className="card-title mb-0">Our expert will get in touch with you shortly</h6>
            </CardHeader>
            <CardBody className="pt-0">
              <form onSubmit={handleSubmit(() => {})}>
                <TextFormInput name="name" type="text" label="Name" placeholder="Enter Your name" containerClass="mb-3" control={control} />
                <TextFormInput name="email" label="Email id" type="email" placeholder="Enter Your emil id" containerClass="mb-3" control={control} />
                <TextFormInput
                  name="phoneNo"
                  type="text"
                  label="Phone number"
                  placeholder="Enter Your phone number"
                  containerClass="mb-3"
                  control={control}
                />
                <CheckFormInput
                  name="checkbox"
                  type="checkbox"
                  label="I agree to receive updates and offers"
                  containerClass="mb-3 ms-2 form-check"
                  id="get-inquiry-checkbox"
                  noValidate
                  control={control}
                />

                <div className="d-grid gap-2 d-md-block">
                  <Button variant="dark" className="mb-0" type="submit">
                    Send Inquiry
                  </Button>
                  <Button variant="link" className="mb-0" type="button">
                    Call on: +123 456 89
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    </Card>
  )
}

export default PricingCard

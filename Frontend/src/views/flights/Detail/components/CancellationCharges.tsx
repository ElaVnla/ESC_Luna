import { useToggle } from '@/hooks'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Image,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import { BsEyeFill } from 'react-icons/bs'

import element9 from '@/assets/images/element/09.svg'
import { currency } from '@/states'

const CancellationCharges = () => {
  const { isOpen, toggle } = useToggle()
  return (
    <Card as={CardBody} className="border p-4">
      <CardTitle className="mb-3">
        <h5 className="mb-0">Cancellation &amp; Date Change Charges</h5>
      </CardTitle>
      <h6 className="text-danger">Non Refundable</h6>
      <p className="mb-2">
        The Cancellation penalty on this booking will depend on how close to the departure date you cancel your ticket. View fare rules to know more
      </p>
      <div>
        <Button onClick={toggle} variant="link" className="p-0 mb-0 text-decoration-underline">
          <BsEyeFill /> View Detail
        </Button>
      </div>

      <Modal show={isOpen} onHide={toggle} size="lg" className="fade" id="cancellation" aria-hidden="true">
        <ModalHeader>
          <h5 className="modal-title" id="cancellationlabel">
            Cancellation &amp; Date Change Charges
          </h5>
          <button type="button" onClick={toggle} className="btn-close" />
        </ModalHeader>
        <ModalBody className="p-3">
          <TabContainer defaultActiveKey="1">
            <Nav justify className="nav-pills nav-responsive bg-primary bg-opacity-10 rounded p-2 mb-3" id="tour-pills-tab" role="tablist">
              <NavItem role="presentation">
                <NavLink eventKey="1" className="rounded-start mb-0">
                  Cancellation Charge
                </NavLink>
              </NavItem>
              <NavItem role="presentation">
                <NavLink eventKey="2" className="rounded-end mb-0" id="tour-pills-tab-2">
                  Date Change Charge
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="mb-0" id="tour-pills-tabContent">
              <TabPane eventKey="1" className="fade show ">
                <Card className="border">
                  <CardHeader className="border-bottom">
                    <h5 className="card-title mb-0">
                      <Image src={element9} className="h-50px" />
                      BOM - CDG
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="table-responsive-lg">
                      <table className="table table-bordered rounded caption-bottom overflow-hidden mb-0">
                        <caption className="pb-0">*From The Date Of Departure</caption>
                        <thead className="table-dark border-light">
                          <tr>
                            <th scope="col">Time Frame</th>
                            <th scope="col">Air Free + MMT Free</th>
                          </tr>
                        </thead>
                        <tbody className="border-top-0">
                          <tr>
                            <td>0 hours to 24 hours</td>
                            <td>Non Refundable</td>
                          </tr>
                          <tr>
                            <td>24 hours to 365 days</td>
                            <td>
                              {currency}16,325 + {currency}250
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane eventKey="2" className="fade">
                <Card className="border">
                  <CardHeader className="border-bottom">
                    <h5 className="card-title mb-0">
                      <Image src={element9} className="h-50px" />
                      JFK - BOM
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="table-responsive-lg">
                      <table className="table table-bordered rounded caption-bottom overflow-hidden mb-0">
                        <caption className="pb-0">*From The Date Of Departure</caption>
                        <thead className="table-dark border-light">
                          <tr>
                            <th scope="col">Time Frame</th>
                            <th scope="col">Air Free + MMT Free + Fare Difference</th>
                          </tr>
                        </thead>
                        <tbody className="border-top-0">
                          <tr>
                            <td>0 hours to 24 hours</td>
                            <td>Non Refundable</td>
                          </tr>
                          <tr>
                            <td>24 hours to 365 days</td>
                            <td>
                              {currency}16,325 + {currency}250 + Fare Difference
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </TabPane>
            </TabContent>
          </TabContainer>
        </ModalBody>
      </Modal>
    </Card>
  )
}

export default CancellationCharges

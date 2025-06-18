import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'

const PersonalInformation = () => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Personal Information</h5>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6}>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item mb-3">
                <span>Full Name:</span>
                <span className="h6 fw-normal ms-2 mb-0">Jacqueline Miller</span>
              </li>
              <li className="list-group-item mb-3">
                <span>User Name:</span>
                <span className="h6 fw-normal ms-2 mb-0">Lucifer</span>
              </li>
              <li className="list-group-item mb-3">
                <span>Mobile Number:</span>
                <span className="h6 fw-normal ms-2 mb-0">+1(404) 586-854</span>
              </li>
              <li className="list-group-item mb-3">
                <span>Agent License:</span>
                <span className="h6 fw-normal ms-2 mb-0">258ED458962</span>
              </li>
              <li className="list-group-item mb-3">
                <span>Tax Number:</span>
                <span className="h6 fw-normal ms-2 mb-0">ACG1548GG78952</span>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item mb-3">
                <span>Email ID:</span>
                <span className="h6 fw-normal ms-2 mb-0">hello@gmail.com</span>
              </li>
              <li className="list-group-item mb-3">
                <span>Gender:</span>
                <span className="h6 fw-normal ms-2 mb-0">Female</span>
              </li>
              <li className="list-group-item mb-3">
                <span>Location:</span>
                <span className="h6 fw-normal ms-2 mb-0">225 Cherry Street #56, New York</span>
              </li>
              <li className="list-group-item mb-3">
                <span>Joining Date:</span>
                <span className="h6 fw-normal ms-2 mb-0">29 Aug 2019</span>
              </li>
            </ul>
          </Col>
          <Col xs={12}>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">
                <span>Description: </span>
                <p className="h6 fw-normal mb-0">
                  As it so contrasted oh estimating instrument. Size-like body someone had. Are conduct viewing boy minutes warrant the expense
                  Tolerably behavior may admit daughters offending her ask own? Praise effect wishes to change way and any wanted. Lively use looked
                  latter regard had. Does he it part last in
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default PersonalInformation

import { Col, Row } from 'react-bootstrap'
import ActiveLogs from './ActiveLogs'
import LinkedAccount from './LinkedAccount'
import SecuritySettings from './SecuritySettings'
import SocialMediaProfile from './SocialMediaProfile'

const AccountSettings = () => {
  return (
    <Row className="g-4">
      <Col xs={12}>
        <SecuritySettings />
      </Col>

      <Col lg={6}>
        <LinkedAccount />
      </Col>

      <Col lg={6}>
        <SocialMediaProfile />
      </Col>

      <Col xs={12}>
        <ActiveLogs />
      </Col>
    </Row>
  )
}

export default AccountSettings

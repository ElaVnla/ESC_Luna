import { useClipboard } from '@/hooks'
import { useNotificationContext } from '@/states'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const OfferBox = () => {
  const { showNotification } = useNotificationContext()

  const [, copy] = useClipboard()

  const onCopy = (text: string) => {
    copy(text).then((copied) => {
      if (copied) {
        showNotification({ message: 'Copied To Clipboard', type: 'success', delay: 1500 })
      }
    })
  }

  return (
    <section className="pt-0 pt-sm-5">
      <Container>
        <Row>
          <Col xs={12}>
            <Card className="bg-dark p-3">
              <CardBody className="border border-2 border-dashed border-white rounded position-relative">
                <figure className="position-absolute top-0 start-0 mt-n3 ms-3">
                  <svg className="pt-1" width="30.1px" height="23.4px" viewBox="0 0 30.1 23.4" xmlSpace="preserve">
                    <path
                      className="fill-white"
                      d="M30.1,4.4c0,0-1.9-1.6-3.4-0.7c-1.2,0.7-8.9,4.5-12.3,6.2L9.6,7.2c0.5-0.9,0.6-2,0.3-3C9.6,2.8,8.6,1.6,7.2,0.8 C4.7-0.6,1.7-0.1,0.5,2C0,3-0.1,4,0.2,5.1c0.4,1.3,1.3,2.6,2.7,3.4C3.5,8.8,4.1,9,4.8,9.1v0c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0 c4,0.6,6,1.7,7,2.5c-1,0.8-3,1.9-7,2.5c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0l0,0c-0.6,0.1-1.3,0.3-1.9,0.7c-1.4,0.8-2.3,2-2.7,3.4 c-0.3,1-0.2,2.1,0.3,3.1c1.2,2.1,4.2,2.7,6.7,1.2c1.4-0.8,2.3-2,2.7-3.4c0.3-1,0.2-2.1-0.3-3l4.8-2.8c3.4,1.7,11.1,5.6,12.3,6.2 c1.6,0.9,3.4-0.7,3.4-0.7l-12.7-7.3L30.1,4.4z M7.5,6C7,7,5.4,7.2,4,6.4C3.2,5.9,2.6,5.2,2.4,4.5C2.3,4.1,2.3,3.6,2.6,3.2 c0.5-1,2.2-1.1,3.5-0.3C6.9,3.3,7.4,4,7.6,4.8C7.7,5.1,7.8,5.6,7.5,6z M7.6,18.6c-0.2,0.8-0.8,1.5-1.6,1.9c-1.4,0.8-3,0.6-3.5-0.3 c-0.3-0.4-0.2-0.9-0.1-1.3C2.6,18.1,3.2,17.4,4,17c1.4-0.8,3-0.6,3.5,0.3C7.8,17.8,7.7,18.2,7.6,18.6z"
                    />
                  </svg>
                </figure>
                <figure className="position-absolute bottom-0 end-0 mb-n3 me-3">
                  <svg className="pb-1" width="30.1px" height="23.4px" viewBox="0 0 30.1 23.4" xmlSpace="preserve">
                    <path
                      className="fill-white"
                      d="M0,19c0,0,1.9,1.6,3.4,0.7c1.2-0.7,8.8-4.6,12.2-6.3l4.8,2.7c-0.5,0.9-0.6,2-0.3,3c0.4,1.3,1.3,2.5,2.7,3.3 c2.5,1.4,5.5,0.9,6.7-1.3c0.5-0.9,0.6-2,0.3-3.1c-0.4-1.3-1.3-2.5-2.7-3.3c-0.6-0.3-1.3-0.6-1.9-0.7l0,0c0,0,0,0,0,0 c-0.1,0-0.1,0-0.2,0c-4-0.6-6-1.7-7-2.5c1-0.8,3-1.9,7-2.5c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0l0,0C26,9,26.6,8.7,27.2,8.4 c1.4-0.8,2.3-2.1,2.7-3.4c0.3-1,0.2-2.1-0.4-3.1c-1.2-2.1-4.2-2.6-6.7-1.2c-1.4,0.8-2.3,2.1-2.7,3.4c-0.3,1-0.2,2.1,0.3,3L15.7,10 C12.3,8.3,4.6,4.5,3.4,3.8C1.8,2.9,0,4.5,0,4.5l12.7,7.2L0,19z M22.6,17.3c0.5-1,2.1-1.1,3.5-0.4c0.8,0.4,1.4,1.2,1.6,1.9 c0.1,0.3,0.2,0.8-0.1,1.3c-0.5,1-2.1,1.1-3.5,0.4c-0.8-0.5-1.4-1.2-1.6-1.9C22.4,18.2,22.4,17.7,22.6,17.3z M22.4,4.7 C22.6,4,23.2,3.3,24,2.8c1.3-0.8,3-0.6,3.5,0.3c0.3,0.4,0.2,0.9,0.1,1.3c-0.2,0.8-0.8,1.5-1.6,1.9c-1.3,0.8-3,0.6-3.5-0.3 C22.3,5.6,22.3,5.1,22.4,4.7z"
                    />
                  </svg>
                </figure>
                <h2 className="text-white">Get an Extra 45% Discount Code</h2>
                <div className="d-flex justify-content-between flex-wrap">
                  <h4 className="fw-light text-white mb-0">On all restaurant deals</h4>
                  <span role="button" className="text-warning fs-4 stretched-link" onClick={() => onCopy('BOOK56')}>
                    Use Code: BOOK56
                  </span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OfferBox

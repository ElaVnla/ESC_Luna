import { useClipboard } from '@/hooks'
import { currency, useNotificationContext } from '@/states'
import { Col, Container, Row } from 'react-bootstrap'

const OfferDetails = () => {
  const [, copy] = useClipboard()
  const { showNotification } = useNotificationContext()

  const onCopy = (text: string) => {
    copy(text).then((copied) => {
      if (copied) {
        showNotification({ message: 'Copied To Clipboard', type: 'success', delay: 1500 })
      }
    })
  }

  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col xs={12}>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">Offer Detail</th>
                    <th scope="col">Maximum booking value</th>
                    <th scope="col">Applicable Card</th>
                    <th scope="col">Coupon Code</th>
                    <th scope="col">Validity</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td className="h6 mb-0">Flat 25% instant discount for all users</td>
                    <td className="h6 fw-normal mb-0">{currency}3000</td>
                    <td className="h6 fw-normal mb-0">Mbokiwik</td>
                    <td>
                      <div
                        role="button"
                        onClick={() => onCopy('LOG125F')}
                        className="bg-light border border border-secondary border-dashed rounded-2 px-3 py-2"
                      >
                        <h6 className="mb-0 fw-normal user-select-all">LOG125F</h6>
                      </div>
                    </td>
                    <td className="h6 fw-normal mb-0">19 Sep</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
          <Col md={10} className="mx-auto">
            <h5 className="mb-2">What do you get?</h5>
            <ul className="mb-4">
              <li className="mb-2">Get up with a delicious lunch and a beautiful view from your room.</li>
              <li className="mb-2">
                Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.
              </li>
              <li>
                Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.{' '}
              </li>
            </ul>
            <h5 className="mb-2">How Do you get in?</h5>
            <ul className="mb-4">
              <li className="mb-2">Get up with a delicious lunch and a beautiful view from your room.</li>
              <li className="mb-2">
                Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.
              </li>
              <li className="mb-2">Such on help ye some door if in. Laughter proposal laughing any son law consider. </li>
              <li>
                Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.{' '}
              </li>
            </ul>
            <h5 className="mb-2">What else do you need to know?</h5>
            <ul className="mb-4">
              <li className="mb-2">Such on help ye some door if in. Laughter proposal laughing any son law consider. </li>
              <li>
                Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.{' '}
              </li>
            </ul>
            <h5 className="mb-2">Terms &amp; Conditions</h5>
            <ul className="mb-4">
              <li className="mb-2">
                Booking acts as a facilitator and merely provides an online platform to the User to select and book a particular hotel. Hotels in this
                context includes all categories of accommodations such as hotels, home-stays, bed and breakfast stays, farm-houses and any other
                alternate accommodations.
              </li>
              <li className="mb-2">
                To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Post no so what deal evil rent
                by real in.{' '}
                <strong>
                  <u>But her ready least set lived spite solid. Laughter proposal laughing any son law consider.</u>
                </strong>{' '}
                Needed except up piqued an.
              </li>
              <li>
                Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. First am plate jokes to began to cause a scale.{' '}
                <strong>Subjects he prospect elegance followed.</strong> Insipidity the sufficient discretion imprudence resolution sir him
                decisively.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OfferDetails

import { Col, Container, Row } from 'react-bootstrap'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'

const clients = [client1, client2, client3, client4, client5, client6]

const Clients = () => {
  return (
    <section className="py-0 py-md-5">
      <Container>
        <Row className="g-4 g-lg-7 justify-content-center align-items-center">
          {clients.map((client, idx) => (
            <Col key={idx} xs={5} sm={3} xl={2}>
              <img src={client} className="grayscale" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Clients

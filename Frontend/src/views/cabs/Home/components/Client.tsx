import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import { Col, Container, Image, Row } from 'react-bootstrap'

const clients = [client1, client2, client3, client4, client5, client6]
const Client = () => {
  return (
    <section className="pt-0 py-md-5">
      <Container>
        <Row className="g-4 align-items-center">
          {clients.map((client, idx) => {
            return (
              <Col key={idx} xs={6} sm={4} lg={3} xl={2}>
                <Image src={client} className="grayscale px-3 px-sm-4" />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Client

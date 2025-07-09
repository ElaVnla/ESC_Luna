import { footerLinks } from '@/assets/data/footer-items'
import { LogoBox, TextFormInput } from '@/components'
import { developedByLink, currentYear } from '@/states'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { type IconType } from 'react-icons'
import { BsSend } from 'react-icons/bs'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

const apps: IconType[] = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub]

const FooterWithSubscribe = () => {
  const subscribeSchema = yup.object({
    email: yup.string().required('Please enter your email'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(subscribeSchema),
  })

  return (
    <footer>
      <Container>
        <div className="bg-light rounded-top p-4 pb-0">
          <Row className="g-4 justify-content-between">
            <Col md={5} lg={4}>
              <LogoBox imgClassName="h-40px" />
              <p className="text-reset mt-4 mb-2">Subscribe to Our Newsletter</p>
              <form onSubmit={handleSubmit(() => {})} className="bg-body rounded-2 p-2">
                <div className="input-group">
                  <TextFormInput name="email" className="border-0 me-1" placeholder="Enter your email" control={control} combinedInput />
                  <Button variant="dark" type="submit" className="rounded-2 mb-0 flex-centered">
                    <BsSend />
                  </Button>
                </div>
              </form>
            </Col>
            <Col md={7} lg={4}>
              <Row className="g-4 g-lg-5">
                {footerLinks.slice(0, 2).map((item, idx) => {
                  return (
                    <Col xs={6} key={idx}>
                      <h5 className="mb-2 mb-md-4">{item.title}</h5>
                      <ul className="nav flex-column">
                        {item.items.map((item, idx) => {
                          return (
                            <li key={idx} className="nav-item mb-1">
                              <Link className="nav-link pt-0" to={item.link ?? ''}>
                                {item.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
          <hr className="mt-4 mb-0" />
          <Container className="py-3 px-0">
            <div className="d-md-flex justify-content-between align-items-center text-center text-md-left">
              <div className="text-primary-hover text-body">
                {' '}
                Copyrights ©{currentYear} Booking. build by{' '}
                <Link to={developedByLink} className="text-body">
                  StackBros
                </Link>
                .{' '}
              </div>
              <div className="mt-3 mt-md-0">
                <ul className="nav text-primary-hover justify-content-center justify-content-md-end">
                  {apps.map((app, idx) => {
                    const Icon = app
                    return (
                      <li className="nav-item" key={idx}>
                        <Link className="nav-link text-body" to="">
                          <Icon />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  )
}

export default FooterWithSubscribe

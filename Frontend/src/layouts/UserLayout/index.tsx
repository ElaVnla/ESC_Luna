import { Preloader } from '@/components'
import { useToggle } from '@/hooks'
import { Suspense, type ReactNode, lazy, useEffect } from 'react'
import { Button, Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'

const TopNavBar = lazy(() => import('./TopNavBar'))
const LeftPanel = lazy(() => import('./LeftPanel'))
const Footer = lazy(() => import('./Footer'))

const UserLayout = ({ children }: { children: ReactNode }) => {
  const { isOpen, toggle } = useToggle()

  useEffect(() => {
    document.body.classList.add('dashboard')
    return () => {
      document.body.classList.remove('dashboard')
    }
  })

  return (
    <>
      <Suspense>
        <TopNavBar />
      </Suspense>

      <main>
        <section className="pt-3">
          <Container>
            <Row>
              <Col lg={4} xl={3}>
                <div className="d-none d-lg-block">
                  <Suspense>
                    <LeftPanel />
                  </Suspense>
                </div>
                <Offcanvas show={isOpen} onHide={toggle} placement="end" className="offcanvas-lg" tabIndex={-1} id="offcanvasSidebar">
                  <OffcanvasHeader className="justify-content-end pb-2">
                    <button type="button" onClick={toggle} className="btn-close" />
                  </OffcanvasHeader>
                  <OffcanvasBody className="p-3 p-lg-0">
                    <Suspense>
                      <LeftPanel />
                    </Suspense>
                  </OffcanvasBody>
                </Offcanvas>
              </Col>
              <Col lg={8} xl={9}>
                <div className="d-grid mb-0 d-lg-none w-100">
                  <Button variant="primary" className="mb-4 items-center justify-content-center gap-1" type="button" onClick={toggle}>
                    <FaSlidersH /> Menu
                  </Button>
                </div>

                <Suspense fallback={<Preloader />}>{children}</Suspense>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}

export default UserLayout

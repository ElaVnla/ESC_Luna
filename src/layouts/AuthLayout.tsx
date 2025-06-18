import { Preloader } from '@/components'
import { Suspense, type ReactNode } from 'react'
import { Container, Row } from 'react-bootstrap'

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <section className="vh-xxl-100">
        <Container className="h-100 d-flex px-0 px-sm-4">
          <Row className="justify-content-center align-items-center m-auto">
            <div className="col-12">
              <div className="bg-mode shadow rounded-3 overflow-hidden">
                <Row className="g-0">
                  <Suspense fallback={<Preloader />}>{children}</Suspense>
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default AuthLayout

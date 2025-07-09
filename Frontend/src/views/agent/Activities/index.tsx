import { Button, Card, CardBody, CardHeader, Col, Container, Image, Row } from 'react-bootstrap'
import { BsBell, BsTrash } from 'react-icons/bs'
import { recentActivities } from './data'
import { Fragment } from 'react'
import clsx from 'clsx'
import { PageMetaData } from '@/components'

const Activities = () => {
  return (
    <>
      <PageMetaData title="Agent Activities" />

      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsBell className=" fa-fw me-1" />
                Activities
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card className="border">
                <CardHeader className="border-bottom">
                  <h5 className="card-header-title">Recent Activities</h5>
                </CardHeader>
                <CardBody>
                  {recentActivities.map((activity, idx) => {
                    const Icon = activity.icon
                    return (
                      <Fragment key={idx}>
                        <div className="d-sm-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-sm-center me-4 ms-sm-0">
                            <div className="avatar flex-shrink-0">
                              {Icon && (
                                <div className={clsx('avatar-img rounded-circle', activity.variant)}>
                                  <span className="position-absolute top-50 start-50 translate-middle fw-bold flex-centered">
                                    <Icon className=" fs-5" />
                                  </span>
                                </div>
                              )}

                              {activity.image && <Image className="avatar-img rounded-circle" src={activity.image} />}
                            </div>
                            <div className="ms-3">
                              {activity.title}
                              <small>{activity.date}</small>
                            </div>
                          </div>
                          <div className="d-flex gap-2 mt-2 mt-sm-0">
                            <Button variant="primary-soft" size="sm">
                              View
                            </Button>
                            <Button variant="danger-soft" size="sm">
                              <BsTrash />
                            </Button>
                          </div>
                        </div>
                        {recentActivities.length - 1 != idx && <hr />}
                      </Fragment>
                    )
                  })}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Activities

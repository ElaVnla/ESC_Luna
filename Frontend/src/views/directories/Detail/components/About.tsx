import { GlightBox } from '@/components'
import { Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { BsFullscreen } from 'react-icons/bs'
import GetDirection from './GetDirection'
import WorkingHours from './WorkingHours'

import directory2 from '@/assets/images/category/directory/02.jpg'
import directory3 from '@/assets/images/category/directory/03.jpg'
import directory7 from '@/assets/images/category/directory/07.jpg'
import directory8 from '@/assets/images/category/directory/08.jpg'
import directory9 from '@/assets/images/category/directory/09.jpg'
import directory10 from '@/assets/images/category/directory/10.jpg'
import directory11 from '@/assets/images/category/directory/11.jpg'

const galleryImages = [directory11, directory9, directory2, directory3, directory10, directory8, directory7]

const About = () => {
  return (
    <Row className="g-4 g-lg-5">
      <Col lg={7} xl={8}>
        <Card className="bg-transparent mb-4">
          <CardHeader className="bg-transparent border-bottom px-0 pt-0">
            <h4 className="mb-0">Description</h4>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <p className="mb-3">
              Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.{' '}
              <b>Bed one supposing breakfast day fulfilled off depending questions.</b> As it so contrasted oh estimating instrument. Size like body
              some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise
              effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. We understand that theory is
              important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is packed with
              practical hands-on examples that you can follow step by step.
            </p>
            <p className="mb-0">
              Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh
              truth. Large above be to means. Dashwood does provide stronger is.
            </p>
          </CardBody>
        </Card>
        <Card className="bg-transparent">
          <CardHeader className="bg-transparent border-bottom px-0">
            <h4 className="mb-0">Image Gallery</h4>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <Row className="g-4">
              {galleryImages.map((image, idx) => {
                return (
                  <Col md={4} key={idx}>
                    <GlightBox className="w-100 h-100" image={image}>
                      <Card className="card-element-hover card-overlay-hover overflow-hidden">
                        <Image src={image} className="card-img" />
                        <div className="hover-element w-100 h-100">
                          <BsFullscreen
                            size={28}
                            className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                          />
                        </div>
                      </Card>
                    </GlightBox>
                  </Col>
                )
              })}
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg={5} xl={4}>
        <GetDirection />

        <WorkingHours />
      </Col>
    </Row>
  )
}

export default About

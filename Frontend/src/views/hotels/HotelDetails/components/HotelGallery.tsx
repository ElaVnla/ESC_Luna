import { GlightBox } from '@/components'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsFullscreen, BsGeoAlt } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { HotelData } from '@/models/HotelDetailsApi'

type Props = {
  hotelData : HotelData;
};
  

const HotelGallery = ({hotelData}: Props) => {
  if (!hotelData) return null;
  const imgPrefix = hotelData.image_details.prefix
  const imgSuffix = hotelData.image_details.suffix

  function getUrl(prefix:string, suffix:string, num:string){
    return prefix + num + suffix
  }
  return (
    <>
      <section className="py-0 pt-sm-5">
        <Container className="position-relative">
          <Row className="mb-3">
            <Col xs={12}>
              <div className="d-lg-flex justify-content-lg-between mb-1">
                <div className="mb-2 mb-lg-0">
                  <h1 className="fs-2">{hotelData.name} </h1>
                  <p className="fw-bold mb-0 items-center flex-wrap">
                    <BsGeoAlt className=" me-2" />
                    {hotelData.address}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="card-grid pt-0">
        <Container>
          <Row className="g-2">
            <Col md={6}>
              <GlightBox data-glightbox data-gallery="gallery" image={getUrl(imgPrefix, imgSuffix, "0")}>
                <Card
                  className="card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                  style={{ backgroundImage: `url(${getUrl(imgPrefix, imgSuffix, "0")})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                >
                  <div className="hover-element position-absolute w-100 h-100">
                    <BsFullscreen
                      size={28}
                      className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </Card>
              </GlightBox>
            </Col>
            <Col md={6}>
              <Row className="g-2">
                <Col xs={12}>
                  <GlightBox data-glightbox data-gallery="gallery" image={getUrl(imgPrefix, imgSuffix, "1")}>
                    <Card
                      className="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                      style={{ backgroundImage: `url(${getUrl(imgPrefix, imgSuffix, "1")})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                    >
                      <div className="hover-element position-absolute w-100 h-100">
                        <BsFullscreen
                          size={28}
                          className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                        />
                      </div>
                    </Card>
                  </GlightBox>
                </Col>
                <Col md={6}>
                  <GlightBox data-glightbox data-gallery="gallery" image={getUrl(imgPrefix, imgSuffix, "2")}>
                    <Card
                      className="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                      style={{ backgroundImage: `url(${getUrl(imgPrefix, imgSuffix, "2")})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                    >
                      <div className="hover-element position-absolute w-100 h-100">
                        <BsFullscreen
                          size={28}
                          className="bifs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                        />
                      </div>
                    </Card>
                  </GlightBox>
                </Col>
                <Col md={6}>
                {hotelData.hires_image_index
                  .split(",")
                  .slice(4) // assuming first 4 images are already shown
                  .map((idx: string) => (
                    <GlightBox
                      key={idx}
                      data-glightbox
                      data-gallery="gallery"
                      image={getUrl(imgPrefix, imgSuffix, idx)}
                    />
                ))}
                  <Card
                    className="card-grid-sm overflow-hidden"
                    style={{ backgroundImage: `url(${getUrl(imgPrefix, imgSuffix, "3")})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                  >
                    <div className="bg-overlay bg-dark opacity-7" />
                    <div className="card-img-overlay d-flex h-100 w-100">
                      <h6 className="card-title m-auto fw-light text-decoration-underline">
                        <Link to="" 
                          className="text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            const firstImage = document.querySelector('[data-gallery="gallery"]');
                            if (firstImage) {
                              (firstImage as HTMLElement).click();
                            }
                          }}>
                          View all
                        </Link>
                      </h6>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HotelGallery

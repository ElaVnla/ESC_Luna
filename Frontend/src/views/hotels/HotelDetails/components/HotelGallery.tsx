import { GlightBox } from '@/components'
import { useToggle } from '@/hooks'
import { Alert, Button, Card, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalHeader, Row } from 'react-bootstrap'
import { BsExclamationOctagonFill, BsEyeFill, BsFullscreen, BsGeoAlt, BsPinMapFill, BsXLg } from 'react-icons/bs'
import { FaFacebookSquare, FaShareAlt, FaTwitterSquare } from 'react-icons/fa'
import { FaCopy, FaHeart, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import gallery11 from '@/assets/images/gallery/11.jpg'
import gallery12 from '@/assets/images/gallery/12.jpg'
import gallery13 from '@/assets/images/gallery/13.jpg'
import gallery14 from '@/assets/images/gallery/14.jpg'
import gallery15 from '@/assets/images/gallery/15.jpg'
import gallery16 from '@/assets/images/gallery/16.jpg'
import { HotelData } from '@/models/HotelDetailsApi'

type Props = {
  hotelData : HotelData;
};
  

const HotelGallery = ({hotelData}: Props) => {
  if (!hotelData) return null;

  const { isOpen, toggle } = useToggle()
  const image1 = "https://d2ey9sqrvkqdfs.cloudfront.net/atH8/0.jpg"
  const imgPrefix = hotelData.image_details.prefix
  const imgSuffix = hotelData.image_details.suffix

  function getUrl(prefix:string, suffix:string, num:string){
    return prefix + num + suffix
  }
  // const { isOpen: alertVisible, hide: hideAlert } = useToggle(true)

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
                    <Link
                      to=""
                      onClick={toggle}
                      className="ms-3 text-decoration-underline items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#mapmodal"
                    >
                      <BsEyeFill className="me-1" />
                      View On Map
                    </Link>
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
                    
                    {/* {hotelData.hires_image_index.split(",").slice(4).map((idx: string)=>{
                      (
                      <GlightBox data-glightbox data-gallery="gallery" image={getUrl(imgPrefix, imgSuffix, idx)} className="stretched-link z-index-9" />
                    )
                    })} */}
                    
                    {/* <GlightBox data-glightbox data-gallery="gallery" image={gallery15} />
                    <GlightBox data-glightbox data-gallery="gallery" image={gallery16} /> */}
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

      {/* <Modal size="lg" centered show={isOpen} onHide={toggle} className="fade">
        <ModalHeader>
          <h5 className="modal-title" id="mapmodalLabel">
            View Our Hotel Location
          </h5>
          <button type="button" onClick={toggle} className="btn-close" />
        </ModalHeader>
        <div className="modal-body p-0">
          <iframe
            className="w-100"
            height={400}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
            style={{ border: 0 }}
            title="map"
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-sm btn-primary mb-0 items-center">
            <BsPinMapFill className="me-2" />
            View In Google Map
          </button>
        </div>
      </Modal> */}
    </>
  )
}

export default HotelGallery

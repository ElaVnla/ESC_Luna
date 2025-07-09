import { GlightBox } from '@/components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Options } from '@splidejs/splide'
import { useEffect, useRef } from 'react'
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { FaCopy, FaFacebookSquare, FaLinkedin, FaShareAlt, FaTwitterSquare } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import gallery3 from '@/assets/images/gallery/03.jpg'
import gallery4 from '@/assets/images/gallery/04.jpg'
import gallery5 from '@/assets/images/gallery/05.jpg'
import gallery6 from '@/assets/images/gallery/06.jpg'
import gallery7 from '@/assets/images/gallery/07.jpg'
import gallery8 from '@/assets/images/gallery/08.jpg'
import gallery9 from '@/assets/images/gallery/09.jpg'
import gallery10 from '@/assets/images/gallery/10.jpg'

import "@splidejs/splide/dist/css/splide.min.css";

const Hero = () => {
  const sliderRef = useRef<typeof Splide | null>(null)
  const thumbnailRef = useRef<typeof Splide | null>(null)

  const spliderOpts: Options = {
    type: 'fade',
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    autoplay: true,
    cover: true,
  }

  const spliderThumbnailOpts: Options = {
    rewind: true,
    fixedWidth: 200,
    fixedHeight: 120,
    isNavigation: true,
    gap: 20,
    focus: 'center',
    pagination: false,
    cover: true,
    breakpoints: {
      600: {
        fixedWidth: 150,
        fixedHeight: 80,
      },
    },
  }

  useEffect(() => {
    if (sliderRef.current && thumbnailRef.current && thumbnailRef.current.splide) {
      sliderRef.current.sync(thumbnailRef.current.splide)
    }
  }, [])

  return (
    <section className="pt-4 pt-lg-5">
      <Container className="position-relative">
        <Row>
          <Col xs={12}>
            <div className="d-md-flex justify-content-md-between">
              <div>
                <h1 className="fs-2">Beautiful Bali with Malaysia</h1>
                <ul className="nav nav-divider h6 text-body mb-0">
                  <li className="nav-item">5 nights - 6 Days</li>
                  <li className="nav-item">1 Country - 2 Cities</li>
                </ul>
              </div>
              <ul className="list-inline text-end">
                <li className="list-inline-item">
                  <Button variant="light" size="sm" className="px-2">
                    <FaHeart className="fa-fw" />
                  </Button>
                </li>
                <Dropdown className="list-inline-item">
                  <DropdownToggle as={Link} to="" className="arrow-none btn btn-sm btn-light px-2" role="button">
                    <FaShareAlt className="fa-fw" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                   
                      <DropdownItem href="">
                        <FaTwitterSquare className="me-2" />
                        Twitter
                      </DropdownItem>
                
                      <DropdownItem href="">
                        <FaFacebookSquare className="me-2" />
                        Facebook
                      </DropdownItem>
                 
                      <DropdownItem href="">
                        <FaLinkedin className="me-2" />
                        LinkedIn
                      </DropdownItem>
              
                      <DropdownItem href="">
                        <FaCopy className="me-2" />
                        Copy link
                      </DropdownItem>
             
                  </DropdownMenu>
                </Dropdown>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mt-md-5">
          <Col xs={12}>
            <Splide options={spliderOpts} className="splide-main mb-3" ref={sliderRef}>
              <SplideSlide className="rounded">
                <Image src={gallery4} />
                <GlightBox image={gallery4} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery5} />
                <GlightBox image={gallery5} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery3} />
                <GlightBox image={gallery3} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery9} />
                <GlightBox image={gallery9} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery10} />
                <GlightBox image={gallery10} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery6} />
                <GlightBox image={gallery6} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery7} />
                <GlightBox image={gallery7} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
              <SplideSlide className="rounded">
                <Image src={gallery8} />
                <GlightBox image={gallery8} className="stretched-link" data-glightbox data-gallery="banner" />
              </SplideSlide>
            </Splide>
            <Splide options={spliderThumbnailOpts} className="splide splide-thumb" ref={thumbnailRef}>
              <SplideSlide>
                <Image src={gallery4} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery5} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery3} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery9} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery10} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery6} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery7} />
              </SplideSlide>
              <SplideSlide>
                <Image src={gallery8} />
              </SplideSlide>
            </Splide>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

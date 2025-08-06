    import { TinySlider } from '@/components'
    import { useToggle } from '@/hooks'
    import { useLayoutContext } from '@/states'
    import { splitArray } from '@/utils'
    import { Button, Card, CardBody, CardHeader, Carousel, Col, Collapse, Image, Modal, ModalBody, ModalHeader, Row } from 'react-bootstrap'
    import { renderToString } from 'react-dom/server'
    import { BsArrowLeft, BsArrowRight, BsEyeFill } from 'react-icons/bs'
    import { FaAngleDown, FaAngleUp, FaCheckCircle } from 'react-icons/fa'
    import { Link } from 'react-router-dom'
    import { type TinySliderSettings } from 'tiny-slider'
    import { Fragment, useState } from 'react'
    import 'tiny-slider/dist/tiny-slider.css'
    import { HotelsRoomCardType, Rooms } from '@/models/RoomDetailsApi'
    import { HotelData, HotelParams } from '@/models/HotelDetailsApi';
    import { useNavigate } from 'react-router-dom'

    interface RoomCardProps extends HotelsRoomCardType {
    hotelData: HotelData;
    roomDataf4: Rooms;
    hotelParams: HotelParams;
    }
    
    const RoomCard = ({ features, images, name, price, amenities, schemes, count, hotelData, roomDataf4, hotelParams }: RoomCardProps ) => {
    const { isOpen, toggle } = useToggle();
    const [isExpand, setExpand] = useState<boolean>(false);
    const [isExpand2, setExpand2] = useState<boolean>(false);
    const navigate = useNavigate()

    const toggleExpand = () =>{
        setExpand(!isExpand)
    }
    const toggleExpand2 = () =>{
        setExpand2(!isExpand2)
    }

    const handleSelectRoom = () => {
    navigate('/hotels/review-booking', {
      state: {
        hotelData,
        roomDataf4,
        hotelParams
      }
    });
  }

    const chunk_size = 2
    const safeAmenities = amenities || [];
    const amenitiesChunks = splitArray(safeAmenities.slice(0, 14), chunk_size);
    const extraChunks = splitArray(safeAmenities.slice(14), chunk_size);
    console.log(extraChunks)
    return (
        <Card className="shadow py-4 px-3">
        <Row className="g-4">
            <Col md={5} className="position-relative">

            <Carousel interval={null} controls={true} indicators={false } fade={false}>
                {images.map((image, idx) => (
                    <Carousel.Item key={idx} >
                    <img
                        className="d-block w-100"
                        src={image.url}
                        alt={`Slide ${idx}`}
                        style={{ maxHeight:'300px',objectFit: 'cover', objectPosition: 'center', borderRadius: '12px' }}
                    />
                    </Carousel.Item>
                ))}
            </Carousel>

            <h4 className=" fw-bold card-title mt-3">{name}</h4>
            {schemes? (schemes.map((scheme, idx) => (
                    scheme == "Non Refundable"?
                        <p key={idx} className="text-danger mb-0">{scheme}</p>
                    :
                        <p key={idx} className="text-success mb-0">{scheme}</p>
                ))):<></> }

                <div className="d-sm-flex justify-content-sm-between align-items-center mt-3">
                    <div className="d-flex align-items-center">
                        <div className=" mb-0 me-1">Starts From:&nbsp;
                        <h3>${price}</h3>
                        </div>
                    </div>
            </div>
            { count == 1 ?(
                <div>Last Room Left!</div>  
            ):count <= 5?(
                <div>Room Selling Fast!</div>
            ):null
            }
            
            </Col>
            

            <Col md={7}>
            <div className="card-body d-flex flex-column h-100 p-0 position-relative">
                <h5 className="card-title mb-0">Amenities</h5>
                {amenitiesChunks.map((chunk, idx) => {
                        return (
                        <Row key={idx}>
                            {chunk.map((item, idx) => {
                            return (
                                <Col key={idx} md={6}>
                                <ul className="list-group list-group-borderless mt-2 mb-0">
                                    <li className="list-group-item d-flex mb-0">
                                    <FaCheckCircle className="text-success me-2 flex-shrink-0" />
                                    <span className="h6 fw-light mb-0">{item}</span>
                                    </li>
                                </ul>
                                </Col>
                            )
                            })}
                        </Row>
                )
                })}
                <Collapse in={isExpand}>
                    <div>
                        {extraChunks.map((chunk, idx) => {
                            return (
                            <Row key={idx}>
                                {chunk.map((item, idx) => {
                                return (
                                    <Col key={idx} md={6}>
                                    <ul className="list-group list-group-borderless mt-2 mb-0">
                                        <li className="list-group-item d-flex mb-0">
                                        <FaCheckCircle className="text-success me-2 flex-shrink-0" />
                                        <span className="h6 fw-light mb-0">{item}</span>
                                        </li>
                                    </ul>
                                    </Col>
                                )
                                })}
                            </Row>
                            )
                        })}
                    </div>
                </Collapse>
                <a onClick={toggleExpand} className="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed">
                {!isExpand ? (
                    <Fragment>
                    <span className="see-more" role="button">
                        See more
                    </span>
                    <FaAngleDown className="ms-2" />
                    </Fragment>
                ) : (
                    <Fragment>
                    <span role="button">See less</span>
                    <FaAngleUp className="ms-2" />
                    </Fragment>
                )}
                </a>
                
                <div className=' mt-auto text-end pe-4 pb-1'>
                    <div className="mt-3 mt-sm-0">
                    <Button variant="primary" size="lg" className="mb-0" onClick={handleSelectRoom}>Select Room</Button>
                    </div>
                    <Link to="" className="text-decoration-underline p-0 mb-0 mt-1" onClick={
                        (e) => {
                            e.preventDefault(); // prevent navigation
                            toggle();
                        }
                    }>
                        <BsEyeFill className=" me-1" />
                        View more details
                    </Link>
                </div>
                
                
                
            </div>

            <Modal show={isOpen} onHide={toggle} className="fade modal-lg">
                <ModalHeader className="p-3">
                <h5 className="modal-title mb-0" id="roomDetailLabel">
                    Room details
                </h5>
                <button type="button" onClick={toggle} className="btn-close" />
                </ModalHeader>
                <ModalBody className="p-0">
                <Card className="bg-transparent p-3">
                    <div className="rounded-2 overflow-hidden">
                    <Carousel
                        indicators={true}  // show dots
                        controls={true}    // show prev/next arrows
                        interval={null}    // disable auto-slide; set to a number (ms) if you want autoplay
                        slide={true}
                        fade={false}       // if you want fade effect, set true
                    >
                        {images.map((image, idx) => (
                        <Carousel.Item key={idx}>
                            <Image
                            src={image.high_resolution_url}
                            alt={`Slide ${idx}`}
                            className="d-block w-100 rounded-2"
                            style={{ objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                        ))}
                    </Carousel>
                    </div>
                    <CardHeader className="bg-transparent pb-0">
                    <h3 className="card-title mb-0">{name}</h3>
                    </CardHeader>
                    <CardBody>
                        <div dangerouslySetInnerHTML={{ __html: features }} />
                    <h5 className="mb-0">Amenities</h5>
                    {amenitiesChunks.map((chunk, idx) => {
                        return (
                        <Row key={idx}>
                            {chunk.map((item, idx) => {
                            return (
                                <Col key={idx} md={6}>
                                <ul className="list-group list-group-borderless mt-2 mb-0">
                                    <li className="list-group-item d-flex mb-0">
                                    <FaCheckCircle className="text-success me-2 flex-shrink-0" />
                                    <span className="h6 fw-light mb-0">{item}</span>
                                    </li>
                                </ul>
                                </Col>
                            )
                            })}
                        </Row>
                        )
                    })}
                    <Collapse in={isExpand2}>
                        <div>
                            {extraChunks.map((chunk, idx) => {
                                return (
                                <Row key={idx}>
                                    {chunk.map((item, idx) => {
                                    return (
                                        <Col key={idx} md={6}>
                                        <ul className="list-group list-group-borderless mt-2 mb-0">
                                            <li className="list-group-item d-flex mb-0">
                                            <FaCheckCircle className="text-success me-2 flex-shrink-0" />
                                            <span className="h6 fw-light mb-0">{item}</span>
                                            </li>
                                        </ul>
                                        </Col>
                                    )
                                    })}
                                </Row>
                                )
                            })}
                        </div>
                    </Collapse>
                    <a onClick={toggleExpand2} className="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed">
                    {!isExpand2 ? (
                        <Fragment>
                        <span className="see-more" role="button">
                            See more
                        </span>
                        <FaAngleDown className="ms-2" />
                        </Fragment>
                    ) : (
                        <Fragment>
                        <span role="button">See less</span>
                        <FaAngleUp className="ms-2" />
                        </Fragment>
                    )}
                    </a>
                    </CardBody>
                </Card>
                </ModalBody>
            </Modal>
            </Col>
        </Row>
        </Card>
    )
    }

    export default RoomCard

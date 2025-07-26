    import { TinySlider } from '@/components'
    import { useToggle } from '@/hooks'
    import { currency, useLayoutContext } from '@/states'
    import { splitArray } from '@/utils'
    import { Button, Card, CardBody, CardHeader, Col, Collapse, Image, Modal, ModalBody, ModalHeader, Row } from 'react-bootstrap'
    import { renderToString } from 'react-dom/server'
    import { BsArrowLeft, BsArrowRight, BsEyeFill } from 'react-icons/bs'
    import { FaAngleDown, FaAngleUp, FaCheckCircle } from 'react-icons/fa'
    import { Link } from 'react-router-dom'
    import { type TinySliderSettings } from 'tiny-slider'
    import { Fragment, useState } from 'react'

    import { HotelsRoomType } from '../data'

    import 'tiny-slider/dist/tiny-slider.css'
    import { HotelsRoomCardType } from '@/models/RoomDetailsApi'

    //const amenities: string[] = ['Swimming Pool', 'Spa', 'Kids Play Area', 'Gym', 'Tv', 'Mirror', 'Ac', 'Slippers']
    const RoomCard = ({ features, images, name, price, ammenities, schemes, count }: HotelsRoomCardType) => {
    const { isOpen, toggle } = useToggle();
    const [isExpand, setExpand] = useState<boolean>(false);
    const [isExpand2, setExpand2] = useState<boolean>(false);

    const toggleExpand = () =>{
        setExpand(!isExpand)
    }
    const toggleExpand2 = () =>{
        setExpand2(!isExpand2)
    }

    const { dir } = useLayoutContext()

    const roomSliderSettings: TinySliderSettings = {
        nested: 'inner',
        autoplay: false,
        controls: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
        arrowKeys: true,
        items: 1,
        nav: false,
        autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    }

    const chunk_size = 2
    const amenitiesChunks = splitArray(ammenities.slice(0,14), chunk_size)
    const extraChunks = splitArray(ammenities.slice(14), chunk_size)
    // const defaultChunks = amenitiesChunks.slice(0, 5);
    console.log(extraChunks)
    // const remainingChunks = amenitiesChunks.slice(5);
    return (
        <Card className="shadow py-4 px-3">
        <Row className="g-4">
            <Col md={5} className="position-relative">
            <div className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                <TinySlider settings={roomSliderSettings} >
                {images.map((image, idx) => {
                    return (
                    <div key={idx}>
                        <Image src={image.url} alt="Card image" className='w-100 h-100 object-fit-fill'/>
                    </div>
                    )
                })}
                </TinySlider>
            </div>
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
                        {/* {currency} */}
                        <h3>${price}</h3>
                        </div>
                        
                        {/* <span className="mb-0 me-2">/day</span>
                        <span className="text-decoration-line-through mb-0">{currency}1000</span> */}
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
                <h5 className="card-title mb-0">Ammenities</h5>
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
                    <Button variant="primary" size="lg" className="mb-0">Select Room</Button>
                    </div>
                    <Link to="" className="text-decoration-underline p-0 mb-0 mt-1" onClick={toggle}>
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
                    <div className="tiny-slider arrow-round arrow-dark overflow-hidden rounded-2">
                    <TinySlider settings={roomSliderSettings} className="rounded-2 overflow-hidden">
                        {images.map((image, idx) => (
                        <div key={idx}>
                            <Image src={image.high_resolution_url} className="rounded-2 object-fit-fill" alt="Card image"/>
                        </div>
                        ))}
                    </TinySlider>
                    </div>
                    <CardHeader className="bg-transparent pb-0">
                    <h3 className="card-title mb-0">{name}</h3>
                    </CardHeader>
                    <CardBody>
                        <div dangerouslySetInnerHTML={{ __html: features }} />
                        <p>{ features}</p>
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

import { currency } from '@/states'
import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, OverlayTrigger, Popover, PopoverBody, Row } from 'react-bootstrap'
import { BsArrowBarDown, BsCalculator, BsCreditCard, BsCreditCard2FrontFill, BsGraphUp, BsInfoCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import visa from '@/assets/images/element/visa.svg'

const StatisticCards = () => {
  return (
    <Row className="g-4">
      <Col sm={6} xxl={3}>
        <Card className="card-body bg-light p-4 h-100">
          <h6 className="mb-0">Average daily earning</h6>
          <h3 className="mb-2 mt-2">{currency}112</h3>
          <p className="mt-auto mb-0">
            Increase{' '}
            <span className="badge bg-success bg-opacity-10 text-success">
              <span className="items-center gap-1">
                10% <BsGraphUp />
              </span>
            </span>
          </p>
        </Card>
      </Col>
      <Col sm={6} xxl={3}>
        <Card className="card-body bg-light p-4 h-100">
          <h6 className="mb-0">Revenue this month</h6>
          <h3 className="mb-2 mt-2">{currency}899.95</h3>
          <p className="mt-auto mb-0">
            Increase from last month{' '}
            <span className="badge bg-success bg-opacity-10 text-success">
              <span className="items-center gap-1">
                21% <BsGraphUp className=" bi-graph-up" />
              </span>
            </span>
          </p>
        </Card>
      </Col>
      <Col sm={6} xxl={3}>
        <Card className="card-body bg-light p-4 h-100">
          <h6 className="items-center">
            On hold
            <OverlayTrigger
              overlay={
                <Popover>
                  <PopoverBody>After US royalty withholding tax</PopoverBody>
                </Popover>
              }
            >
              <a tabIndex={0} className="h6 mb-0 ms-1" role="button">
                <BsInfoCircleFill className=" small" />
              </a>
            </OverlayTrigger>
          </h6>
          <h3>{currency}15,356</h3>
          <p className="mb-0 mt-auto">Expected payout on 05/10/2022</p>
        </Card>
      </Col>
      <Col sm={6} xxl={3}>
        <Card className="bg-primary p-4">
          <div className="d-flex justify-content-between align-items-start text-white">
            <Image className="w-40px" src={visa} />
            <Dropdown>
              <DropdownToggle as={Link} to="" className="arrow-none text-white" id="creditcardDropdown" role="button">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle fill="currentColor" cx="12.5" cy="3.5" r="2.5" />
                  <circle fill="currentColor" opacity="0.5" cx="12.5" cy="11.5" r="2.5" />
                  <circle fill="currentColor" opacity="0.3" cx="12.5" cy="19.5" r="2.5" />
                </svg>
              </DropdownToggle>
              <DropdownMenu align="end">
            
                  <DropdownItem href="">
                    <BsCreditCard2FrontFill className=" me-2 fw-icon" />
                    Edit card
                  </DropdownItem>
            
                  <DropdownItem href="">
                    <BsCreditCard className=" me-2 fw-icon" />
                    Add new card
                  </DropdownItem>
            
                  <DropdownItem href="">
                    <BsArrowBarDown className=" me-2 fw-icon" />
                    Withdrawal money
                  </DropdownItem>
            
                  <DropdownItem href="">
                    <BsCalculator className=" me-2 fw-icon" />
                    Currency converter
                  </DropdownItem>
              
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="mt-4 text-white">
            <span>Total Balance</span>
            <h3 className="text-white mb-0">{currency}32,000</h3>
          </div>
          <h5 className="text-white mt-4">**** **** **** 1569</h5>
          <div className="d-flex justify-content-between text-white">
            <span>Valid thru: 12/26</span>
            <span>CVV: ***</span>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default StatisticCards

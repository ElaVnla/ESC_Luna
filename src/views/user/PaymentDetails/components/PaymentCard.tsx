import { Card, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from 'react-bootstrap'
import { BsCalculator, BsCreditCard2FrontFill } from 'react-icons/bs'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { type PaymentCardType } from '../data'

const PaymentCard = ({ cardDetail }: { cardDetail: PaymentCardType }) => {
  const { cardNumber, companyLogo, validDate, variant } = cardDetail
  return (
    <Card>
      <div className={clsx('p-4 rounded-3', variant)}>
        <div className="d-flex justify-content-between align-items-start">
          <Image className="w-40px" src={companyLogo} />

          <Dropdown>
            <DropdownToggle as={Link} to="" className="arrow-none text-white">
              <svg width={24} height={24} fill="none">
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
                  <BsCalculator className=" me-2 fw-icon" />
                  Currency converter
                </DropdownItem>
              
            </DropdownMenu>
          </Dropdown>
        </div>
        <h4 className="text-white mt-4">**** **** **** {cardNumber}</h4>
        <div className="d-flex justify-content-between text-white">
          <span>Valid thru: {validDate}</span>
          <span>CVV: ***</span>
        </div>
      </div>
    </Card>
  )
}

export default PaymentCard

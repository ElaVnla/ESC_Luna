import { Button, Card, CardBody, Image } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { OffersType } from '../data'
import clsx from 'clsx'
import { useClipboard } from '@/hooks'
import { currency, useNotificationContext } from '@/states'

const OfferCard = ({ offerDetails }: { offerDetails: OffersType }) => {
  const { couponCode, flightType, logo, offer, variant, percentageOff } = offerDetails

  const [, copy] = useClipboard()
  const { showNotification } = useNotificationContext()

  const onCopy = (text: string) => {
    copy(text).then((copied) => {
      if (copied) {
        showNotification({ message: 'Copied To Clipboard', type: 'success', delay: 1500 })
      }
    })
  }

  return (
    <Card className={clsx(variant, 'bg-opacity-10 h-100 p-4')}>
      <Image src={logo} className="w-75" />
      <CardBody className="mt-4 p-0">
        <span className="mb-1">Flat</span>
        <h4 className="mb-1">
          {!percentageOff && currency}
          {offer}
        </h4>
        <h6 className="fw-normal">{flightType}</h6>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="bg-primary bg-opacity-10 border border-2 border-primary border-dashed rounded-2 px-3 py-2">
            <h5 className="fw-normal user-select-all mb-0" role="button" onClick={() => onCopy(couponCode)}>
              {couponCode}
            </h5>
          </div>
          <Button size="lg" variant="white" href="" className="btn-round mb-0">
            <BsArrowRight />
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default OfferCard

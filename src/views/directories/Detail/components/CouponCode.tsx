import { useClipboard } from '@/hooks'
import { currency, useNotificationContext } from '@/states'
import { useRef } from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsPatchCheckFill } from 'react-icons/bs'

const CouponCode = () => {
  const inputRef = useRef<HTMLInputElement>(null)
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
    <Card className="card-body shadow">
      <div className="card-title">
        <h5>Save {currency}70 instant of code</h5>
      </div>
      <ul className="list-group list-group-borderless mb-0">
        <li className="list-group-item small pb-0 items-center">
          <BsPatchCheckFill className=" text-success me-1" />
          Valid on all prepaid deals
        </li>
        <li className="list-group-item small pb-0 items-center">
          <BsPatchCheckFill className=" text-success me-1" />
          No minimum purchase
        </li>
      </ul>
      <div className="input-group mt-3">
        <input ref={inputRef} className="form-control form-control border-dashed" placeholder="Coupon code" defaultValue="BOOK56" />
        <Button type="button" variant="primary" onClick={() => onCopy(inputRef.current?.value ?? '')}>
          Copy
        </Button>
      </div>
    </Card>
  )
}

export default CouponCode

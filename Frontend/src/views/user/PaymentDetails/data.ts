import visa from '@/assets/images/element/visa.svg'
import masterCard from '@/assets/images/element/mastercard.svg'

export type PaymentCardType = {
  companyLogo: string
  cardNumber: number
  validDate: string
  variant: string
}

const paymentCards: PaymentCardType[] = [
  {
    companyLogo: visa,
    cardNumber: 1569,
    validDate: '12/26',
    variant: 'bg-primary',
  },
  {
    companyLogo: masterCard,
    cardNumber: 5620,
    validDate: '02/35',
    variant: 'bg-danger',
  },
]

export { paymentCards }

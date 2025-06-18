type InvoiceType = {
  id: number
  date: string
  amount: string
  status: 'Paid' | 'Pending' | 'Cancelled'
}

const paymentHistory: InvoiceType[] = [
  {
    id: 2045896,
    date: '02 Dec 2022',
    amount: '3,999',
    status: 'Paid',
  },
  {
    id: 124896,
    date: '01 Dec 2022',
    amount: '2,500',
    status: 'Paid',
  },
  {
    id: 201547,
    date: '25 Nov 2022',
    amount: '4,140',
    status: 'Pending',
  },
  {
    id: 145750,
    date: '24 Nov 2022',
    amount: '3,245',
    status: 'Paid',
  },
  {
    id: 524780,
    date: '22 Nov 2022',
    amount: '1,825',
    status: 'Cancelled',
  },
  {
    id: 47850,
    date: '20 Nov 2022',
    amount: '3,656',
    status: 'Paid',
  },
]

export { paymentHistory }

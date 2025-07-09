import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

type GuestType = {
  name: string
  date: string
  checkIn: string
  checkOut: string
  roomNo: string
  status: 'Booked' | 'Pending' | 'Canceled'
  image: string
}

const guestsList: GuestType[] = [
  {
    name: 'Lori Stevens',
    date: '02 Dec 2022',
    checkIn: '18 Dec 2022',
    checkOut: '22 Dec 2022',
    roomNo: 'G102',
    status: 'Booked',
    image: avatar9,
  },
  {
    name: 'Carolyn Ortiz',
    date: '01 Dec 2022',
    checkIn: '16 Dec 2022',
    checkOut: '22 Dec 2022',
    roomNo: 'G103',
    status: 'Booked',
    image: avatar1,
  },
  {
    name: 'Billy Vasquez',
    date: '29 Nov 2022',
    checkIn: '10 Dec 2022',
    checkOut: '14 Dec 2022',
    roomNo: 'G105',
    status: 'Pending',
    image: avatar3,
  },
  {
    name: 'Samuel Bishop',
    date: '14 Nov 2022',
    checkIn: '07 Dec 2022',
    checkOut: '09 Dec 2022',
    roomNo: 'G102',
    status: 'Pending',
    image: avatar4,
  },
  {
    name: 'Amanda Reed',
    date: '10 Nov 2022',
    checkIn: '02 Dec 2022',
    checkOut: '05 Dec 2022',
    roomNo: 'G102',
    status: 'Booked',
    image: avatar5,
  },
  {
    name: 'Jacqueline Miller',
    date: '05 Nov 2022',
    checkIn: '27 Nov 2022',
    checkOut: '01 Dec 2022',
    roomNo: 'G105',
    status: 'Booked',
    image: avatar6,
  },
  {
    name: 'Joan Wallace',
    date: '05 Nov 2022',
    checkIn: '23 Nov 2022',
    checkOut: '26 Nov 2022',
    roomNo: 'F105',
    status: 'Booked',
    image: avatar7,
  },
  {
    name: 'Dennis Stevens',
    date: '14 Nov 2022',
    checkIn: '07 Dec 2022',
    checkOut: '09 Dec 2022',
    roomNo: 'G102',
    status: 'Canceled',
    image: avatar8,
  },
  {
    name: 'Louis Ferguson',
    date: '02 Dec 2022',
    checkIn: '18 Dec 2022',
    checkOut: '22 Dec 2022',
    roomNo: 'G102',
    status: 'Booked',
    image: avatar8,
  },
]

export { guestsList }

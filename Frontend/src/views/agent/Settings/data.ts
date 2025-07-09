type ActiveLogType = {
  browser: string
  ip: string
  time: string
}

const activeLogs: ActiveLogType[] = [
  {
    browser: 'Chrome On Window',
    ip: '173.238.198.108',
    time: '12 Nov 2021',
  },
  {
    browser: 'Mozilla On Window',
    ip: '107.222.146.90',
    time: '08 Nov 2021',
  },
  {
    browser: 'Chrome On iMac',
    ip: '231.213.125.55',
    time: '06 Nov 2021',
  },
  {
    browser: 'Mozilla On Window',
    ip: '37.242.105.138',
    time: '02 Nov 2021',
  },
]

export { activeLogs }

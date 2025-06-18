import { type User } from '@/states'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

export const fakeUsers: User[] = [
  {
    id: '1',
    email: 'admin@email.com',
    username: 'admin',
    password: 'password',
    firstName: 'Admin',
    lastName: 'StackBros',
    role: 'admin',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3ZWJlc3RpY2EiLCJhdWQiOiJodHRwczovL3d3dy53ZWJlc3RpY2EuY29tLyIsInN1YiI6IndlYmVzdGljYUBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IldlYmVzdGljYSIsIkVtYWlsIjoid2ViZXN0aWNhQGdtYWlsLmNvbSIsIlJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6IkJvb2tpbmcifQ.ETjMzKHATzzz0quoZ2Rt7H2szm7DNrUBoX6EWUDbAwRSjRX6YiWz4Lt5IOfsP6ya72u4zdetwMbGq_rf1bAzbg',
  },
  {
    id: '2',
    email: 'user@email.com',
    username: 'user',
    password: 'password',
    firstName: 'User',
    lastName: 'StackBros',
    role: 'user',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3ZWJlc3RpY2EiLCJhdWQiOiJodHRwczovL3d3dy53ZWJlc3RpY2EuY29tLyIsInN1YiI6IndlYmVzdGljYUBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IldlYmVzdGljYSIsIkVtYWlsIjoid2ViZXN0aWNhQGdtYWlsLmNvbSIsIlJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6IkJvb2tpbmcifQ.ETjMzKHATzzz0quoZ2Rt7H2szm7DNrUBoX6EWUDbAwRSjRX6YiWz4Lt5IOfsP6ya72u4zdetwMbGq_rf1bAzbg',
  },
]

export default function configureFakeBackend() {
  mock.onPost('/login').reply(function (config) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, _reject) {
      setTimeout(function () {
        // get parameters from post request
        const params = JSON.parse(config.data)
        // find if any user matches login credentials
        const filteredUsers = fakeUsers.filter((user) => {
          return user.email === params.email && user.password === params.password
        })

        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          const user = filteredUsers[0]
          resolve([200, user])
        } else {
          // else return error
          resolve([401, { error: 'Username or password is incorrect' }])
        }
      }, 1000)
    })
  })
}

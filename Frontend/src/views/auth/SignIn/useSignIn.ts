import HttpClient from '@/helpers/httpClient'
import { User, useAuthContext, useNotificationContext } from '@/states'
import { yupResolver } from '@hookform/resolvers/yup'
import { type AxiosResponse } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as yup from 'yup'

const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { saveSession } = useAuthContext()
  const [searchParams] = useSearchParams()
  const { showNotification } = useNotificationContext()

  const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'user@email.com',
      password: 'password',
    },
  })

  const redirectUser = () => {
    const redirectLink = searchParams.get('redirectTo')
    if (redirectLink) navigate(redirectLink)
    else navigate('/hotels/home')
  }

  type LoginFormFields = yup.InferType<typeof loginFormSchema>

  const login = handleSubmit(async (values: LoginFormFields) => {
    try {
      const res: AxiosResponse<User> = await HttpClient.post('/login', values)
      if (res.data.token) {
        saveSession({
          ...(res.data ?? {}),
          token: res.data.token,
        })
        redirectUser()
        showNotification({ message: 'Successfully logged in. Redirecting....', type: 'success' })
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e.response?.data?.error) {
        showNotification({ message: `${e.response?.data?.error}`, type: 'error' })
      }
    } finally {
      setLoading(false)
    }
  })

  return { loading, login, control }
}

export default useSignIn

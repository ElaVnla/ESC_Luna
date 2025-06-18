import { TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const SecuritySettings = () => {
  const securitySchema = yup.object({
    mobileNo: yup.number().required('Please enter your mobile number'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(securitySchema),
  })
  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h4 className="card-header-title">Security settings</h4>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit(() => {})} className="mb-3">
          <h6>Two-factor authentication</h6>
          <label className="form-label">Add a phone number to set up two-factor authentication</label>
          <TextFormInput name="mobileNo" className="mb-2" placeholder="enter your mobile number" control={control} />
          <Button variant="primary" size="sm" type="submit">
            Send Code
          </Button>
        </form>

        <form>
          <h6>Active sessions</h6>
          <p className="mb-2">Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</p>
          <Button variant="danger" size="sm" className="mb-0" type="button">
            Sign Out
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default SecuritySettings

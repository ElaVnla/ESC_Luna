import { PasswordFormInput } from '@/components'
import { Button, Card, CardHeader } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const UpdatePassword = () => {


  const { control, handleSubmit } = useForm()
  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Update Password</h5>
        <p className="mb-0 small">
          Your current email address is <span className="text-primary">example@gmail.com</span>
        </p>
      </CardHeader>

      <form onSubmit={handleSubmit(() => {})} className="card-body">
        <PasswordFormInput
          name="currentPassword"
          label="Current password"
          placeholder="Enter current password"
          containerClass="mb-3"
          control={control}
        />

        <PasswordFormInput name="newPassword" label="Enter new password" placeholder="Enter new password" containerClass="mb-3" control={control} />

        <PasswordFormInput
          name="confirmPassword"
          label="Confirm new password"
          placeholder="confirm new password"
          containerClass="mb-3"
          control={control}
        />

        <div className="text-end">
          <Button type="submit" variant="primary" className="mb-0">
            Change Password
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default UpdatePassword

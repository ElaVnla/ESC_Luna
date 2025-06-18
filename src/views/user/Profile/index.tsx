import { PageMetaData } from '@/components'
import PersonalInformation from './components/PersonalInformation'
import ProfileProgress from './components/ProfileProgress'
import UpdateEmail from './components/UpdateEmail'
import UpdatePassword from './components/UpdatePassword'

const Profile = () => {
  return (
    <>
      <PageMetaData title="User Profile" />

      <div className="vstack gap-4">
        <ProfileProgress />

        <PersonalInformation />

        <UpdateEmail />

        <UpdatePassword />
      </div>
    </>
  )
}

export default Profile

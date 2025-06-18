import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsCheckCircleFill } from 'react-icons/bs'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const LinkedAccount = () => {
  return (
    <Card className="border rounded-3">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Linked account</h5>
      </CardHeader>
      <CardBody className="pb-0">
        <div className="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
          <h2 className="mb-0 me-3">
            <FcGoogle size={56} />
          </h2>
          <div>
            <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
              <BsCheckCircleFill className=" text-success fs-5" />
            </div>
            <h6 className="mb-1">Google</h6>
            <p className="mb-1 small">You are successfully connected to your Google account</p>
            <Button type="button" size="sm" variant="danger" className="mb-0">
              Invoke
            </Button>
            <Link to="" className="btn btn-sm btn-link text-body mb-0">
              Learn more
            </Link>
          </div>
        </div>
        <div className="mb-4 d-sm-flex border p-3 rounded">
          <h2 className="mb-0 me-3">
            <FaLinkedinIn size={56} className="text-linkedin" />
          </h2>
          <div>
            <h6 className="mb-1">Linkedin</h6>
            <p className="mb-1 small">Connect with Linkedin account for a personalized experience</p>
            <Button type="button" variant="primary" size="sm" className="mb-0 me-1">
              Connect Linkedin
            </Button>
            <Link to="" className="btn btn-sm btn-link text-body mb-0">
              Learn more
            </Link>
          </div>
        </div>
        <div className="mb-4 d-sm-flex border p-3 rounded">
          <h2 className="mb-0 me-3">
            <FaFacebook size={56} className="text-facebook" />
          </h2>
          <div>
            <h6 className="mb-1">Facebook</h6>
            <p className="mb-1 small">Connect with Facebook account for a personalized experience</p>
            <Button type="button" variant="primary" size="sm" className="mb-0 me-1">
              Connect Facebook
            </Button>
            <Link to="" className="btn btn-sm btn-link text-body mb-0">
              Learn more
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default LinkedAccount

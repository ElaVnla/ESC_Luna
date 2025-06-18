import { PageMetaData, SelectFormInput } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { BsFiletypePdf } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AgentCard from './components/AgentCard'
import { agentsList } from './data'

const AgentsList = () => {
  return (
    <>
      <PageMetaData title="Agent List" />

      <Row>
        <Col xs={12} className="mb-4 mb-sm-5">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">Agent List</h1>
            <div className="d-grid">
              <Link to="" className="btn btn-primary mb-0">
                <BsFiletypePdf className=" me-2" />
                Generate Report
              </Link>{' '}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="g-3 align-items-center justify-content-between mb-5">
        <Col md={8}>
          <form className="rounded position-relative">
            <input className="form-control pe-5" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
              <FaSearch />
            </button>
          </form>
        </Col>
        <Col md={3}>
          <form>
            <SelectFormInput className="form-select js-choice" aria-label=".form-select-sm">
              <option value={-1}>Sort by</option>
              <option>Free</option>
              <option>Newest</option>
              <option>Oldest</option>
            </SelectFormInput>
          </form>
        </Col>
      </Row>
      <Row className="g-4">

        {agentsList.map((agent, idx) => {
          return (
            <Col key={idx} md={6} lg={4} xxl={3}>
              <AgentCard agent={agent} />
            </Col>
          )
        })}

      </Row>
      <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4">
        <p className="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
        <nav className="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
          <ul className="pagination pagination-sm pagination-primary-soft mb-0">
            <li className="page-item disabled">
              <Link className="page-link" to="" tabIndex={-1}>
                Prev
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                1
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="">
                2
              </Link>
            </li>
            <li className="page-item disabled">
              <Link className="page-link" to="">
                ..
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                15
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default AgentsList

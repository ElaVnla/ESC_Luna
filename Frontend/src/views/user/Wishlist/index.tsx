import { PageMetaData, SelectFormInput } from '@/components'
import { Button, Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import WishCard from './components/WishCard'
import { wishListCards } from './data'

const Wishlist = () => {
  return (
    <>
      <PageMetaData title="User Wishlist" />

      <Card className="border bg-transparent">
        <CardHeader className="bg-transparent border-bottom">
          <h4 className="card-header-title">My Wishlist</h4>
        </CardHeader>
        <CardBody className="vstack gap-4">
          <form className="d-flex justify-content-between flex-wrap gap-2">
            <Col xs={6} xl={3}>
              <SelectFormInput className="form-select form-select-sm js-choice border-0">
                <option value={-1}>Sort by</option>
                <option>Recently search</option>
                <option>Most popular</option>
                <option>Top rated</option>
              </SelectFormInput>
            </Col>
            <Button variant="danger-soft" className="mb-0 items-center">
              <FaTrash className="me-2" />
              Remove all
            </Button>
          </form>

          {wishListCards.map((card, idx) => (
            <WishCard key={idx} wishCard={card} />
          ))}

        </CardBody>
      </Card>
    </>
  )
}

export default Wishlist

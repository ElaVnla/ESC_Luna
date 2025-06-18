import { currency } from '@/states'
import { Card, CardBody, Col, Image } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import { TourPackageType } from '../data'
import { Link } from 'react-router-dom'

const TourPackageCard = ({ tourPackages }: { tourPackages: TourPackageType[] }) => {
  return (
    <>
      {tourPackages.map((tour, idx) => {
        return (
          <Col sm={6} xl={3} key={idx}>
            <Card className="card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <Image src={tour.image} className="card-img" />
                <div className="card-img-overlay d-flex flex-column z-index-1 p-4">
                  <div className="d-flex justify-content-between">
                    <span className="badge text-bg-dark">{tour.type}</span>
                    <span className="badge text-bg-white items-center">
                      <FaStar size={15} className="text-warning me-2" />
                      {tour.rating}
                    </span>
                  </div>
                  <div className="w-100 mt-auto">
                    <span className="badge text-bg-white fs-6">
                      {tour.days} days / {tour.nights} nights
                    </span>
                  </div>
                </div>
              </div>
              <CardBody className="px-2">
                <h5 className="card-title">
                  <Link to="/tours/grid" className="stretched-link">
                    {tour.name}
                  </Link>
                </h5>
                <div className="hstack gap-2">
                  <span className="h5 mb-0 text-success">
                    {currency}
                    {tour.price}
                  </span>
                  <small>Starting price</small>
                </div>
              </CardBody>
            </Card>
          </Col>
        )
      })}
    </>
  )
}

export default TourPackageCard

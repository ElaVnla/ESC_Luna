import Nouislider from 'nouislider-react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'

const carModels = ['WagonR', 'Indica', 'Dzire', 'Etios', 'Xcent', 'Innova', 'Innova Crysta']

const CabsListFilter = () => {
  const [priceRange, setPriceRange] = useState<string[]>(['700', '1500'])

  return (
    <form className="rounded-3 shadow">
      <Card className="card-body rounded-0 rounded-top p-4">
        <h6 className="mb-2">Passenger capacity</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="popolarType1" />
          <label className="form-check-label" htmlFor="popolarType1">
            4 passenger seats
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="popolarType2" />
          <label className="form-check-label" htmlFor="popolarType2">
            6 passenger seats
          </label>
        </div>
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 p-4">
        <h6 className="mb-2">Price</h6>
        <div className="position-relative">
          <div className="noui-wrapper mb-2">
            <div className="d-flex justify-content-between">
              <input type="text" className="text-body input-with-range-min" value={priceRange[0].split('.')[0]} readOnly />
              <input type="text" className="text-body input-with-range-max" value={priceRange[1].split('.')[0]} readOnly />
            </div>

            <Nouislider
              start={priceRange}
              range={{
                min: 500,
                max: 2000,
              }}
              step={1}
              onChange={setPriceRange}
              className="noui-slider-range mt-2"
              connect
            />
          </div>
        </div>
      </Card>
      <hr className="my-0" />
      <Card className="card-body rounded-0 rounded-bottom p-4">
        <h6 className="mb-2">Car model</h6>
        {carModels.map((model, idx) => (
          <div className="form-check" key={idx}>
            <input className="form-check-input" type="checkbox" id={`lauoverType${idx}`} />
            <label className="form-check-label" htmlFor={`lauoverType${idx}`}>
              {model} or similar
            </label>
          </div>
        ))}
      </Card>
    </form>
  )
}

export default CabsListFilter

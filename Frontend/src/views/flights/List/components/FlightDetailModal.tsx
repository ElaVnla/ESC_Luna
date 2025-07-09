import { Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import FlightDetailTab from './FlightDetailTab'

const FlightDetailModal = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  return (
    <Modal show={isOpen} onHide={toggle} size="lg" className="fade" id="flightdetail" aria-hidden="true">
      <ModalHeader>
        <h5 className="modal-title">Flight Details</h5>
        <button type="button" className="btn-close" onClick={toggle} />
      </ModalHeader>
      <ModalBody className="p-3">
        <FlightDetailTab />
      </ModalBody>
    </Modal>
  )
}

export default FlightDetailModal

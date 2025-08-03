import { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from 'react-bootstrap'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AppMenu, LogoBox } from '@/components'
import element17 from '@/assets/images/element/17.svg'
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const [showCancelModal, setShowCancelModal] = useState(false)
  const navigate = useNavigate();

  const handleCancelClick = () => setShowCancelModal(true)
  const handleCloseModal = () => setShowCancelModal(false)
  const handleProceedCancellation = async () => {
    const stored = sessionStorage.getItem('pendingBooking');
    if (!stored) return alert('No booking ID found');

      let parsed: any;
      try {
        parsed = JSON.parse(stored);
        if (typeof parsed === 'string') {
          parsed = JSON.parse(parsed); // handle double-stringify
        }
      } catch (err) {
        console.error('Failed to parse pendingBooking:', err);
        alert('Invalid session data.');
        return;
      }

const bookingId = parsed?.bookingId;
if (!bookingId) return alert('Booking ID missing in session');

  
    try {
      const res = await fetch(`http://localhost:3000/bookings/${bookingId}`, {
        method: 'DELETE',
      });
  
      if (!res.ok) throw new Error('Delete failed');
  
      alert('Booking has been cancelled.');
      sessionStorage.removeItem('pendingBooking');
      navigate('/'); // or navigate to confirmation/cancellation page
    } catch (err) {
      console.error('Cancel error:', err);
      alert('Failed to cancel booking. Please try again.');
    }
  
    setShowCancelModal(false);
  };
  
  const handleeditbookingclick = () => {
    const stored = sessionStorage.getItem('pendingBooking');
    if (!stored) {
      alert('No booking info found.');
      return;
    }
  
    let parsed: any;
    try {
      parsed = JSON.parse(stored);
      if (typeof parsed === 'string') {
        parsed = JSON.parse(parsed); // handle double-stringify
      }
    } catch (err) {
      console.error('❌ Failed to parse pendingBooking:', err);
      alert('Invalid session data format.');
      return;
    }
  
    if (!parsed || typeof parsed !== 'object' || !parsed.bookingId) {
      alert('Missing booking ID in session.');
      return;
    }
  
    navigate('/hotels/edit-booking');
  };
  
  let bookingId = 'N/A';
  try {
    const stored = sessionStorage.getItem('pendingBooking');
    if (stored) {
      const parsed = JSON.parse(stored);
      bookingId = parsed?.bookingId || 'N/A';
    }
  } catch (err) {
  console.error('Error parsing pendingBooking:', err);
}


  return (
    <section className="py-0 mb-1">
      <Container>
        <Card className="overflow-hidden px-sm-5 pt-4 pb-3">
          {/* Title */}
          <Row className="mb-3">
            <Col sm={12} className="text-center">
              <h3 className="m-0 h4 card-title">BOOKING FOUND</h3>
            </Col>
          </Row>

          {/* Booking Info */}
          <Row className="align-items-center justify-content-between text-center g-3 mb-4">
          <p className="mb-1"><strong>Booking ID:</strong> #{bookingId || 'N/A'}</p>

            <Col xs={4}><p className="mb-1"><strong>Booking Date:</strong> 14 July 2025</p></Col>
            <Col xs={4}><p className="mb-1"><strong>Time:</strong> 3:30 PM</p></Col>
          </Row>

          {/* Description */}
          <Row>
            <Col sm={12}>
              <h6 style={{ fontWeight: 'normal' }}>
                Your booking has been successfully retrieved. You may now <strong>view</strong> your reservation details,
                <strong> amend</strong> guest information or preferences, or <strong>cancel</strong> your booking if needed.
              </h6>
            </Col>
          </Row>

          {/* Disclaimer */}
          <Row>
            <Col sm={12} className="text-center mt-3">
              <small className="text-muted">
                <em>
                  To change your check-in/check-out dates or the number of guests, please cancel your current booking and make a new one.
                  Cancellations may incur a fee, which will be automatically charged to your card on file.
                  Refunds (if applicable) will be processed accordingly.
                </em>
              </small>
            </Col>
          </Row>

          {/* Buttons */}
          <Row className="mt-7 text-end justify-content-end">
            <Col xs={12} md="auto" className="text-md-end text-center">
              <div className="d-flex flex-wrap justify-content-md-end justify-content-center gap-2">
                <Button variant="warning" onClick={handleeditbookingclick}>Edit</Button>
                <Button variant="danger" onClick={handleCancelClick}>Cancel</Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Cancel Modal */}
      <Modal show={showCancelModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to cancel this booking? Your reservation slot will be released to others.
            <br /><br />
            <strong>Note:</strong> Cancellations may incur a fee, which will be charged to your card on file.
            If eligible, a refund will be processed accordingly.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Go Back
          </Button>
          <Button variant="danger" onClick={handleProceedCancellation}>
            Proceed with Cancellation
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}

export default Hero

import { Wizard, useWizard } from 'react-use-wizard';
import HotelInformation from './HotelInformation';
import { CheckFormInput, DropzoneFormInput, FileFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components';
import { Button, Card, CardBody, CardHeader, Col, Row, Container } from 'react-bootstrap';
import type { Step1Props } from '../types';
import RoomInformation from './RoomInformation';
import CancellationPolicy from './CancellationPolicy';
import SpecialRequest from './SpecialRequest';
import { useEffect } from 'react';

const Step1 = ({ control, hotelData, roomData, hotelParams }: Step1Props) => {
  const { nextStep } = useWizard();

  // ScrollToTop component to ensure the page starts at the top
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);  // Scroll to the top when Step1 is mounted
    }, []);  // Empty dependency array ensures this runs only once on mount

    return null;  // This component doesn't render anything
  };

  console.log("IN STEP 1 ROOM DETAILS: ", roomData);
  console.log("IN STEP 1 HOTEL DETAILS: ", hotelData);

  return (
    <div className="vstack gap-4">
      <ScrollToTop /> {/* Scrolls to top when Step1 is loaded */}
      <Row className="g-4">
        <Col xl={7}>
          <div className="vstack gap-3">
            <HotelInformation hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
            <SpecialRequest />
            <CancellationPolicy roomData={roomData} />
          </div>
        </Col>
        <Col as="aside" xl={5}>
          <Row className="g-4">
            <Col md={12} xl={12}>
              <RoomInformation roomData={roomData} />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="text-end">
        {/* Button that goes back to the previous page */}
        <Button variant="secondary" className="next-btn mb-0 float-start" onClick={() => window.history.back()}>
          <i className="bi bi-arrow-left me-1" />
          Back
        </Button>
        <Button onClick={() => nextStep()} variant="primary" className="next-btn mb-0">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step1;

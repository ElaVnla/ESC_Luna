import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HotelData } from '@/models/HotelDetailsApi'

const NavigateToBooking = () => {

    const [hotelData, setHotelData] = useState<HotelData>();
    
      useEffect(() => {
        const fetchHotel = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/hotels/diH7');
    
            const data = await response.json();
            setHotelData(data);
            console.log("Hotel data fetched successfully.")
            
          } catch (error) {
            console.error(error);
          }
          
        };
    
        fetchHotel();
      }, []);
      console.log(hotelData?.amenities);

    const CallHotelApiToStore = () =>{

    }

    

return (
    <Card className="border p-4">
        <CardBody className="p-0">
            <Row className="g-2 g-sm-4 mb-4">
                <Col md={4} xl={3}>
                    <Button variant="dark" className="mb-0" onClick={CallHotelApiToStore}>
                        Book Now
                    </Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
)
}

export default NavigateToBooking
// import { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { useForm, FormProvider } from 'react-hook-form';
// import MainGuestDetails from './MainGuestDetails';
// import GuestDetails from './GuestDetails';

// const EditGuestDetails = () => {
//   const methods = useForm({
//     defaultValues: {
//       customer: {
//         salutation: '',
//         first_name: '',
//         last_name: '',
//         billing_address: '',
//         email: '',
//         phone_number: '',
//       },
//       guests: [],
//     }
  
//   });

//   const { reset } = methods;

//   useEffect(() => {
//     const stored = sessionStorage.getItem('pendingBooking');
//     if (!stored) return;

//     const { bookingId } = JSON.parse(stored);

//     Promise.all([
//       fetch(`http://localhost:3000/customers/${bookingId}`).then((res) => res.json()),
//       fetch(`http://localhost:3000/guests/${bookingId}`).then((res) => res.json()),
//     ])
//       .then(([customer, guests]) => {
//         reset({
//           customer: {
//             salutation: customer.salutation,
//             first_name: customer.first_name,
//             last_name: customer.last_name,
//             billing_address: customer.billing_address || '',
//             email: customer.email,
//             phone_number: customer.phone_number,
//           },
//           guests: guests.map((g: any) => ({
//             salutation: g.salutation,
//             first_name: g.first_name,
//             last_name: g.last_name,
//             country: g.country,
//             email: g.email,
//             phone_number: g.phone_number,
//             guest_type: g.guest_type,
//           })),
//         });        
//       })
//       .catch((err) => console.error(' Failed to fetch data:', err));
//   }, [reset]);

//   const guestData = methods.getValues('guests');

//   return (
//     <FormProvider {...methods}>
//       <Container>
//         <div className="vstack gap-4">
//           <Row className="g-4">
//             <Col xs={12}>
//               <MainGuestDetails />
//               {guestData.length > 0 && <GuestDetails guests={guestData} />}
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </FormProvider>
//   );
// };

// export default EditGuestDetails;

import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import MainGuestDetails from './MainGuestDetails';
import GuestDetails from './GuestDetails';

const EditGuestDetails = () => {
  const methods = useFormContext(); // now using the parent context
  const { reset, getValues } = methods;

  useEffect(() => {
    const stored = sessionStorage.getItem('pendingBooking');
    if (!stored) return;

    const { bookingId } = JSON.parse(stored);

    Promise.all([
      fetch(`http://localhost:3000/customers/${bookingId}`).then((res) => res.json()),
      fetch(`http://localhost:3000/guests/${bookingId}`).then((res) => res.json()),
    ])
      .then(([customer, guests]) => {
        reset({
          customer: {
            salutation: customer.salutation,
            first_name: customer.first_name,
            last_name: customer.last_name,
            billing_address: customer.billing_address || '',
            email: customer.email,
            phone_number: customer.phone_number,
          },
          guests: guests.map((g: any) => ({
            salutation: g.salutation,
            first_name: g.first_name,
            last_name: g.last_name,
            country: g.country,
            email: g.email,
            phone_number: g.phone_number,
            guest_type: g.guest_type,
          })),
        });
      })
      .catch((err) => console.error('Failed to fetch data:', err));
  }, [reset]);

  const guestData = getValues('guests');

  return (
    <Container>
      <div className="vstack gap-4">
        <Row className="g-4">
          <Col xs={12}>
            <MainGuestDetails />
            {guestData.length > 0 && <GuestDetails guests={guestData} />}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EditGuestDetails;

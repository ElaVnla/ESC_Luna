/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest';


// mock a useToggle hook
vi.mock('@/hooks', async () => {
    // Use real react
  const React = await vi.importActual<typeof import('react')>('react');
  return {
    useToggle: () => {
      const [isOpen, setIsOpen] = React.useState(false);
      return {
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
      };
    },
  };
});

// intercept react router dom 
vi.mock("react-router-dom", async (importOriginal) => {
  const actual:any = await importOriginal();
  return {
    ...actual,
        Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
    BrowserRouter: actual.BrowserRouter,
  }
})

// Replace other components with dummies
vi.mock('@/views/hotels/HotelDetails/components/HotelMaps', () => ({
  default: () => <div data-testid="map-component" />,
}));
vi.mock('@/views/hotels/HotelDetails/components/HotelPolicies', () => ({
  default: () => <div data-testid="hotel-policies" />,
}));
vi.mock('@/views/hotels/HotelDetails/components/RoomOptions', () => ({
  default: () => <div data-testid="room-options" />,
}));

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import AboutHotel, { camelCaseToString, splitString } from '@/views/hotels/HotelDetails/components/AboutHotel';
import { BrowserRouter } from 'react-router-dom';
import { testHotel1, testHotel2} from './MockData';

const testDescription1 = testHotel1.description

const mainText1 = "Pamper yourself with a visit to the spa, which offers massages and facials. You're sure to appreciate the recreational amenities, including an outdoor pool, a steam room, and a fitness center. Additional features at this Colonial hotel include complimentary wireless internet access, concierge services, and gift shops/newsstands.\n\nTake advantage of the hotel's room service (during limited hours). Full breakfasts are available daily from 6:30 AM to 10:30 AM for a fee. Children aged 5 and younger eat free breakfast.\n\nFeatured amenities include express check-out, dry cleaning/laundry services, and a 24-hour front desk. Event facilities at this hotel consist of a conference center and 7 meeting rooms. Free self parking is available onsite.\n\nMake yourself at home in one of the 399 air-conditioned rooms featuring minibars and LCD televisions. Satellite television is provided for your entertainment. Bathrooms with separate bathtubs and showers feature deep soaking bathtubs and complimentary toiletries. Conveniences include phones, as well as laptop-compatible safes and desks.\n\n"

const distText1 = "\u003Cp\u003ERaffles Place - 0.2 km / 0.1 mi \u003Cbr /\u003E Asian Civilisations Museum - 0.3 km / 0.2 mi \u003Cbr /\u003E Merlion - 0.3 km / 0.2 mi \u003Cbr /\u003E Boat Quay - 0.4 km / 0.3 mi \u003Cbr /\u003E National Gallery Singapore - 0.5 km / 0.3 mi \u003Cbr /\u003E Esplanade Theatres - 0.6 km / 0.4 mi \u003Cbr /\u003E Former City Hall - 0.6 km / 0.4 mi \u003Cbr /\u003E Peninsula Plaza - 0.9 km / 0.5 mi \u003Cbr /\u003E Clarke Quay Central - 0.9 km / 0.5 mi \u003Cbr /\u003E Clarke Quay Mall - 0.9 km / 0.5 mi \u003Cbr /\u003E Fort Canning Park - 0.9 km / 0.6 mi \u003Cbr /\u003E Marina Square - 0.9 km / 0.6 mi \u003Cbr /\u003E Central Fire Station - 0.9 km / 0.6 mi \u003Cbr /\u003E Raffles City - 1 km / 0.6 mi \u003Cbr /\u003E Marina Bay Financial Centre - 1.1 km / 0.7 mi \u003Cbr /\u003E \u003C/p\u003E\u003Cp\u003E"

const extraText1 = "The nearest airports are:\u003Cbr /\u003ESeletar Airport (XSP) - 18.8 km / 11.7 mi\u003Cbr /\u003E Singapore Changi Airport (SIN) - 21.4 km / 13.3 mi\u003Cbr /\u003E Senai International Airport (JHB) - 68.8 km / 42.7 mi\u003Cbr /\u003E \u003C/p\u003E\u003Cp\u003EThe preferred airport for The Fullerton Hotel Singapore is Singapore Changi Airport (SIN). \u003C/p\u003E\n\nWith a stay at The Fullerton Hotel Singapore, you'll be centrally located in Singapore, within a 5-minute walk of Raffles Place and Merlion.  This luxury hotel is 0.7 mi (1.1 km) from Bugis Street Shopping District and 1.4 mi (2.2 km) from Marina Bay Sands Skypark.\n\nNear Marina Bay Sands Casino"

const testDescription2 = testHotel2.description

const mainText2 = "Make use of convenient amenities such as complimentary wireless internet access, concierge services, and babysitting (surcharge). This hotel also features wedding services and a banquet hall.\n\nFor lunch or dinner, stop by Sapordivino, a restaurant that specializes in local cuisine. Dining is also available at the coffee shop/cafe, and 24-hour room service is provided. Need to unwind? Take a break with a tasty beverage at one of the 2 bars/lounges. Buffet breakfasts are available daily for a fee.\n\nThis property has received its official star rating from the local rating authority.\n\nFeatured amenities include a 24-hour business center, dry cleaning/laundry services, and a 24-hour front desk. Planning an event in Siena? This hotel has 1076 square feet (100 square meters) of space consisting of conference space and 4 meeting rooms. A roundtrip airport shuttle is provided for a surcharge (available 24 hours).\n\nMake yourself at home in one of the 51 individually decorated guestrooms, featuring minibars and LCD televisions. 32-inch Smart televisions with satellite programming provide entertainment, while complimentary wireless internet access keeps you connected. Private bathrooms with shower/tub combinations feature designer toiletries and bidets. Conveniences include phones, as well as safes and desks.\n\n"

const distText2 = "\u003Cp\u003EBanca Monte dei Paschi di Siena - 0.1 km / 0.1 mi \u003Cbr /\u003E Palazzo Salimbeni - 0.1 km / 0.1 mi \u003Cbr /\u003E Piazza Salimbeni - 0.1 km / 0.1 mi \u003Cbr /\u003E Monte dei Paschi - 0.1 km / 0.1 mi \u003Cbr /\u003E Palazzo Tolomei - 0.1 km / 0.1 mi \u003Cbr /\u003E San Cristoforo Church - 0.1 km / 0.1 mi \u003Cbr /\u003E Piazza del Campo - 0.2 km / 0.1 mi \u003Cbr /\u003E Casa di Santa Caterina - 0.2 km / 0.2 mi \u003Cbr /\u003E Teatro dei Rozzi - 0.3 km / 0.2 mi \u003Cbr /\u003E Fonte Gaia - 0.3 km / 0.2 mi \u003Cbr /\u003E Loggia della Mercanzia - 0.3 km / 0.2 mi \u003Cbr /\u003E University of Siena - 0.3 km / 0.2 mi \u003Cbr /\u003E Siena State Archives - 0.3 km / 0.2 mi \u003Cbr /\u003E Museo delle Tavolette di Biccherna - 0.3 km / 0.2 mi \u003Cbr /\u003E Frateria di Padre Eligio - 0.3 km / 0.2 mi \u003Cbr /\u003E \u003C/p\u003E\u003Cp\u003E"

const extraText2 = "The preferred airport for Grand Hotel Continental Siena – Starhotels Collezione is Florence Airport, Peretola (FLR) - 83.3 km / 51.7 mi \u003C/p\u003E\n\nWith a stay at Grand Hotel Continental Siena – Starhotels Collezione, you'll be centrally located in Siena, just a 3-minute walk from Piazza del Campo and 6 minutes by foot from Siena Cathedral.  This family-friendly hotel is 0.4 mi (0.7 km) from Fortezza Medicea and 0.1 mi (0.1 km) from University of Siena.\n\nNear Frateria di Padre Eligio"



// Testing all required static data display are present
describe('AboutHotel Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Renders Hotel Descriptions', () => {
    render(
      <BrowserRouter>
        <AboutHotel hotelData={testHotel1}/>
      </BrowserRouter>
    );

    // // Title render
    // expect(screen.queryByText('The Fullerton Hotel Singapore')).toBeVisible();

    // About hotel description render 
    expect(screen.getByText('Main Highlights')).toBeInTheDocument();
    expect(screen.getByText(/Pamper yourself with a visit to the spa/i)).toBeInTheDocument();

    // Nearby places render
    expect(screen.getByText('Nearby Places')).toBeInTheDocument();
    expect(screen.getByText(/Marina Square - 0.9 km/i)).toBeInTheDocument();

    // Test Amenities render
    expect(screen.getByTestId('hotel-amenities-heading')).toBeVisible();
    expect(screen.getByText('Parking Garage')).toBeInTheDocument();
    expect(screen.getByText('Wellness')).toBeInTheDocument();
    expect(screen.getByText('95')).toBeInTheDocument();

  });

  it('renders hotel description and toggles see more/less', () => {
    render(
      <BrowserRouter>
        <AboutHotel hotelData={testHotel2}/>
      </BrowserRouter>
    );
    // Test Amenities heading does not render when data given has not ammenities
    expect(screen.queryByText('Amenities')).not.toBeInTheDocument();
  });
});

// Testing See More/Less Button and Correct expanded text for respective hotel data
describe.each([
  ['nearest airport data', testHotel1, /The nearest airports/i],
  ['preferred airport data', testHotel2, /The preferred airport/i],
])('AboutHotel airport section (%s)', (_, hotelData, expectedText) => {
  it('Correct airport section is revealed after See More is clicked', () => {
    render(
      <BrowserRouter>
        <AboutHotel hotelData={hotelData} />
      </BrowserRouter>
    );

    expect(screen.queryByText(/see less/i)).not.toBeInTheDocument();
    expect(screen.getByText(/see more/i)).toBeInTheDocument();

    // Airport section should not be visible initially
    expect(screen.queryByText(/The preferred airport/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/The nearest airports/i)).not.toBeInTheDocument();

    // Only "See more" button should be visible
    const toggleButton = screen.getByRole('button', { name: /see more/i });
    expect(toggleButton).toBeInTheDocument();
    expect(screen.queryByText(/see less/i)).not.toBeInTheDocument();
    
    // CLick Button to expand text
    fireEvent.click(toggleButton);

    // Correct airport section should now be visible
    expect(screen.getByText(expectedText)).toBeInTheDocument();

    //Only "See less" should be visible
    expect(screen.getByText(/see less/i)).toBeInTheDocument();
    expect(screen.queryByText(/see more/i)).not.toBeInTheDocument();
  });


  // Testing camelCase function
  describe('camelCaseToString function', () => {
    it('converts camelCase to normal string', () => {
      expect(camelCaseToString('freeWifi')).toBe('Free Wifi');
      expect(camelCaseToString('indoorPool')).toBe('Indoor Pool');
      expect(camelCaseToString('gym')).toBe('Gym');
    });
  });

  describe('splitString function', () => {
  it('correctly splits a hotel description into mainText, distText, and extraText', () => {

    const result1 = splitString(testDescription1);

    expect(result1.mainText).toBe(mainText1);
    expect(result1.distText).toBe(distText1);
    expect(result1.extraText).toBe(extraText1);

    const result2 = splitString(testDescription2);

    expect(result2.mainText).toBe(mainText2);
    expect(result2.distText).toBe(distText2);
    expect(result2.extraText).toBe(extraText2);
  });

});
});

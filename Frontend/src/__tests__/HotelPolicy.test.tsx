import { render, screen } from '@testing-library/react';
import HotelPolicies from '@/views/hotels/HotelDetails/components/HotelPolicies';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('HotelPolicies',() => {
    const mockpolicies ={
        displayFields: {
        special_check_in_instructions: 'Present ID at the front desk.',
        check_in_instructions: 'Check-in starts at 3 PM.',
        know_before_you_go: 'No pets allowed',
        fees_optional: 'Parking fee applies.',
        },
    };

    
    it('renders section header', () => {
        render(<MapComponent latitude={1.3521} longitude={103.8198} address="Test Address" />);
    });


});

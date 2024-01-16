import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarCard } from '@/components';

describe('CarCard component', () => {
  test('should render an image with the car make and model as its alt text', () => {
    const carData = {
      city_mpg: 25,
      class: 'suv',
      drive: 'FWD',
      fuel_type: 'Gas',
      make: 'Honda',
      model: 'Civic',
      transmission: 'Automatic',
      year: 2020,
    };

    render(<CarCard car={carData} />);

    const carMakeElement = screen.getByText(/Honda/i);
    expect(carMakeElement).toBeInTheDocument();
    const carModelElement = screen.getByText(/Civic/i);
    expect(carModelElement).toBeInTheDocument();
  });
});
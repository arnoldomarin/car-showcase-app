import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarCard } from '@/components';

describe('CarCard component', () => {
  test('should check that a car make and model are being displayed', () => {
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

  test('should check that a car make and model are being displayed', () => {
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
import React, { useEffect } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import CustomFilter from '../components/CustomFilter';
import router, { useRouter } from 'next/router';

describe('CustomFilter', () => {
  it('should render a Listbox.Options component', () => {
    const mockOptions = [
      { title: 'Option 1', value: 'Option 1' },
      { title: 'Option 2', value: 'Option 2' },
      { title: 'Option 3', value: 'Option 3' },
    ];

    render(<CustomFilter title="Filter" options={mockOptions} />);

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('should handle user interaction and update selected state', async () => {
    const mockOptions = [
      { title: 'Option 1', value: 'Option 1', selected: false },
      { title: 'Option 2', value: 'Option 2', selected: false },
      { title: 'Option 3', value: 'Option 3', selected: false },
    ];
  
    // Wait for the component to mount
    await act(() => {
      render(<CustomFilter title="Filter" options={mockOptions} />);
    });
  
    // Check if the router exists before accessing it
    useEffect(() => {
      const checkRouter = async () => {
        const router = useRouter();
        if (router) {
          // Router available, proceed with testing
          return;
        } else {
          setTimeout(() => {
            checkRouter();
          }, 10);
        }
      };
  
      checkRouter();
  
      if (!router) {
        throw new Error('Router not available');
      }
    }, []);
  
    // Simulate user interaction and check for state update
    act(() => {
      fireEvent.click(screen.getByText('Option 1'));
    });
  
    expect(CustomFilter.prototype.handleOptionClick).toHaveBeenCalledWith(mockOptions[0]);
    expect(screen.getByText('Option 1')).toHaveClass('font-bold');
  });
});
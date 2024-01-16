import { render, screen, fireEvent } from '@testing-library/react';
import CustomFilter from '../components/CustomFilter';

// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));

describe('CustomFilter component', () => {
  test('selected option should be reflected in the input value', () => {
    const options = [
        { title: 'Option 1', value: 'Option 1' },
        { title: 'Option 2', value: 'Option 2' },
        { title: 'Option 3', value: 'Option 3' },
      ];

    render(<CustomFilter title="Filter" options={options} />);
  
    const selectedOptionElement = screen.getByRole('span');
    fireEvent.click(selectedOptionElement);
  
    const inputElement = screen.getByRole('input') as HTMLInputElement;
    expect(inputElement.value).toBe('Option 2');
  });
});
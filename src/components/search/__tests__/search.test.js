import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search } from '..';
import '@testing-library/jest-dom/extend-expect';

Search

describe('Search component', () => {
  test('renders correctly', () => {
    const { getByLabelText } = render(<Search />);
    const inputElement = getByLabelText('Ingrese nombre o Simbol');
    expect(inputElement).toBeInTheDocument();
  });

  test('handles search input correctly', () => {
    const handleSearch = jest.fn();
    const { getByLabelText } = render(<Search searchQuery="" handleSearch={handleSearch} />);
    const inputElement = getByLabelText('Ingrese nombre o Simbol');

   
    fireEvent.change(inputElement, { target: { value: 'AAPL' } });

  
    expect(handleSearch).toHaveBeenCalledTimes(1);
	 expect(handleSearch).toHaveBeenCalledWith(expect.objectContaining({
		target: expect.objectContaining({
		  value: expect.any(String),
      }),
    }));
  });
});
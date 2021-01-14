import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

it('Renders correctly', () => {
    const { queryByPlaceholderText } = render(<SearchInput placeholder='search' handleChange={(event) => console.log(event.target.value)} />);
    expect(queryByPlaceholderText('search')).toBeTruthy();
});

describe("Input value", () => {
    it("Needs to update on change", () => {
        const { queryByPlaceholderText } = render(<SearchInput placeholder='search' handleChange={(event) => console.log(event.target.value)} />);
        const searchInput = queryByPlaceholderText('search');
        fireEvent.change(searchInput, { target: { value: "test" } });
        expect(searchInput.value).toBe("test");
    });
});
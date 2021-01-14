import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';

const data = {
    id: 5,
    name: "Zedkin Quickbuster",
    thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/1-1193219094.jpg",
    age: 273,
    weight: 38.742382,
    height: 91.54829,
    hair_color: "Red",
    professions: [
        "Cook"
    ],
    friends: [
        "Libalia Quickbooster",
        "Whitwright Mystwhistle"
    ]
}

it('Renders correctly', () => {
    const { getByText } = render(<Card {...data} />);
    expect(getByText('Zedkin Quickbuster')).toBeTruthy();
    expect(screen.getByTestId('age')).toBeInTheDocument();
    expect(screen.getByTestId('weight')).toBeInTheDocument();
    expect(screen.getByTestId('height')).toBeInTheDocument();
    expect(screen.getByTestId('professions')).toBeInTheDocument();
    expect(screen.getByTestId('friends')).toBeInTheDocument();
    expect(screen.getByTestId('hair-color')).toBeInTheDocument();
});
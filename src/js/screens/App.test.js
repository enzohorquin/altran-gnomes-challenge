import App from './App';
import axiosMock from 'axios';
import { render, screen, act, cleanup, waitFor } from '@testing-library/react';

afterEach(cleanup);
const mockData = [{
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
}];



it('Fetch and display data', async () => {
    axiosMock.get.mockResolvedValueOnce({
        data: {
            Brastlewark: mockData
        }
    })
    await act(async () => render(<App />));
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    await waitFor(async () => expect(screen.getByText('Zedkin Quickbuster')).toBeInTheDocument());
    expect(axiosMock.get).toHaveBeenCalledTimes(1);

});


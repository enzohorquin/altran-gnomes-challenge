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

const axiosMock = {
    get: jest.fn().mockResolvedValue({
        data: {
            Brastlewark: mockData
        }
    })
};

export default axiosMock;
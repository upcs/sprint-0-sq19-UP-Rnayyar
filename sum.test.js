//Source: https://auth0.com/blog/testing-react-applications-with-jest/

describe('JEST Testing', () => {
    test('Testing The Sum Function 1', () => {
        expect(1 + 2).toEqual(3);

    });
});

describe('JEST Testing', () => {
    test('Testing The Sum Function 2', () => {
         expect(-1 + 200).toEqual(199);

    });
});

// run: npm run test

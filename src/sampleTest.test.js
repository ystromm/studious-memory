const roman = require('./roman');

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

describe("roman numeral conversion", () => {
    it("i should be 1", () => {
        expect(roman("i")).toBe(1);
    });
});
  
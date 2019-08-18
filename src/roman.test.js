const roman = require('./roman')

describe("roman number conversion", () => {
   it("i should be 1", () => {
      expect(roman("i")).toBe(1);
   });

   it("ii should be 2", () => {
      expect(roman("ii")).toBe(2);
   });
});
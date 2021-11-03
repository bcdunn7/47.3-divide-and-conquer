const sortedFrequency = require("./sorted-frequency")

describe("#sortedFrequency", function(){
  it("returns the frequency", function(){
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
    expect(sortedFrequency([1, 2, 2, 2, 2, 3], 1)).toBe(1)
    expect(sortedFrequency([1, 2, 2, 2, 3, 4, 4, 4, 6, 7, 8, 9, 9, 9, 14, 14, 14, 14, 14], 2)).toBe(3)
    expect(sortedFrequency([1, 2, 2, 2, 3, 4, 4, 4, 6, 7, 8, 9, 9, 9, 14, 14, 14, 14, 14], 3)).toBe(1)
    expect(sortedFrequency([1, 2, 2, 2, 3, 4, 4, 4, 6, 7, 8, 9, 9, 9, 14, 14, 14, 14, 14], 8)).toBe(1)
    expect(sortedFrequency([1, 2, 2, 2, 3, 4, 4, 4, 6, 7, 8, 9, 9, 9, 14, 14, 14, 14, 14], 9)).toBe(3)
    expect(sortedFrequency([1, 2, 2, 2, 3, 4, 4, 4, 6, 7, 8, 9, 9, 9, 14, 14, 14, 14, 14], 14)).toBe(5)
  })
})

import { binaryToDecimal, add, subtract } from './functions'

describe('add', () => {
  it('should add a number to the array', () => {
    const result = add(1, 4)
    const expected = 5
    expect(result).toBe(expected)
  })

  it('should add a number to the array wrongly', () => {
    const result = add(1, 5)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('binaryToDecimal', () => {
  it('should add a number to the array', () => {
    const result = binaryToDecimal('1000')
    const expected = 8
    expect(result).toBe(expected)
  })
})

export const add = (...params) => {
  if (typeof(params[0]) === 'object') {
    return params[0].concat(params[1])
  }
  return params.reduce((a, b) => a+b, 0)
}

export const subtract = (x,y) => x-y

export const binaryToDecimal = (input) => {
  if (typeof(input) !== 'string') {
    return console.log('Must be a string')
  }
  return input
    .toString()
    .split('')
    .reverse()
    .map((item, index) => item * Math.pow(2, index))
    .reduce((a, b) => a + b)
}

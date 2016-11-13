// A file for importing some commonly used functions

// a silly little function to add a suffix to the end of a number (e.g. '21' to '21st')
export const numberSuffixer = (num) => {
  if (num.toString().match(/[^\d]/) || num.length>100000000000) {
    return num
  }

  const modulo100 = (num % 100).toString()

  switch (modulo100.substr(0, 1)) {
    case '1':
      if (num > 1 && modulo100.length>1) {
        return num + 'th'
      }
    default:
      switch (num % 10) {
        case 1:
          return num + 'st'
        case 2:
          return num + 'nd'
        case 3:
          return num + 'rd'
        default:
          return num + 'th'
      }
  }
}

export const sortByKey = (key) => (a, b) => {
  switch (true) {
    case a[key] < b[key]:
      return 1;
    case a[key] > b[key]:
      return -1;
    default:
      return 0;
  }
}

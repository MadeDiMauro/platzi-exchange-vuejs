import numeral from 'numeral'

const dollarFilter = function (value) {
  if (!value) {
    return '$ 0'
  }

  return numeral(value).format('($ 0.00a)')
}

const percentFilter = function (value) {
  if (!value) {
    return '0%'
  }

  //Parsea el número y limita a que se muestren dos decimales
  return `${Number(value).toFixed(2)}%`
}

export { dollarFilter, percentFilter }

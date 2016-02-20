function variance(values, n) {
  if(values.length > 1) {
    var v= 0
    var m= mean(values)
    for(var i= 0; i < values.length; i++) {
      v = v + Math.pow(parseFloat(values[i]) - m, 2)
    }
    return v / n
  }
  return 0
}

function stVars(values) {
  return variance(values, values.length - 1)
}

function stVarp(values) {
  return variance(values, values.length)
}

function stdev(values, n) {
  return Math.sqrt(variance(values, n))
}

function stStdevs(values) {
  return stdev(values, values.length - 1)
}

function stStdevp(values) {
  return stdev(values, values.length)
}

function cv(values, n) {
  return stdev(values, n) / mean(values)
}

function stCvs(values) {
  return cv(values, values.length - 1)
}

function stCvp(values) {
  return cv(values, values.length)
}

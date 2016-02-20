function variance(values, n) {
  var sum= 0.0
  var len= values.length
  for(var i= 0; i < len; i++) {
    sum += parseFloat(values[i])
  }
  
  if(len > 1) {
    var v= 0
    var mean= sum / len
    for(var j= 0; j < len; j++) {
      v = v + Math.pow(parseFloat(values[j]) - mean, 2)
    }
    return v / n
  }
  return 0
}

function mean(values) {
  var sum= 0
  var len= values.length
  for(var i= 0; i < len; i++) {
    sum += parseFloat(values[i])
  }
  return sum / len
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

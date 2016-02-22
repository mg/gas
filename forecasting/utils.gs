function sum(values) {
  var s= 0
  for(var i= 0; i < values.length; i++) {
    s += parseFloat(values[i])
  }
  return s
}

function mean(values) {
  if(values.length) {
    return sum(values) / values.length
  }
  return values
}

function fnFromPred(p) {
  if(p === '>=') {
    return function(a,b) { return a >= b }
  } else if(p === '>') {
    return function(a,b) { return a > b }
  }
  return function(a,b) { return a == b } 
}

function normalizeF(values) {
  // assumes last value in values is the new value
  var oldP= scm.sum(values.slice(0, values.length-1))
  var newP= scm.sum(values.slice(1))
  var nF= []
  for(var i= 1; i < values.length; i++) {
    nF.push(values[i] * oldP / newP)
  }
  return nF
}


function doubleExpSmoothMdodel(value, alpha, gamma, a, F, t, P) {
  var ahat= alpha * value / parseFloat(F[F.length-P]) + (1 - alpha)*a
  return ahat * parseFloat(F[F.length-P + t])
}

function holtWinterModel(value, alpha, beta, gamma, a, b, F, t, P) {
  var ahat= alpha * value / parseFloat(F[F.length-P]) + (1 - alpha)*(a+b)
  var bhat= beta * (ahat - a) + (1-beta) * b
  var Fhat= gamma * (value/ahat) + (1-gamma)*parseFloat(F[F.length-P])
  return (ahat+Fhat) * parseFloat(F[F.length-P+t])
}

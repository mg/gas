function levTrendExpSmoothModel(values, alpha, beta, a, b, t) {
  return levTrendExpSmoothDampModel(values, alpha, beta, 1, a, b, t) 
}

function levTrendExpSmoothDampModel(values, alpha, beta, phi, a, b, t) {
  if(values.length && values.length > 1) {
    var models= []
    var ahats= [a]
    var bhats= [b]
    for(var i= 0; i < values.length; i++) {
      var ahat= alpha * values[i] + (1 - alpha) * (ahats[i] + phi * bhats[i])
      var bhat= beta * (ahat - ahats[i]) + (1 - beta) * phi * bhats[i]
      models.push(ahat +  bhat)
      ahats.push(ahat)
      bhats.push(bhat)
    }
    return models
  } else {
    var ahat= alpha * values + (1 - alpha) * (a + b)
    var bhat= beta * (ahat - a) + (1 - beta) * b
    return ahat + t * bhat
  }
}

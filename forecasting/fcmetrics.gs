function fcMD(actuals, forecasts) {
  var sum= 0
  for(var i=0; i < actuals.length; i++) {
    sum += fcError(+actuals[i], +forecasts[i])
  }
  return sum / actuals.length
}

function fcMAD(actuals, forecasts) {
   var sum= 0
  for(var i=0; i < actuals.length; i++) {
    sum += fcAbsError(+actuals[i], +forecasts[i])
  }
  return sum / actuals.length
}

function fcMSE(actuals, forecasts) {
   var sum= 0
  for(var i=0; i < actuals.length; i++) {
    sum += fcSqrError(+actuals[i], +forecasts[i])
  }
  return sum / actuals.length
}

function fcMSESmooth(values, forecasts, omega, error) {
  var errors= []
  errors.push(parseFloat(error))
  for(var i= 1; i < values.length; i++) {
    errors.push(
      omega * Math.pow(parseFloat(values[i]) - parseFloat(forecasts[i]), 2) + (1 - omega) * errors[i-1]
    )
  }
  return errors.slice(1)
}

function fcRMSE(actuals, forecasts) {
  var sum= 0
  for(var i=0; i < actuals.length; i++) {
    sum += fcSqrError(+actuals[i], +forecasts[i])
  }
  return Math.sqrt(sum / actuals.length)
}

function fcMPE(actuals, forecasts) {
  var sum= 0
  for(var i=0; i < actuals.length; i++) {
    sum += fcPercentError(+actuals[i], +forecasts[i])
  }
  return sum / actuals.length
}

function fcMAPE(actuals, forecasts) {
  var sum= 0
  for(var i=0; i < actuals.length; i++) {
    sum += fcAbsPercentError(+actuals[i], +forecasts[i])
  }
  return sum / actuals.length
}

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

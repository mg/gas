function fcError(actual, forecast) {
  return actual - forecast
}

function fcErrors(actuals, forecasts) {
  if(actuals.length === 0) return 0
  if(actuals.length === 1) return fcError(actuals, forecasts)
  var models= []
  for(var i= 0; i < actuals.length; i++) {
    models.push(fcError(actuals.slice(i, i+1), forecasts.slice(i, i+1)))
  }
  return models
}  

function fcAbsError(actual, forecast) {
  return Math.abs(fcError(actual, forecast))
}

function fcAbsErrors(actuals, forecasts) {
  if(actuals.length === 0) return 0
  if(actuals.length === 1) return fcAbsError(actuals, forecasts)
  var models= []
  for(var i= 0; i < actuals.length; i++) {
    models.push(fcAbsError(actuals.slice(i, i+1), forecasts.slice(i, i+1)))
  }
  return models
}  

function fcPercentError(actual, forecast) {
  return fcError(actual, forecast)/actual
}

function fcPercentErrors(actuals, forecasts) {
  if(actuals.length === 0) return 0
  if(actuals.length === 1) return fcPercentError(actuals, forecasts)
  var models= []
  for(var i= 0; i < actuals.length; i++) {
    models.push(fcPercentError(actuals.slice(i, i+1), forecasts.slice(i, i+1)))
  }
  return models
}  

function fcAbsPercentError(actual, forecast) {
  return fcAbsError(actual, forecast)/actual
}

function fcAbsPercentErrors(actuals, forecasts) {
  if(actuals.length === 0) return 0
  if(actuals.length === 1) return fcAbsPercentError(actuals, forecasts)
  var models= []
  for(var i= 0; i < actuals.length; i++) {
    models.push(fcAbsPercentError(actuals.slice(i, i+1), forecasts.slice(i, i+1)))
  }
  return models
}  

function fcSqrError(actual, forecast) {
  return Math.pow(fcError(actual, forecast), 2)
}

function fcSqrErrors(actuals, forecasts) {
  if(actuals.length === 0) return 0
  if(actuals.length === 1) return fcSqrError(actuals, forecasts)
  var models= []
  for(var i= 0; i < actuals.length; i++) {
    models.push(fcSqrError(actuals.slice(i, i+1), forecasts.slice(i, i+1)))
  }
  return models
}  

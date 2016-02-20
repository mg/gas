function fcError(actual, forecast) {
  return actual - forecast
}

function fcAbsError(actual, forecast) {
  return Math.abs(fcError(actual, forecast))
}

function fcPercentError(actual, forecast) {
  return fcError(actual, forecast)/actual
}

function fcAbsPercentError(actual, forecast) {
  return fcAbsError(actual, forecast)/actual
}

function fcSqrError(actual, forecast) {
  return Math.pow(fcError(actual, forecast), 2)
}

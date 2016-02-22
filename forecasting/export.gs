// fc error functions
function scmFcErrors(actuals, forecasts) {
  return scm.fcErrors(actuals, forecasts)
}

function scmFcAbsErrors(actuals, forecasts) {
  return scm.fcAbsErrors(actuals, forecasts)
}

function scmFcPercentErrors(actuals, forecasts) {
  return scm.fcPercentErrors(actuals, forecasts)
}

function scmFcAbsPercentErrors(actuals, forecasts) {
  return scm.fcAbsPercentErrors(actuals, forecasts)
}

function scmFcSqrErrors(actuals, forecasts) {
  return scm.fcSqrErrors(actuals, forecasts)
}

// fc metrics
function scmFcMD(actuals, forecasts) {
  return scm.fcMD(actuals, forecasts)
}

function scmFcMAD(actuals, forecasts) {
  return scm.fcMAD(actuals, forecasts)
}

function scmFcMSE(actuals, forecasts) {
  return scm.fcMSE(actuals, forecasts)
}

function scmFcRMSE(actuals, forecasts) {
  return scm.fcRMSE(actuals, forecasts)
}

function scmFcMPE(actuals, forecasts) {
  return scm.fcMPE(actuals, forecasts)
}

function scmFcMAPE(actuals, forecasts) {
  return scm.fcMAPE(actuals, forecasts)
}

// cv
function scmStCvs(values) {
  return scm.stCvs(values)
}

function scmStCvp(values) {
  return scm.stCvp(values)
}

// level models
function scmNaiveModels(values) {
  return scm.naiveModels(values)
}

function scmCumulativeModels(values) {
  return scm.cumulativeModels(values)
}

function scmMaModels(values) {
  return scm.maModels(values)
}

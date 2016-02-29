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

function scmFcMSESmooth(values, forecasts, omega, error) {
  return scm.fcMSESmooth(values, forecasts, omega, error)
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

function scmLevExpSmoothModels(values, alpha) {
  return scm.levExpSmoothModels(values, alpha)
}

// level trend models
function scmLevTrendExpSmoothModel(values, alpha, beta, a, b, t) {
  return scm.levTrendExpSmoothModel(values, alpha, beta, a, b, t)
}

function scmLevTrendExpSmoothDampModel(values, alpha, beta, phi, a, b, t) {
  return scm.levTrendExpSmoothDampModel(values, alpha, beta, phi, a, b, t)
}

// level trend seasonality models
function scmNormalizeF(values) {
  return scm.normalizeF(values)
}

function scmDoubleExpSmoothMdodel(value, alpha, gamma, a, F, t, P) {
  return scm.doubleExpSmoothMdodel(value, alpha, gamma, a, F, t, P)
}

function scmHoltWinterModel(value, alpha, beta, gamma, a, b, F, t, P) {
  return scm.holtWinterModel(value, alpha, beta, gamma, a, b, F, t, P)
}

// abc segmentation
function scmAbcSegCumPercent(values, break1, break2) {
  return scm.abcSegCumPercent(values, break1, break2)
}

function scmAbcSegCumValue(values, break1, break2) {
  return scm.abcSegCumValue(values, break1, break2)
}

function scmAbcSegItemValue(values, break1, break2, inclusive) {
  return scm.abcSegItemValue(values, break1, break2, inclusive)
}

// rank
function scmRank(values) {
  return scm.rank(values)
}

function scmRankProduct(values1, values2) {
  return scm.rankByProduct(values1, values2)
}

function scmRankRatio(values1, values2) {
  return scm.rankByRatio(values1, values2)
}

function scmRankDiff(values1, values2) {
  return scm.rankByDiff(values1, values2)
}

function scmPercentProfitByPercentRank(values, percent, top) {
  return scm.percentProfitByPercentRank(values, percent, top)
}

function scmPercentGteThan(values, value) {
  return scm.percentThan(values, ">=", value)
}

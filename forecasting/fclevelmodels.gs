function naiveModel(value) {
  return value
}

function naiveModels(values) {
  return values
}

function cumulativeModel(values) {
  return mean(values)
}

function cumulativeModels(values) {
  var models= []
  for(var i= 0; i < values.length; i++) {
    models.push(cumulativeModel(values.slice(0, i+1)))
  }
  return models
}

function maModel(values) {
  return mean(values)
}

function maModels(values, m) {
  var models= []
  for(var i= 0; i < values.length - m + 1; i++) {
    models.push(maModel(values.slice(i, i+m)))
  }
  return models             
}  

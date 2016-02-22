function rank(values) {
  var items= segPrepare(values)
  for(var i= 0; i < items.length; i++) {
    items[i].rank=i+1
  }
  
  items.sort(function(a,b) {
    return a.idx - b.idx
  })

  var report= []
  for(var i= 0; i < items.length; i++) {
    report.push(items[i].rank)
  }
  return report
}

function rankByProduct(values1, values2) {
  var values= []
  for(var i= 0; i < values1.length; i++) {
    values.push(values1[i]*values2[i])
  }
  return rank(values)
}

function rankBySum(values1, values2) {
  var values= []
  for(var i= 0; i < values1.length; i++) {
    values.push(values1[i]+values2[i])
  }
  return rank(values)
}

function rankByRatio(values1, values2) {
  var values= []
  for(var i= 0; i < values1.length; i++) {
    values.push(values1[i]/values2[i])
  }
  return rank(values)
}

function rankByDiff(values1, values2) {
  var values= []
  for(var i= 0; i < values1.length; i++) {
    values.push(values1[i]-values2[i])
  }
  return rank(values)
}

function percentProfitByPercentRank(values, percent, top) {
  var items= segPrepare(values)
  var total= sum(values)
  
  var len= items.length * percent
  var totalProfits= 0
  for(var i= 0; i < len; i++) {
    var item
    if(top) {
      item= items[i]
    } else {
      item= items[items.length - 1 - i]
    }
    totalProfits += item.value
  }
  return totalProfits / total
}

function percentThan(values, pred, value) {
  var predFn= fnFromPred(pred)
  value= parseFloat(value)
  var count= 0
  for(var i=0; i < values.length; i++) {
    if(predFn(parseFloat(values[i]), value)) {
       count++
    }
  }
  return count / values.length
}

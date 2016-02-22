function segPrepare(values) {
  var items= []
  for(var i= 0; i < values.length; i++) {
    items.push({idx: i, value: values[i]})
  }
  
  items.sort(function(a,b) {
    return b.value - a.value
  })
  return items
}

function segReport(items) {
  items.sort(function(a,b) {
    return a.idx - b.idx
  })

  var report= []
  for(var i= 0; i < items.length; i++) {
    report.push(items[i].cat + ':' + items[i].catCount)
  }
  return report
}

function abcSegCumPercent(values, break1, break2) {
  var total= sum(values)
  var items= segPrepare(values)
  
  var cumPercent= 0
  var cat= 'A'
  var catCount= 0
  for(var i= 0; i < items.length; i++) {
    var item= items[i]
    cumPercent += item.value / total
    if(cat === 'A' && cumPercent > break1) {
      cat= 'B'
      catCount= 0
    } else if(cat === 'B' && cumPercent > break1 + break2) {
      cat= 'C'
      catCount= 0
    }
    catCount++
    item.cat= cat
    item.catCount= catCount
  }
  
  return segReport(items)
}

function abcSegCumValue(values, break1, break2) {
  var items= segPrepare(values)
  
  var cum= 0
  var cat= 'A'
  var catCount= 0
  for(var i= 0; i < items.length; i++) {
    var item= items[i]
    cum += parseFloat(item.value)
    if(cat === 'A' && cum > break1) {
      cat= 'B'
      catCount= 0
    } else if(cat === 'B' && cum > break1 + break2) {
      cat= 'C'
      catCount= 0
    }
    catCount++
    item.cat= cat
    item.catCount= catCount
  }
  
  return segReport(items)
}

function abcSegItemValue(values, break1, break2, inclusive) {
  var items= segPrepare(values)
  
  var cat= 'A'
  var catCount= 0
  for(var i= 0; i < items.length; i++) {
    var item= items[i]
    var itemValue= parseFloat(item.value)
    if(cat === 'A' && (inclusive ? itemValue <= break1 : itemValue < break1)) {
      cat= 'B'
      catCount= 0
    } else if(cat === 'B' && (inclusive ? itemValue <= break2 : itemValue < break2)) {
      cat= 'C'
      catCount= 0
    }
    catCount++
    item.cat= cat
    item.catCount= catCount
  }
  
  return segReport(items)
}

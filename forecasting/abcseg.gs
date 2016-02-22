function abcSeg(values, break1, break2) {
  var total= 0
  var items= []
  for(var i= 0; i < values.length; i++) {
    items.push({idx: i, value: values[i]})
    total += parseFloat(values[i])
  }
  
  items.sort(function(a,b) {
    return b.value - a.value
  })
  
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
  
  items.sort(function(a,b) {
    return a.idx - b.idx
  })
  
  var ret= []
  for(var i= 0; i < items.length; i++) {
    ret.push(items[i].cat + ':' + items[i].catCount)
  }
  return ret
}

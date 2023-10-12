export function mergeSortFunction(lines, lineHeightsList) {
  const sorted = mergeSort(lines);
  const heights = []

  for (let i=0; i<sorted.length; i++) {
    heights.push(sorted[i].clientHeight)
  }

  for (let i=0; i<sorted.length; i++) {
    lines[i].style.height = heights[i] + "px";
    lineHeightsList.getElementsByTagName("div")[i].innerHTML = heights[i];
  }
}

function mergeSort(lines) {
  if (lines.length<=1) {
    return lines;
  }

  const mid = Math.floor(lines.length/2);
  const left = []
  const right = []
  for (let i=0; i<mid; i++) {
    left.push(lines[i])
  }
  for (let i=mid; i<lines.length; i++) {
    right.push(lines[i])
  }

  return merge(mergeSort(left), mergeSort(right), lines)
}

function merge(left, right) {
  const array = []
  
  if (left && right) {
    while(left.length && right.length){
      if (left[0].clientHeight < right[0].clientHeight) {
        array.push(left.shift())
      } else {
        array.push(right.shift())
      }
    }
  }

  const fullarray = []

  if (array) {
    for (let i=0; i<array.length; i++) {
      fullarray.push(array[i])
    }
  }
  if (left) {
    for (let i=0; i<left.length; i++) {
      fullarray.push(left[i])
    }
  }
  if (right) {
    for (let i=0; i<right.length; i++) {
      fullarray.push(right[i])
    }
  } 

  return fullarray
}
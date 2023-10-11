export function quickSortFunction(lines, lineHeightsList, low = 0, high = lines.length - 1) {
  if (low < high) {
    const pivotIndex = partition(lines, lineHeightsList, low, high);

    setTimeout(() => {
      quickSortFunction(lines, lineHeightsList, low, pivotIndex - 1);
      quickSortFunction(lines, lineHeightsList, pivotIndex + 1, high);
    }, 100)

  }
}

function partition(lines, lineHeightsList, low, high) {
  const pivot = lines[high].clientHeight;
  let i = low - 1;


  for (let j = low; j < high; j++) {
    if (lines[j].clientHeight < pivot) {
      i++;
      swap(lines, lineHeightsList, i, j);
    }

  }

  swap(lines, lineHeightsList, i + 1, high);

  return i + 1;
}

function swap(lines, lineHeightsList, index1, index2) {
  const tempHeight = lines[index1].style.height;
  const tempInnerHTML = lineHeightsList.getElementsByTagName("div")[index1].innerHTML;

  lines[index1].style.height = lines[index2].style.height;
  lineHeightsList.getElementsByTagName("div")[index1].innerHTML = lineHeightsList.getElementsByTagName("div")[index2].innerHTML;

  lines[index2].style.height = tempHeight;
  lineHeightsList.getElementsByTagName("div")[index2].innerHTML = tempInnerHTML;
}
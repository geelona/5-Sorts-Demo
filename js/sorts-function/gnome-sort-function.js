export function gnomeSortFunction(lines, lineHeightsList) {
  const l = lines.length;
  let i = 1;


  function doSortStep() {
    if (i < l) {
      if (i > 0 && lines[i - 1].clientHeight > lines[i].clientHeight) {

        let tempLineHeightList = lineHeightsList.getElementsByTagName("div")[i].innerHTML;
        lineHeightsList.getElementsByTagName("div")[i].innerHTML = lineHeightsList.getElementsByTagName("div")[i-1].innerHTML;
        lineHeightsList.getElementsByTagName("div")[i-1].innerHTML = tempLineHeightList;

        let temp = lines[i].clientHeight;
        lines[i].style.height = lines[i-1].clientHeight + "px";
        lines[i-1].style.height = temp + "px";

        i--;
      } else {
        i++;
      }

      if (i < l) {
        setTimeout(doSortStep, 10 * i);
      }
    }
  }

  doSortStep();
}
export function bubbleSortFuction(lines, lineHeightsList) {

  for (let i=0; i<lines.length; i++) {

    setTimeout(() => {
      for (let j=0; j<lines.length - i - 1; j++) {

        if (lines[j].clientHeight > lines[j+1].clientHeight) {
  
          let tempLineHeightList = lineHeightsList.getElementsByTagName("div")[j].innerHTML;
          lineHeightsList.getElementsByTagName("div")[j].innerHTML = lineHeightsList.getElementsByTagName("div")[j+1].innerHTML;
          lineHeightsList.getElementsByTagName("div")[j+1].innerHTML = tempLineHeightList;

          let temp = lines[j].clientHeight;
          lines[j].style.height = lines[j+1].clientHeight + "px";
          lines[j+1].style.height = temp + "px";

        }
      }
    }, 100 * i);
  }
}
export function insertionSortFunction(lines, lineHeightsList) {

  for (let i=0; i<lines.length; i++) {
      
      setTimeout(() => {
        let key = lines[i].clientHeight;
        let keyLineHeightList = lineHeightsList.getElementsByTagName("div")[i].innerHTML;
        let j

        try {
          j = i - 1;
        }
        catch (e) {
          j = lines.length - 1;
        }

        try {
          for (j; j>=0, lines[j].clientHeight>key; j--) {
            lines[j+1].style.height = lines[j].clientHeight + "px";
            lineHeightsList.getElementsByTagName("div")[j+1].innerHTML = lineHeightsList.getElementsByTagName("div")[j].innerHTML;
          }
        }
        catch (e) {}

        lines[j+1].style.height = key + "px";
        lineHeightsList.getElementsByTagName("div")[j+1].innerHTML = keyLineHeightList;
      }, 100);
    }
}
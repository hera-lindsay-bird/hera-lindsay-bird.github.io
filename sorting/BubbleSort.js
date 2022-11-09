class BubbleSort {

  static sort() {
    let curr = list.slice();
    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (curr[j] > curr[j + 1]) {
          let tmp = curr[j];
          curr[j] = curr[j + 1];
          curr[j + 1] = tmp;
          steps.push([curr.slice(), "swap"]);
        } else {
          let comp = curr.slice();
          comp[j] = -1;
          comp[j + 1] = -1;
          //steps.push([comp.slice(), "comp"]);
        }
      }
    }
  }
}

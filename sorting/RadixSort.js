class RadixSort {

  static sort() {
    let curr = list.slice();
    let max = Math.max.apply(null, curr);
    let exp = 1;
    while (floor(max/exp) > 0) {
      this.countingSort(curr, exp);
      exp *= 10;
    }
  }

  static countingSort(curr, exp) {
    let temp = new Array(size);
    let count = new Array(10).fill(0);
    for (let i = 0; i < size; i++) {
      let idx = floor(curr[i]/exp % 10);
      count[idx]++;
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
    for (let i = size - 1; i >= 0; i--) {
    	let idx = floor(curr[i]/exp % 10);
      let comp = curr.slice();
      comp[count[idx] - 1] = -1;
      comp[i] = -1;
      steps.push([comp.slice(), "comp"]);
      temp[count[idx] - 1] = curr[i];
      count[idx]--;
    }
    for (let i = 0; i < size; i++) {
    	curr[i] = temp[i];
      steps.push([curr.slice(), "swap"]);
    }
  }
}

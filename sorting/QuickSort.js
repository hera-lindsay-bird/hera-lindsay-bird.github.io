class QuickSort {

  static sort() {
  	let curr = list.slice();
    this.quickSort(curr, 0, size - 1);
  }

  static quickSort(curr, low, high) {
  	if (low < high) {
    	let pi = this.partition(curr, low, high);
      this.quickSort(curr, low, pi - 1);
      this.quickSort(curr, pi + 1, high);
    }
  }

  static partition(curr, low, high) {
  	let pivot = curr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
    	if (curr[j] < pivot) {
      	i++;
        let tmp = curr[i];
        curr[i] = curr[j];
        curr[j] = tmp;
        steps.push([curr.slice(), "swap"]);
      } else {
      	let comp = curr.slice();
        comp[j] = -1;
        comp[high] = -1;
        steps.push([comp.slice(), "comp"]);
      }
    }
    let tmp = curr[i + 1];
    curr[i + 1] = curr[high];
    curr[high] = tmp;
    steps.push([curr.slice(), "swap"]);
    return i + 1;
  }
}

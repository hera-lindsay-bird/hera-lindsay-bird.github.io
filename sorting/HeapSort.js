class HeapSort {

	static sort() {
  	let curr = list.slice();
    for (let i = size/2 - 1; i >= 0; i--) {
    	this.heapify(curr, size, i);
    }
    for (let i = size - 1; i > 0; i--) {
    	let tmp = curr[0];
      curr[0] = curr[i];
      curr[i] = tmp;
      steps.push([curr.slice(), "swap"]);
      this.heapify(curr, i, 0);
    }
  }

  static heapify(curr, n, i) {
  	let max = i;
    let l = 2*i + 1;
    let r = 2*i + 2;
    if (l < n && curr[l] > curr[max])
    	max = l;
    if (r < n && curr[r] > curr[max])
    	max = r;
    if (max != i) {
    	let tmp = curr[i];
      curr[i] = curr[max];
      curr[max] = tmp;
      steps.push([curr.slice(), "swap"]);
      this.heapify(curr, n, max);
    } else {
    	let comp = curr.slice();
      comp[i] = -1;
      comp[max] = -1;
      steps.push([comp.slice(), "comp"]);
    }
  }
}

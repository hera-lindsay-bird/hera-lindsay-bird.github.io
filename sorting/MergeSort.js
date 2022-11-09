class MergeSort {

	static sort() {
  	let curr = list.slice();
    this.mergeSort(curr, 0, size - 1);
  }

  static mergeSort(curr, l, r) {
  	if (l < r) {
    	let mid = l + floor((r - l)/2);
      this.mergeSort(curr, l, mid);
      this.mergeSort(curr, mid + 1, r);
      this.merge(curr, l, mid, r);
    }
  }

  static merge(curr, l, mid, r) {
  	let low = mid - l + 1;
    let high = r - mid;
    let left = new Array(low);
    let right = new Array(high);
    let isFinal = (l == 0) && (r == size - 1);

    for (let i = 0; i < low; i++)
    	left[i] = curr[l + i];
    for (let j = 0; j < high; j++)
    	right[j] = curr[mid + j + 1];

    let i = 0, j = 0;
    let k = l;

    while (i < low && j < high) {
    	if (left[i] <= right[j]) {
      	if (isFinal) {
        	let comp = curr.slice();
          comp[k] = -1;
          steps.push([comp.slice(), "comp"]);
        }
        curr[k] = left[i];
        steps.push([curr.slice(), "swap"]);
        i++;
      } else {
      	if (isFinal) {
        	let comp = curr.slice();
          comp[k] = -1;
          steps.push([comp.slice(), "comp"]);
        }
        curr[k] = right[j];
        steps.push([curr.slice(), "swap"]);
        j++;
      }
      k++;
    }
    while (i < low) {
    	if (isFinal) {
        	let comp = curr.slice();
          comp[k] = -1;
          steps.push([comp.slice(), "comp"]);
        }
      curr[k] = left[i];
      steps.push([curr.slice(), "swap"]);
      i++;
      k++;
    }
    while (j < high) {
    	if (isFinal) {
        	let comp = curr.slice();
          comp[k] = -1;
          steps.push([comp.slice(), "comp"]);
        }
      curr[k] = right[j];
      steps.push([curr.slice(), "swap"]);
      j++;
      k++;
    }
  }
}

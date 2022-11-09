class InsertionSort {

	static sort() {
  	let curr = list.slice();
    for (let i = 1; i < size; i++) {
    	let key = curr[i];
      let j = i - 1;
      while (j >= 0 && curr[j] > key) {
      	curr[j + 1] = curr[j];
        steps.push([curr.slice(), "swap"]);
        j--;
      }
      curr[j + 1] = key;
      steps.push([curr.slice(), "swap"]);
    }
  }
}

class SelectionSort {

	static sort() {
  	let curr = list.slice();
    for (let i = 0; i < size - 1; i++) {
    	let min = i;
    	for (let j = i + 1; j < size; j++) {
      	if (curr[j] < curr[min]) {
        	let comp = curr.slice();
          comp[j] = -1;
          comp[min] = -1;
          steps.push([comp.slice(), "comp"]);
          min = j;
        }
      }
      let tmp = curr[min];
      curr[min] = curr[i];
      curr[i] = tmp;
      steps.push([curr.slice(), "swap"]);
    }
  }
}

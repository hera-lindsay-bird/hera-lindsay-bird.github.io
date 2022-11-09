class ShellSort {

	static sort() {
  	let curr = list.slice();
    let gap = floor(size/2);
    while (gap > 0) {
    	for (let i = gap; i < size; i++) {
      	let tmp = curr[i];
        let j = i;
        while (j >= gap && curr[j - gap] > tmp) {
        	let comp = curr.slice();
          comp[j] = -1;
          comp[j - gap] = -1;
          steps.push([comp.slice(), "comp"]);
          curr[j] = curr[j - gap];
          steps.push([curr.slice(), "swap"]);
          j -= gap;
        }
        curr[j] = tmp;
        steps.push([curr.slice(), "swap"]);
      }
      gap = floor(gap/2);
    }
  }
}

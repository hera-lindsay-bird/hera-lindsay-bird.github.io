class CountSort {

	static sort() {
  	let curr = list.slice();
    let max = Math.max.apply(null, curr);
    let min = Math.min.apply(null, curr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let temp = new Array(size);
    for (let i = 0; i < size; i++)
    	count[curr[i] - min]++;
    for (let i = 1; i < count.length; i++)
    	count[i] += count[i - 1];
    for (let i = size - 1; i >= 0; i--) {
    	let comp = curr.slice();
      comp[count[comp[i] - min] - 1] = -1;
      comp[i] = -1;
      steps.push([comp.slice(), "comp"]);
      temp[count[curr[i] - min] - 1] = curr[i];
      count[curr[i] - min]--;
    }
    for (let i = 0; i < size; i++) {
    	curr[i] = temp[i];
      steps.push([curr.slice(), "swap"]);
    }
  }
}

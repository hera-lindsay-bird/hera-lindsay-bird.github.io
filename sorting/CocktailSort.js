class CocktailSort {

	static sort() {
  	let curr = list.slice();
    this.swapped = true;
    let start = 0;
    let end = size;
    while (this.swapped) {
    	this.swapped = false;
      for (let i = start; i < end - 1; i++)
				this.swap(curr, i);
      if (!this.swapped)
      	break;
      this.swapped = false;
      end--;
      for (let i = end - 1; i >= start; i--)
      	this.swap(curr, i);
      start++;
    }
  }

  static swap(curr, idx) {
  	if (curr[idx] > curr[idx + 1]) {
      let tmp = curr[idx];
      curr[idx] = curr[idx + 1];
      curr[idx + 1] = tmp;
      this.swapped = true;
      steps.push([curr.slice(), "swap"]);
    } else {
      let comp = curr.slice();
      comp[idx] = -1;
      comp[idx + 1] = -1;
      //steps.push([comp.slice(), "comp"]);
    }
  }
}

var size = 180;      // size of list
var list = [];       // list of hues
var steps = [];      // list of iterations
var swaps = 0;       // number of swaps
var comparisons = 0; // number of comparisons

var running = false;
var shuffled = false;

const delay = 10;
var timeoutIDs = [];

var sortingTypes = ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Heap Sort', 'Merge Sort', 'Quick Sort', 'Count Sort', 'Radix Sort', 'Shell Sort', 'Cocktail Sort'];
//var sortingTypes = ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Heap Sort', 'Merge Sort', 'Quick Sort', 'Count Sort', 'Radix Sort', 'Shell Sort', 'Cocktail Shaker Sort', 'Bitonic Sort', 'Intro Sort (C++ std::sort)', 'Tim Sort (Java Collections.sort)', 'Gnome Sort', 'Stooge Sort', 'Zip Sort'];

// p5 setup
function setup() {
	createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textSize(18);
	init();
  noLoop();
}

// GUI parameters
var settings = {
	elements: 180,
  sortType: 'Quick Sort',
  sort: function() {
  	triggerSort(this.sortType);
  },
  shuffle: function() {
    running = false;
    shuffled = false;
    reset();
  },
  reset: function() {
    reset();
    init();
    redraw();
  }
};

// dat gui configuration
var gui = new dat.gui.GUI();
gui.add(settings, 'elements', 10, 360).step(10).name("# Elements:").onChange(function (value) {
  size = settings.elements;
 shuffled = false;
  init();
  reset();
});
gui.add(settings, 'sortType', sortingTypes).name("Sorting Type:");
gui.add(settings, 'shuffle').name("Shuffle");
gui.add(settings, 'sort').name("Sort!");

// animation loop
function draw() {
  background(0);
  stroke(0);
  fill(100);
  if (comparisons > 0) {
  	text("swaps: " + swaps, 20, height/10);
    text("comparisons: " + comparisons, 20, height/10 + 20);
  }
  drawWheel(width/2, height/2, width/5);
}

// draw wheel based on array state
function drawWheel(x, y, r) {
	let arc = 2*PI*r / size;
  translate(x, y);
  for (let i = 0; i < size; i++) {
  	strokeWeight(1);
    if (list[i] == -1) {
    	strokeWeight(3);
      stroke(0, 0, 0);
      fill(0, 0, 100);
    }
  	else {
    	stroke(list[i]*360/size, 100, 100);
      fill(list[i]*360/size, 100, 100);
    }
    rotate(2*PI/size);
    triangle(0, 0, r, -arc/2 - 0.5, r, arc/2 + 0.5);
  }
}

// init list with size
function init() {
	list = [];
  for (let i = 0; i < size; i++)
  	list[i] = i;
}

// reset animation and shuffle list
function reset() {
  running = false;
  for (let i = 0; i < timeoutIDs.length; i++) {
  	clearTimeout(timeoutIDs[i]);
  }
  timeoutIDs = [];
	swaps = 0;
  comparisons = 0;
	steps = [];
  if (!shuffled) {
  	if (list.includes(-1))
    	init();
  	list = shuffle(list);
  }
  shuffled = true;
  redraw();
}

// loop over list to update display
function display() {
	running = true;
  let i = 0;
  while (running && i < steps.length) {
  	let idx = i;
    let timeoutID = setTimeout(function() {
      list = steps[idx][0].slice();
      if (steps[idx][1] == "swap")
      	swaps++;
      comparisons++;
      redraw();
    }, delay * (idx + 1));
    timeoutIDs.push(timeoutID);
    i++;
  }
  running = false;
  shuffled = false;
}

// trigger sorting algorithms
function triggerSort(type) {
  reset();
  console.log(`Executing ${type}...`);
  switch (type) {
  	case 'Bubble Sort':
    	BubbleSort.sort();
      break;
    case 'Insertion Sort':
    	InsertionSort.sort();
      break;
    case 'Selection Sort':
    	SelectionSort.sort();
      break;
    case 'Heap Sort':
    	HeapSort.sort();
      break;
    case 'Merge Sort':
    	MergeSort.sort();
      break;
    case 'Quick Sort':
    	QuickSort.sort();
    	break;
    case 'Count Sort':
    	CountSort.sort();
      break;
    case 'Radix Sort':
    	RadixSort.sort();
      break;
    case 'Shell Sort':
    	ShellSort.sort();
      break;
    case 'Cocktail Sort':
    	CocktailSort.sort();
      break;
    default:
    	console.warn(`Sorry, ${type} is not yet supported.`);
  }
  display();
}

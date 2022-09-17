// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  one(), two(), three(), makeVisible()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one() {
  // First, we have to find the element:
  let one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE

function two() {
  let two = document.getElementById('two')
  two.classList.add('green')
}

// CREATE FUNCTION three HERE

function three() {
  let three = document.getElementById('three')
  three.classList.add('pink')
}

// CREATE FUNCTION makeVisible HERE
function makeVisible() {
  let makeVisible = document.getElementsByClassName('invisible')[0]
  makeVisible.classList.add('visible')
}

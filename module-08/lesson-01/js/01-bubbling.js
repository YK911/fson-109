/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

parent.addEventListener('click', onParentClick);
child.addEventListener('click', onChildClick);
innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(event) {
  console.log('Click on PARENT elem');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
  console.log('\n');
}
function onChildClick(event) {
  console.log('Click on CHILD elem');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
  console.log('\n');
}
function onInnerChildClick(event) {
  console.log('Click on INNER CHILD elem');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
  console.log('\n');
}

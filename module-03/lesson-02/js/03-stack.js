// const globalValue = 123;

/**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  for (let i = 0; i < 5; i++) {
    if (i === 1) {
      fnB();
    }

    console.log('fnA execution');
  }
}

function fnB() {
  for (let i = 0; i < 3; i++) {
    console.log('fnB execution');
  }
}

function fnC() {
  console.log('fnC execution');
}

// console.log('Before fnA execution');
// fnA();
// console.log('After fnA execution');

// console.log('Before fnB execution');
// fnB();
// console.log('After fnB execution');

// console.log('Before fnC execution');
// fnC();
// console.log('After fnC execution');

function recursive(n) {
  if (n === 5) {
    return;
  }
  n += 1;
  recursive(n);
}

// recursive(1);

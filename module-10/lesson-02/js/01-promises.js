/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"
// function executor(resolve, reject) {
//   resolve('Проміс виконався ✅');
// }

// const promise1 = new Promise(executor);
// console.log('promise1:', promise1);

let loading = 'Loading...';

const promise = new Promise((resolve, reject) => {
  const isSuccess = Math.random() > 0.5;
  console.log('isSuccess:', isSuccess);
  console.log(loading);

  setTimeout(() => {
    if (isSuccess) {
      resolve('Проміс виконався успішно');
    }
    reject('Проміс виконався  з помилкою');
  }, 2000);
});
console.log(promise);

promise
  .then(onSuccessOne)
  .then(onSuccessTwo)
  .catch(onError)
  .finally(() => {
    console.log('Finished loading 🎉');
  });

function onSuccessOne(params) {
  console.log(params);
  return 10;
}
function onSuccessTwo(str) {
  console.log(str);
  return 'String';
}

function onError(error) {
  console.log(error);
}

// const promise3 = new Promise(function (resolve, reject) {
//   reject({ error: 'Проміс виконався з помилкою', status: 'failed' });
// });
// console.log('promise3:', promise3);

/**
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

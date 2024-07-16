/**
 * Оператор switch
 */

// const username = 'Mango';
// const username = 'Neptun';

// switch (username) {
//   case 'Mango': // username === 'Mango' -> false
//     console.log('Hello Mango');
//     break;
//   case 'Poly': //  username === 'Poly' -> false
//     console.log('Hello Poly');
//     break;
//   case 'Jupiter': //  username === 'Jupiter' -> false
//     console.log('Hello Jupiter');
//     break;
//   default:
//     console.log(`Hello Dude!`);
// }

// const number = 91;

// switch (number) {
//   case 91:
//   case 122:
//     console.log('Cold ❄️');
//     break;

//   case 9:
//   case 12:
//     console.log('Correct number ✅');
//     break;

//   case 6:
//   case 8:
//     console.log('Hot 🔥');
//     break;
//   default:
//     console.log('Incorrect number ❌');
// }

/**
 * TODO: Виконай рефакторинг коду задачі використовуючи switch.
 *
 * TODO: Якщо до дедлайну 0 днів - виведи рядок "Today"
 * TODO: Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * TODO: Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * TODO: Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0: // daysUntilDeadline === 0
//     console.log('Today');
//     break;
//   case 1: // daysUntilDeadline === 1
//     console.log('Tomorrow');
//     break;
//   case 2: // daysUntilDeadline === 2
//     console.log('Overmorrow');
//     break;
//   default:
//     console.log('Date in the future');
// }

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

/**
 * TODO: Напиши скрипт вибору опції доставки товару.
 * TODO: Опція зберігається в змінній option:
 * TODO  == 1 - самовивіз, 2 - курʼєр, 3 - пошта ==
 *
 * TODO: В змінну message запиши повідомлення залежно від опції.
 * TODO: - 'Ви зможете отримати товар завтра з 12:00 в нашому офісі'
 * TODO: - 'Курʼєр доставить замовлення завтра з 9:00 до 18:00'
 * TODO: - 'Посилка буде відправлена сьогодні'
 * TODO: - 'Вам зателефонує менеджер'
 */

const option = 3;
let message;

switch (option) {
  case 1:
    message = 'Ви зможете отримати товар завтра з 12:00 в нашому офісі';
    break;
  case 2:
    message = 'Курʼєр доставить замовлення завтра з 9:00 до 18:00';
    break;
  case 3:
    message = 'Посилка буде відправлена сьогодні';
    break;
  default:
    message = 'Вам зателефонує менеджер';
}

// console.log(message);

/**
 * TODO: Напиши скрипт, який повідомляє користувача про підтримку браузера.
 * TODO: Назва браузера зберігається в змінній browser
 * TODO: Доступні браузери для підтримки: Chrome / Edge / Firefox / Safari / Opera
 *
 * TODO: В змінну result записати повідомлення:
 * TODO: браузер Chrome                  -> 'Це найпопулярніший браузер'
 * TODO: браузер Edge                    -> 'У тебе браузер від Microsoft'
 * TODO: браузер Firefox, Safari, Opera  -> 'Ми також підтримуємо цей браузер'
 * TODO: інші браузери                   -> 'Даний браузер не підтримується'
 */

const browser = 'Opera';
let result;

switch (browser) {
  case 'Chrome':
    result = 'Це найпопулярніший браузер';
    break;
  case 'Edge':
    result = 'У тебе браузер від Microsoft';
    break;
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    result = 'Ми також підтримуємо цей браузер';
    break;
  default:
    result = 'Даний браузер не підтримується';
}

// console.log(result);

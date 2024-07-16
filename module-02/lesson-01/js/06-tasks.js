/**
 * TODO: Напиши скрипт перевірки підписки користувача при доступі до контента
 * TODO: Є три типа підписки: free, pro і vip.
 * TODO: Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = 'pro';
//                   true            false
const hasAccess = sub === 'pro' || sub === 'vip';
//                    true              true
// const hasAccess = sub === 'pro' && sub === 'vip';
// console.log('Does user get access?', hasAccess);

/**
 * TODO: Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * TODO: Для цього, користувач має бути:
 * TODO: - другом
 * TODO: - онлайн
 * TODO: - без режима не турбувати
 */

const isFriend = true;
const isOnline = true;
const isDnd = false; // Do Not Disturb

//                    true        true      false
const canOpenChat = isFriend && isOnline && !isDnd;
// console.log('Можна відкрити чат? ', canOpenChat ? 'Так' : 'Ні');

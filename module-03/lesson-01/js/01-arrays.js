/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */
// const someArr = [1, 2, 3, 'qwe', 'asd', 'zxc', true, false];
// console.table(someArr);

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
courses.length = 2;
console.table(courses);
courses.length = 5;
console.table(courses);
// const reactCourse = courses[3];
// // console.log('reactCourse:', reactCourse);

// courses[4] = 'Python';
// courses[5] = 'Redis';
// // courses[20] = 'Vue';

// const coursesLength = courses.length;
// console.log('coursesLength:', coursesLength);
// const lastCoursesIndex = coursesLength - 1;
// console.log('lastCoursesIndex:', lastCoursesIndex);

// console.log(courses[coursesLength]);
// console.log(courses[lastCoursesIndex]);

// const result = courses[courses.length - 1];
// console.log('result:', result);

// const lastIdx = courses.length - 1;
// const result1 = courses[lastIdx];
// console.log('result1:', result1);

// console.log(courses[10]);

// console.log(typeof courses);
// const isArray = Array.isArray(courses);
// console.log('isArray:', isArray);
// const isArray1 = Array.isArray(1);
// console.log('isArray1:', isArray1);

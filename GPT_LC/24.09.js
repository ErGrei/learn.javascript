// У тебя есть объект, который содержит информацию о пользователях и их покупках:

const users = {
  user1: { name: "John", age: 28, purchases: ["book", "pen", "laptop"] },
  user2: { name: "Anna", age: 22, purchases: ["notebook", "phone"] },
  user3: { name: "Mike", age: 32, purchases: ["tablet"] },
};
// Твоя задача — написать функцию getAllPurchases(users), которая принимает этот объект и возвращает массив всех покупок всех пользователей, т.е. итог должен быть:

["book", "pen", "laptop", "notebook", "phone", "tablet"];

const getAllPurchases = (users) => {
  const purchases = [];
  Object.values(users).forEach((user) => {
    purchases.push(...user.purchases);
    console.log(purchases);
  });
  return purchases;
};
// console.log(getAllPurchases(users));

// У тебя есть объект, представляющий данные о студентах и их оценках за экзамены:

const students = {
  student1: { name: "Alice", grades: [85, 92, 78] },
  student2: { name: "Bob", grades: [79, 85, 88] },
  student3: { name: "Charlie", grades: [90, 87, 95] },
};
// Твоя задача — написать функцию getAverageGrades(students), которая принимает этот объект и возвращает новый объект, где каждому студенту соответствует его средняя оценка.

// {
//   Alice: 85,
//   Bob: 84,
//   Charlie: 90.67
// }

const getAverageGrades = (students) => {
  const averageGrades = (arr) => {
    return arr.reduce((acc, grad) => {
      acc += grad / arr.length;
      return +acc.toFixed(2);
    }, 0);
  };

  return Object.values(students).reduce((acc, student) => {
    acc[student.name] = averageGrades(student.grades);
    return acc;
  }, {});
};

// console.log(getAverageGrades(students));

// У тебя есть массив объектов, представляющих заказы в интернет-магазине:

const orders = [
  {
    orderId: 1,
    items: [
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 50 },
    ],
  },
  { orderId: 2, items: [{ name: "Phone", price: 500 }] },
  {
    orderId: 3,
    items: [
      { name: "Monitor", price: 300 },
      { name: "Keyboard", price: 100 },
      { name: "USB Cable", price: 20 },
    ],
  },
];

// Твоя задача — написать функцию getTotalOrderAmounts(orders), которая принимает массив заказов и возвращает массив объектов, где каждому заказу соответствует его полная сумма.

[
  { orderId: 1, totalAmount: 1050 },
  { orderId: 2, totalAmount: 500 },
  { orderId: 3, totalAmount: 420 },
];

const getTotalOrderAmounts = (orders) => {
  const totalAmount = (arr) => arr.reduce((acc, item) => acc + item.price, 0);

  return orders.map((item) => {
    return { orderId: item.orderId, totalAmount: totalAmount(item.items) };
  });
};

console.log(getTotalOrderAmounts(orders));
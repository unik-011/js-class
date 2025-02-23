// compare the 2 arrays and find common food if any

// const foodA = ["Noodle", "Pasta", "Ice-cream"];
// const foodB = ["Fries", "Ice-cream", "Pizza"];

// const commonFood = (arr1 = [], arr2 = []) =>
//   foodA.filter((item) => foodB.includes(item));
// console.log(commonFood);

// Is allowed in boolean
// const userRoles = ["users", "manager", "guests"];
// const pageRoles = ["admin", "manager"];

// const access = userRoles.some((roles) => pageRoles.includes(roles));
// console.log(access);

// pagination
const page = 2;
const limit = 2;
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paginate = (page = 1, limit = 2) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  const result = data.slice(start, end);
  return { users: result, total: data.length, page, limit };
};

// complex data type
// object, array, data

// 1. multiple datatypes

// const student = {
//   name: "unique bhandari",
//   address: "pepsicola",
//   dob: "2004",
//   ageOf: () => {
//     return 2025 - student.dob;
//   },
// };

// console.log(student.ageOf());

// student.dob = "2006";
// console.log(student);

// delete student.address;
// console.log(student);

const product = {
  name: "headphones",
  price: 83.7,
};

const applyDiscount = (product) => {
  product.discountedPrice = (
    product.price > 100
      ? product.price - 0.1 * product.price
      : product.price - 0.07 * product.price
  ).toFixed(2);
  return product;
};

const updatedProduct = applyDiscount(product);
console.log(updatedProduct);

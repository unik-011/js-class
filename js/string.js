// // js to convert string to lowercase
// // const toLower = (text="") => string(text).toLower();

// // write a js function to convert

// const toShort = (text = "") =>
//   String(text).length > 9
//     ? String(text).slice(0, 12).concat("...")
//     : String(text);
// console.log(toShort("Ram is a studrnt in broadway"));

// // write a js function to convert text to slug

// const slung = (text = "") =>
//   String(text).toLocaleLowerCase().replaceAll(" ", "-");
// console.log(slung("Raktim is a Teacher"));

// // Write a function to check if the phone number is mobile number or not
// // 10 digits
// // phone number starts with 98

// const PhNumber = (number = "") =>
//   +number.length === 10 && +number.startsWith("98") ?

// write a js function to create a propercase
// "raktim shrestha" = "Raktim Shrestha"

const properCase = (data = "") => {
  const text = String(data).toLowerCase();
  let result = "";
  let check = true;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (check) {
      result += char.toUpperCase();
      check = false;
    } else if (char === "") {
      result += char;
      check = true;
    } else {
      result += char;
    }
  }
  return result;
};

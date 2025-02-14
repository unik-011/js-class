const pi = 3.14;

function area(radius) {
  const answer = pi * radius * radius;
  return answer;
}

const rad = +prompt("enter the radius of circle");

const result = area(rad);
alert(result);

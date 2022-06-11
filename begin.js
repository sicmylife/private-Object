/*
  WRITE YOUR SOLUTION HERE
*/


const username = Symbol("username")
const password =  Symbol("password")

const user = {
  [username]:"Daniel",
  [password]: "123456",
  age:27
};

console.log(user.password)
console.log(user.username)
console.log(user.age)

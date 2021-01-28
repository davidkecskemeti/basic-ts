// const person = {
//   name: "Maximilian",
//   age: 30,
// };

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);

if (person.role === Role.ADMIN) {
  console.log("Person is ADMIN");
}

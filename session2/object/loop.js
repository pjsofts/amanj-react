let person = {
    name:"pouria",
    lastname: "jahandideh",
    age: 32,
    city: "tehran",
    job: "programmer"
}
// for (let key of Object.keys(person)){
//     console.log("key, value is", key, person[key]);
// }

// for (let value of Object.values(person)){
//     console.log("value is", value);
// }
for (let [key, value] of Object.entries(person)){
    console.log("key:", key, "value:", value)
}

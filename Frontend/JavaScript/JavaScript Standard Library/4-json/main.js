const person = {
    firstName: "Raj",
    lastName: "Alam",
    address: {
        country: "Indonesia",
        city: "South Tangerang"
    },
    hobbies: ["Coding", "Playin' Games", "Watchin' Anime"]
}

// static method pada json
const json = JSON.stringify(person);
console.log(json)

const jsonObject = JSON.parse(json);
console.log(jsonObject)
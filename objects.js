// Working with objects.
const vehicle = {
    "wheels": 4,
    'doors': 3,
    'engine': function () {
        return "Vroooom!"
    }
}

const tipper = Object.create(vehicle)
tipper.seats = 3

console.log(tipper.wheels)

// looping through objects.
for (let i in vehicle) {
    console.log(vehicle[i])
}
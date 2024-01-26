let cars = [
    {
        color: "purple",
        type: "minivan",
        capacity: 7
    },
    {
        color: "red",
        type: "station wagon",
        capacity: 5
    },
    {
        color: "yellow",
        type: "minivan",
        capacity: 9,
    },
    {
        color: "green",
        type: "smart",
        capacity: 2,

    },
];

let posti = parseInt(prompt('quanti passeggeri siete?'));


const maxCars = cars.filter((car) => {
    return posti <= car.capacity;
});

let macchina = maxCars[0];

const primaMacchinaUtile = maxCars.forEach((car) => {
    if (macchina.capacity > car.capacity) {
        macchina = car;
    }

});



console.log(macchina);
//creare un arrey di oggetti  che descrive una bici e dare nome e peso

const bicycles = [
    {
        name: 'corsa',
        weight: 9,
    },
    {
        name: 'mtBike',
        weight: 10,
    },
    {
        name: 'ibrida',
        weight: 12,
    }, {
        name: 'pieghevole',
        weight: 11,
    }, {
        name: 'graziella',
        weight: 7,
    }, {
        name: 'bmx',
        weight: 4,
    }, {
        name: 'freeStyle',
        weight: 6,
    },
];
// console.table(bicycles);

//stampare in console la bici con peso < usando destructrng e tmplt lit
let [ligtherBike] = bicycles;

bicycles.forEach((bike) => {
    if (bike.weight < ligtherBike.weight) ligtherBike = bike;
});
console.log(ligtherBike)





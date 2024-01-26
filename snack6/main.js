// Snack 6: avete a disposizione un elenco di frutti per fare una macedonia. Scegliete 2, 3 o 4 in modo casuale e calcolate il prezzo della macedonia:

const products = [
    { title: 'Mela', price: 2.30 },
    { title: 'Banana', price: 1.50 },
    { title: 'Mango', price: 2 },
    { title: 'Pesca', price: 1.80 },
    { title: 'Pera', price: 1.50 },
    { title: 'Arancia', price: 2.20 },
];

let frutta = prompt('quanta frutta vuoi in macedonia?');
let totalPrice = 0;
for (let i = 0; i < frutta; i++) {
    let index = Math.floor(Math.random() * (products.length - 0));
    totalPrice = totalPrice + products[index].price;
}

console.log('la tua macedonia costa ' + totalPrice + '' + '€');
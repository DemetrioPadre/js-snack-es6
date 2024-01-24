const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];

// console.log(vips);

// # MAP ritorniamo il MAP modificato con l aggiunta del segnaposto random e posto occupato

const listVip = vips.map((vip, numeroTavolo) => {
    let listVip = {
        nomeTavolo: 'tavoloVip',
        vip: vip,
        numeroTavolo: numeroTavolo + 1

    };
    return listVip;

});

console.table(listVip);
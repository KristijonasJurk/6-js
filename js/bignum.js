function isrinktiRaides(list, step) {
    // if (typeof list !== 'string') {
    //     console.log('Pirmasis kintamasis yra netinkamo tipo.');
    // }
    // if (list.length === 0) {
    //     return 'Pirmoji kintamojo reiksme yra netinkamo dydzio.'
    // }
    // if (list.length > 100) {
    //     return 'Pirmoji kintamojo reiksme yra netinkamo dydzio.'
    // }
    // if (typeof step !== 'number') {
    //     return 'Antrasis kintamasis yra netinkamo tipo.'
    // }
    // if (step < 0) {
    //     return 'Antrasis kintamasis turi buti didesnis uz nuli'
    // }
    // if (step>list.length) {
    //     return 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi'
    // }
    let ats = '';
    for (let i = 0; i < list.length; i++) {
        const letter = list[i];

        if (i%step === step - 1) {
            ats += letter;
        }
        
    }
    return ats;
}

console.log(isrinktiRaides( 'abcdefg', 2 ));
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );
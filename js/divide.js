// dalikliai
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.

const nuo = -18;
const iki = 18;
const daliklis = 7;

let count = 0;

for (let i=nuo; i<=iki; i++) {
    console.log(i/ daliklis)
    if (i % daliklis === 0) {
        count++;
    }
}
console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`);

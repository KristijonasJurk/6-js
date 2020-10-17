// turim geliu soda
// plotas: 20kv.m.
// pradinis geliu uzimamas plotas: 1 kv.m.
// geliu dauginimo greitis: 1 (kasmet po 1 vaika)
// per kiek metu pasidengs visa teritorija gelemis?

function gele(plotas, geles, greitis) {
    let pots = geles;
    let year = 1;
    while (pots < plotas) {
        pots = pots+pots*greitis;
        year++;

        console.log(pots);
    }
    return year;
}

console.log(gele(20,1,1));
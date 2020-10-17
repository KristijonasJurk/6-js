function autoAshys(a) {
    
    let asiuKiekis = 1;
    let darNepanaudoturatukiekis = a - 2;

    if (darNepanaudoturatukiekis === 2) {
        asiuKiekis++;
    } else {
        asiuKiekis += darNepanaudoturatukiekis / 4;
    }

    return asiuKiekis;
}

console.log(autoAshys(4))
console.log(autoAshys(10))
console.log(autoAshys(14))

console.clear();




const appSize = [4, 8, 7, 6, 1, 1, 9, 45, 7, 2];
const phoneMemorySize = 70;

function kiekTilpsAppsu(memory, list) {
    const appCount = list.length;
    let usedSpace = 0;
    let installedApps = 0;

    for (let i=0; i<appCount; i++) {
        const appSize = list[i];
        usedSpace += appSize;
        if(usedSpace <= memory) {
            installedApps++;
            console.log('bandau instaliuoti '+ list[i]+' '+ usedSpace);
        }    
    }
    return installedApps;
}

const phoneAppCount = kiekTilpsAppsu(phoneMemorySize, appSize);

console.log(phoneAppCount);


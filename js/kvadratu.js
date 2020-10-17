function kvadratu(x, y) {
    let ats = 1;
    for (let i=0; i<y; i++)  {
        ats *=x;               
    }
    return ats;  
}
console.log (kvadratu(-5, 2));
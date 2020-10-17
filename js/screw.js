// ilgis: 15mm
// zingsnis: 1.5mm
// rankos pasukimas: 140deg
// kiek sriegiu?
// kiek reikia pasukimu pilnai susukti medvarsti?

function screw(ilgis, zingsnis, pasukimas) {
    const sriegiai = ilgis / zingsnis;
    const laipsniai = sriegiai * 360;
    const ats = laipsniai / pasukimas;
    return ats;
}
console.log (screw(15, 1.5, 140))


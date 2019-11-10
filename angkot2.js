var noAgkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

while (noAgkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAgkot +
        ' beroperasi dengan baik');
    noAgkot++;
}

for (noAgkot = angkotBeroperasi + 1; noAgkot <= jmlAngkot; noAgkot++) {
    console.log('Angkot No. ' + noAgkot + ' sedang tidak beroperasi');
}
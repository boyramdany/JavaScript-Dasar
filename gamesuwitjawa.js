var tanya = true;
while (tanya) {
    // Menangkap pilihan player
    var p = prompt('pilih: gajah, semut, orang');

    // Membangkitkan bilangan random
    var comp = Math.random();
    // Menangkap pilihan komputer
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // Menentukan Rules
    if (p == comp) {
        alert('Hasilnya seri !');
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH ';
        // }
        // Code diatas bisa ditulis dengan simple seperti dibawah
        hasil = (comp == 'orang') ? 'MENANG !' : 'KALAH !';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH !' : 'MENANG !';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH !' : 'MENANG !';
    } else {
        hasil = 'memasukkan pilihan yang salah !';
    }
    // Tampilkan hasilnya

    alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nMaka hasilnya adalah : Kamu ' + hasil);
    tanya = confirm('bermain lagi ?');
}
alert('Terimakasih sudah bermain !');



// Membangkitkan bilangan random dari mulai angka 1 - 10
// 1 ini adalah batas minimum
// batas maksimum , -> 10 + 1 = 11 jadi ga bakal nemu angka 11
// var comp = Math.floor(Math.random() * 10) + 1
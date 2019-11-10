var life = 3;
var comp = Math.floor(Math.random() * 10) + 1
alert('Tebak angka dari 1 - 10 \nKamu punya ' + life + ' kesempatan');
for (life; life > 0; life--) {
    var p = prompt('Masukkan angka tebakan: ');
    // Menentukan Rules
    if (isNaN(p)) {
        alert('Kamu tidak memasukan angka');
    } else {
        var angka = p;
    }

    if (angka == comp) {
        alert('Tebakan Anda Benar ! \n Angka yang di cari adalah ' + comp);
    } else {
        alert('Ayo sisa kesempatan kamu sisa : ' + (life - 1));
    }
}
if (life <= 0) {
    alert('Anda Gagal ! \nAngka yang di cari adalah ' + comp);
}
alert('Terimakasih sudah bermain !');
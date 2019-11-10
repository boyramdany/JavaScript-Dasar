function volumeDuaKubus(a, b) {
    var volumeA, volumeB, total;
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}
alert(volumeDuaKubus(5, 10));

// Function Expression
// var hitungKubus = function(){}
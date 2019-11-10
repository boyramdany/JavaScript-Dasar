var s = '';
var b = 5;
var c = 5

for (i = 0; i < b; i++) {
    for (j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);
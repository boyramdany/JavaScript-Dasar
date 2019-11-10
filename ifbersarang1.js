var s = '';
var i = 5;

for (i; i > 0; i--) {
    for (j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);
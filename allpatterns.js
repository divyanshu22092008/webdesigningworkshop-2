console.log("1-Right-angled triangle pattern.")
for (let i = 1; i <= 5; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
             console.log(row);
         }
console.log("2-Equilateral triangle pattern.")
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 5 * i - 1; k++) {
        row += "*";
    }
        console.log(row);
}
console.log("3-Inverted right-angled triangle pattern.")
for (let i = 5; i >= 1; i--) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
console.log("4-Inverted equilateral triangle pattern.")
for (let i = 4; i >= 1; i--) {
            let row = "";
            for (let j = 1; j <= 5 - i; j++) {
                row += " ";
            }
            for (let k = 1; k <= 5 * i - 1; k++) {
                row += " *";
            }

            console.log(row);
        }
        console.log("5-  Flipped Simple Pyramid.")
let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "*";
    console.log(row);
}       

console.log("6-Full diamond pattern.")
let m = 5;

for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = 1; j <= m - i; j++) row += " ";
    for (let k = 1; k <= 2 * i - 1; k++) row += "*";
    console.log(row);
}
for (let i = m - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= m - i; j++) row += " ";
    for (let k = 1; k <= 2 * i - 1; k++) row += "*";
    console.log(row);
}
console.log("7-Hollow diamond pattern.")
let p = 5;
for (let i = 1; i <= p; i++) {
    let row = "";
    for (let j = 1; j <= p - i; j++) row += " ";
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) row += "*";
        else row += " ";
    }
    console.log(row);
}
for (let i = p - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= p - i; j++) row += " ";
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) row += "*";
        else row += " ";
    }
    console.log(row);
}
console.log("8-number pyramid.")
let q = 4;
for (let i = 1; i <= q; i++) {
    let row = "";
    for (let j = 1; j <= q - i; j++)
         row += " ";
    for (let k = 1; k <= 2 * i - 1; k++) 
        row += k;
    console.log(row);
}
console.log("9-Floyd's triangle pattern.")
let r = 5;
let num = 1;    
for (let i = 1; i <= r; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }
    console.log(row);
}
console.log("10-hourglass pattern.")
let s = 5;
for (let i = s; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= s - i; j++)
         row += " ";

    for (let k = 1; k <= 2 * i - 1; k++) 
        row += "*";

    console.log(row);
}
for (let i = 2; i <= s; i++) {
    let row = "";           
    for (let j = 1; j <= s - i; j++)
         row += " ";
    for (let k = 1; k <= 2 * i - 1; k++)
        row += "*";
    console.log(row);
}
console.log("11-Alphabet pyramid pattern.")
let t = 5;
for (let i = 1; i <= t; i++) {
    let row = "";
    for (let j = 1; j <= t - i; j++)
         row += " ";
    for (let k = 1; k <= 2 * i - 1; k++)
        row += String.fromCharCode(64 + k);
    console.log(row);
}

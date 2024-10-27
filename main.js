var n = 10

let length = 1 + 2 * (n - 1);
let stars = "";
let empty = "";


for (let i = 0; i < n; i++) {
    stars = "";
    empty = "";

    for (let j = 0; j < 1 + 2 * i; j++) {
        stars += "*";
    }

    for (let j = 0; j < (length - (1 + 2 * i)) / 2; j++) {
        empty += " ";
    }

    console.log(empty + stars + empty);
}


for (let i = 0; i < n - 1; i++) {
    stars = "";
    empty = "";

    for (let j = 0; j < length - 2 * (i + 1); j++) {
        stars += "*";
    }

    for (let j = 0; j < (2 * (i + 1)) / 2; j++) {
        empty += " ";
    }

    console.log(empty + stars + empty);
}

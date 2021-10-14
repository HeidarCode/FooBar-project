let number = []
for (let i = 0; i <= 100; i++) {
    number[i] = i
    if (number[i] % 3 == 0 && number[i] % 5 == 0) {
        number.splice(i)
        number.push("foobar")
    }
    if (number[i] != "foobar") {
        if (number[i] % 5 == 0) {

            number.splice(i)
            const s = number.push("foo")
        }
        if (number[i] % 3 == 0) {
            number.splice(i)
            number.push("bar")

        }
    }

}

console.log(number);
//         //   const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }

// // array = [2, 9]
// console.log(array);


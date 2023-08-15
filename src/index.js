
module.exports = function towelSort(matrix) {
    const newArr = [];
    if (matrix === undefined || matrix.length === 0) {
        return newArr;
    } else {

        matrix.forEach((item, index) => {
            if (index % 2 == 1) {
                newArr.push(item.reverse());
            } else {
                newArr.push(item);
            }
        });
        return newArr.flat();
    }
};

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];

// function spreadMyArr(someArr) {
//     if (someArr.length === 0) {
//         return someArr;
//     } else {
//         const newArr = [];
//         someArr.forEach((item, index) => {
//             if (index % 2 === 1) {
//                 newArr.push(item.reverse());
//             } else {
//                 newArr.push(item);
//             }
//         });
//         return newArr.flat();
//     }
// }

// console.log(spreadMyArr(arr));

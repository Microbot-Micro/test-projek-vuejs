function generatePattern(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= n + 1; j++) {
            pattern += (j < i) ? j : '*';
        }
        console.log(pattern);
    }
}

generatePattern(5);
generatePattern(4);



function findMaxDifference(arr) {
    let maxDifference = 0;
    let minValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        maxDifference = Math.max(maxDifference, arr[i] - minValue);
        minValue = Math.min(minValue, arr[i]);
    }

    return maxDifference;
}

const harga = [10, 7, 5, 8, 11, 9, 1];
const result = findMaxDifference(harga);
// console.log(result);

function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (rightIdx === 0) return arr.length
        if (midVal === 0) {
            rightIdx = midIdx - 1;
            if (arr[rightIdx] === 1) {
                return arr.length - midIdx
            }
        } else if (midVal === 1) {
            leftIdx = midIdx + 1 ;
            if (arr[leftIdx] === 0) {
                return arr.length - leftIdx
            }
        }
    }
    return 0
}

module.exports = countZeroes
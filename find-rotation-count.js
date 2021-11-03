function findRotationCount(arr, low = 0, high = arr.length-1) {
    while (high >= low) {

        let mid = Math.floor((high+low)/2);

        if (mid === 0) return 1;

        if (arr[mid] < arr[mid-1]) {
            return mid

        } else if (arr[mid] > arr[0]) {
            low = mid + 1

        } else if (arr[mid] < arr[0]) {
            high = mid - 1
        }
    }
    return 0;
}

module.exports = findRotationCount
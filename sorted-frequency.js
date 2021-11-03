function sortedFrequency(arr, num, low = 0, high = arr.length-1) {
    while (high >= low) {
        let mid = Math.floor((high+low)/2)

        if (arr[mid] === num) {
            const lowerBound = findLowerBound(arr, num, low, mid);
            const upperBound = findUpperBound(arr, num, mid, high);
            return upperBound-lowerBound;
        } else if (arr[mid] > num) {
            high = mid - 1;
        } else if (arr[mid] < num) {
            low = mid + 1;
        }
    }
    // not found
    return -1
}

function findLowerBound(arr, num, low, high) {
    while (high >= low) {
        let mid = Math.floor((high+low)/2)

        if (arr[mid] < num) {
            if (arr[mid+1] === num) return mid+1;
            low = mid+1;
        } else if (arr[mid] === num) {
            if (arr[mid-1] < num) return mid;
            high = mid-1;
        }
    }
    return 0;
}

function findUpperBound(arr, num, low, high) {
    while (high >= low) {
        let mid = Math.floor((high+low)/2)

        if (arr[mid] === num) {
            if (arr[mid+1] > num) return mid+1;
            low = mid+1;
        } else if (arr[mid] > num) {
            if (arr[mid-1] === num) return mid;
            high = mid-1;
        }
    }
    return arr.length;
}

module.exports = sortedFrequency
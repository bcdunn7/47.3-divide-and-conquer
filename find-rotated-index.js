function findRotatedIndex(arr, num) {
    let switchIdx = findSwitch(arr);
    if (num <= arr[switchIdx-1] && num >= arr[0]) {
        // search first half of arr
        return(findNumIdx(arr, num, low = 0, high = switchIdx-1))
    } else if (num >= arr[switchIdx] && num <= arr[arr.length-1]) {
        //search second half of arr
        return(findNumIdx(arr, num, low=switchIdx, high=arr.length-1))
    }
    return -1
}

function findSwitch(arr, low = 0, high = arr.length-1) {
    while (high >= low) {
        let mid = Math.floor((high+low)/2);
        if (arr[mid] < arr[mid-1]) {
            return mid
        } else if (arr[mid] > arr[0]) {
            low = mid + 1
        } else if (arr[mid] < arr[0]) {
            high = mid - 1
        }
    }
}

function findNumIdx(arr, num, low, high) {
    while (high >= low) {
        let mid = Math.floor((high+low)/2);
        if (arr[mid] === num) {
            return mid
        } else if (arr[mid] > num) {
            high = mid -1
        } else if (arr[mid] < num) {
            low = mid +1
        }
    }
    return -1
}

module.exports = findRotatedIndex
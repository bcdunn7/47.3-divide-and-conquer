function findFloor(arr, num, low = 0, high = arr.length -1) {

    while (high >= low) {

        let mid = Math.floor((high+low)/2);


        // if midpint is greater than num
        if (arr[mid] > num) {

            // if value to left is num or lower than num, return value to left
            if (arr[mid-1] <= num) return arr[mid-1];

            // else dec high
            high = mid - 1;

        } 
        
        // if midpoint is eqaul num
        else if (arr[mid] === num)  {

            // console.log ('midpoint = num', 'arr', arr, 'mid', mid, 'arr[mid]', arr[mid])
            return arr[mid];
        }

        // if midpoint is less than num
        else if (arr[mid] < num) {
            // if last value in array, return value
            if (arr[mid] === arr[arr.length-1]) return arr[mid];

            // if value to right is num or lower than num, return value to right
            if (arr[mid+1] >= num) return arr[mid];

            // else inc low
            low = mid + 1;

        }
    }
    return -1;
}

module.exports = findFloor
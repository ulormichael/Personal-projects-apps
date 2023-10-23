// function find_max(nums) {
//     let max_num =
// Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num of nums) {
//         if (num > max_num) {
//             // (Fill in the missing line here)
//         }
//     }
//     return max_num;
// }

int makeArrayConsecutive2(int[] statues) {
    int count=0,x=0;
    Arrays.sort(statues); //sorting
    for(int i=0;<statues.length-1;i++){
        x=statues[i+1]-statues[i]-1;
        count+=x;
    }
    return count
}

function almostIncreasingSequence(sequence) {
    var found = 0;
    for (var i=0;i<sequence.length;i++) {

        if(sequence[i] <= sequence[i-1]) {
            found++;
            // check if more than one nonincreasing found
            if(found > 1) return false;

            // check if second previous number is equal to / bigger than current number
            // and previous number is equalto / bigger than next number
            if(sequence[i] <= sequence[i-2] && sequence[i-1] <= sequence[i-1]) return false;
        }

    }
    return true;
}

function almostIncreasingSequence(sequence) {
    let flag = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i+1]){
            flag++;
            if(i !== 0 && sequence[i] >= sequence[i+2]){
                if(sequence[i-1] >= sequence[i+1])
                    return false;
            }
        }
    }
    return flag < 2;
}

function matrixElementsSum(matrix) {

    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        const currRow = matrix[row];
        for (let col = 0; col < currRow.length; col++) {

    // they refuse to stay in any of the free rooms
    if (currRow[col] === 0) {

    // or any of the rooms below any of the free rooms.
    if (row + 1 < matrix.length) {
    
        matrix[row + 1][col] = 0;
    }
    } else {
    sum += currRow[col];
    }
        }
    }
    return sum;
}
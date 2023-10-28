
// simple swap helper function
function swap(arr, i, j){
    let temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end){
    // initialize pivot on the final index of the partition
    let pivot = arr[end];
    // initialize i as beyond the leftmost element
    let i = (start - 1);

    // iterate through partition. if any element is less than the pivot it is moved left of the pivots final position.
    for (let j = start; j <= end - 1; j++){
        let element = arr[j];

        if (element < pivot){
            i++;
            swap(arr, i, j);
        }
    }

    // when partition has been iterated through, the pivot is moved to its final position
    i++;
    swap(arr, i, end);

    // i is returned to ensnure new partitions can be created from the pivots final position
    return (i);
}

function quicksort(arr, start, end){

    // the recursive base case, function will return if there is no elements in partition
    while (start < end){

        // pivot is right most element of partition
        let pivot = partition(arr, start, end);

        // use tail recursion to sort smaller partition first, reducing space complexity
        if (pivot - start < end - pivot) {
            quicksort(arr, start, pivot - 1);
            start = pivot + 1;
        } else {
            quicksort(arr, pivot + 1, end);
            end = pivot - 1;
        }
    }
}

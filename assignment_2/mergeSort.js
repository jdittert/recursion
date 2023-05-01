function mergeSort(array) {
    const {length} = array;
    let sorted = [];
    if (length > 1) {
        let arrayLeft = array.slice(0, Math.floor(length/2));
        let arrayRight = array.slice(Math.floor(length/2));        
        if (arrayLeft.length > 1) arrayLeft = mergeSort(arrayLeft);
        if (arrayRight.length > 1) arrayRight =  mergeSort(arrayRight);
        const merged = merge(arrayLeft, arrayRight);        
        sorted = merged;
    } else sorted = array;

    return sorted;
}

function merge(left, right) {
    const merged = [];
    while (left[0]) {
        if (right[0]) {
            if (left[0] < right[0]) merged.push(left.shift());
            else merged.push(right.shift()); 
        } else merged.push(left.shift());        
    };
    if (right[0]) right.forEach(element => {
        merged.push(element);
    });  
       
    return merged;
}

console.log(mergeSort([3, 5, 1, 7, 6, 4, 8, 2]));


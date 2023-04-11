let arr = [4, 5, 1, 3, 2]
console.log(arr);
for (let i = 0;  i < arr.length; i++) {
    for (let i = 0;  i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        
    }
}
}


console.log(arr);

for (let i = 0;  i < arr.length; i++) {
    for (let i = 0;  i < arr.length; i++) {
    if (arr[i] < arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        
    }
}
}
console.log(arr);

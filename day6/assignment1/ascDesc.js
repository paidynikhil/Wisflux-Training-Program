let arr = [7,8,2,6,4,9,14];


arr.sort((a, b) => a - b);
console.log("Sorted in ascending order:", arr); 

arr.sort((a, b) => b - a);
console.log("Sorted in descending order:", arr); 

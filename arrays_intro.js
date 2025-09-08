//declared in[]
//commonly used witn const
//
const arr=["python",1,2,3]
console.log(arr[0])//using index position
console.log(arr.length)//to find length return type integer

for(let i=0;i<arr.length;i++){
    console.log(arr[i])             //iterating arrays
}


arr[2]="javascript"//to change elements in an array using index position
console.log(arr)


console.log(arr.reverse())//to reverse an array and return array

const numbers=[9,1,3,100,2,4,77]

numbers.sort()  //to sort an array
console.log(numbers)


//console.log(numbers.pop())// removes the last element and show the removed element
//console.log(numbers)

console.log(numbers.push(2,"javascript"))//adds one or more elements to the end and shows the lenth of the array
console.log(numbers)
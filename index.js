const arr =[1,2,3,4,5,6,4];

console.log("First Index of 4 is:",arr.indexOf(4))
console.log("First Index of 4 is:",arr.lastIndexOf(4))

console.log("Pushing at the ENd:",arr.push(99))
console.log("Modified Array",arr)

console.log("Popping at the ENd:",arr.pop())
console.log("Modified Array",arr)

console.log("0 added at the start of array" ,arr.unshift(0))
console.log("Modified Array",arr)


console.log("0 removed from the start of array" ,arr.shift(0))
console.log("Modified Array",arr)


console.log("Slicing",arr.slice(2,5))
console.log("Slicing",arr.slice(2))
console.log("Slicing",arr.slice(0))

// splice(index,deleteCount,to Be Add)
console.log("Splicing ",arr.splice(2,0,5))

console.log("Modified Array",arr)

console.log("Splicing ",arr.splice(2,1,5))

console.log("Modified Array",arr)

console.log("Splicing ",arr.splice(2,4,5))

console.log("Modified Array",arr)


console.log("MAP")
arr.map(function(e){
  console.log(e)
});

console.log("FILTER:")
console.log(arr.filter(e=>e>2 && e<6).sort())

console.log("REDUCE")
arr.reduce(function(total,e){
    return total-e;
})
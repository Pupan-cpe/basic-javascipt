
// console.log('pupan')

let arr = ['pupan', 'doh']

// console.log(arr[])

let arr1 = arr[0]
// Apple
// console.log(arr1)

let last = arr[arr.length -1]
// console.log(last)
// Ban

arr.forEach(function(item, index, array){
// console.log('forEach:', item, index)

})


// เพิ่มรายการต่อท้าย Array
let newArr = arr.push('poulkaew')


console.log(newArr,arr[0])


1

console.log('----------------------------------------------------------------------------------');
// break

// console.log(arr,'1');

// ลบรายการออกจากส่วนท้ายของ Array
console.log(arr.pop());


console.log(arr,'2');


arr.pop();

console.log(arr);

console.log('----------------------------------------------------------------------------------');

// ลบรายการจากจุดเริ่มต้นของอาร์เรย์
let first = arr.shift()
console.log(arr,'form shift');
// เพิ่มรายการไปที่จุดเริ่มต้นของอาร์เรย์


var examples = 'pupan poulkaew'
let importfirst = arr.unshift(examples) //[ 'pupan poulkaew' ]

console.log(arr);

arr.push('Mango','banana')
let pos = arr.indexOf('pupan poulkaew')
console.log(pos); // 0
// ลบรายการตามตำแหน่งดัชนี
let removeItem = arr.splice(pos, 1)
console.log(arr,'remove');

console.log('---------------------------------');


// ลบรายการออกจากตำแหน่งดัชนี
let vegetables = ['1', '2', '3','4']
// console.log(vegetables);

let pos1 = 1

let n = 2
console.log(vegetables,'start');
let removedItems1 = vegetables.splice(1, 2)


console.log( 'remove form:',removedItems1);

console.log(vegetables,'end');

console.log('---------------------------------');

let shallowItems = vegetables.splice()
console.log(shallowItems,'--');



console.log('---------------------------------');
// การเข้าถึงองค์ประกอบอาร์เรย์
let array1 = [1,2,3,4,5,6,7,8,9]

console.log(array1[0],'arr[0]');
console.log(array1[1],'arr[1]');
console.log(array1[2],'arr[2]');
console.log(array1[3],'arr[3]');
console.log(array1[3],'arr[3]');
console.log(array1[array1.length -1],'arr[-1]');
console.log('---------------------------------');
// ส่งคืนส่วนหนึ่งของอาร์เรย์ที่มีอยู่

console.log(array1,'start');

let citrus = array1.slice(0, 5)
console.log(citrus,'slice');
console.log(array1);
console.log('---------------------------------');





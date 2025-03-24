let arr1=[1,2,3,4,5,6];
let arr2="ABCudifwe";
let arr3=" XyZ";
let buffer1=Buffer.from(arr1);
let buffer2=Buffer.from(arr2);
let buffer3=Buffer.from(arr3);
// console.log(buffer1)
// console.log(buffer2)
// console.log(buffer3)
let bufferConcat=Buffer.concat([buffer2,buffer3]);
console.log(bufferConcat)
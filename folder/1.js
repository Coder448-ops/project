//  let arr1=[1,2,3,4,`q`,`fgas`]
let  arr2=[]

    // arr2.push(Math.floorMath.random()*18)
// let arr21=[12,`dvsgb`,3,`fas`,`cd`,9]
// for(let el of arr21){
  
//     arr21.length=6
  
// }
// console.log(arr21)
 let time=setInterval(() => {
let dom=Math.floor(Math.random()*100)
arr2.push(dom)
console.log(`qo'shildi`,dom)
console.log(`arr holati`,arr2)
if(arr2.length==6){
    clearInterval(time)
}
},0.990)


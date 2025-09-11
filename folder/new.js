
//  const btn=document.getElementById('btn')
// const box=document.getElementById('box')
// b
// tn.addEventListener('click',()=>{
//     if(box.style.display==="none"){
//       box.style.display=`block`
//       btn.innerText=`yopish
// `
//      }
//       else{
//       box.style.display=`none`
//       btn.innerText=`ochish`
//       }

// })

// if(arr
//  % 2==0){
//   console.lo
// g(toq.push)
// }
// else if(arr % 2==1){
//   console.log(juft.push)
// }
// else{

//   console.log(sting.push)
// }
// for(let el of arr){
// if(typeof el==
// `number`){
//   if(el% 2==0){
//     juft.push(el)
//   }
//   else{
//     toq.push(el)
//   }
// }
// else if(typeof el===`sting`){
//   sting.push(el)
// }
// }
// console.log(arr)
//  let arr1=[1,2,3,4]
// let  arr2=[]
// for(let el of arr1){
//   if (typeof el ===`number`){
//     arr1.push(arr2)
//   }
// }
// console.log(arr1)
// console.log(arr2)
// const save=()=>{
//   const ism = document.querySelector(`#ism`).value
//   const familiya= document.querySelector(`#fam`).value
//   const email =document.querySelector(`#email`).value
//   const password = document.querySelector(`#password`).value
//   localStorage.setItem(`user`,JSON.stringify({ism,familiya,email,password}))
// }
// const show =()=>{
//   const user= JSON.parse(localStorage.getItem(`user`))
//   const txt= document.querySelector(`p`).innerText=`ism ${user.ism}, familiya ${user.familiya}, email ${user.email},password ${user.password}`
// }

// function sum(n){
//   return n*(n+1)/2

//     console.log(sum(100))
//     let n=100
//     let sum0=0
//  for( let i=0; i <=n;i++ ){
//      sum0=sum0+1
//  }
//  console.log(sum0)
// let juft=0
// let toq=0
//  for( let i=0; i <=n;i++ ){
//        if( i%2==0){
//     juft++
//  }else {
//     toq++
//   }
// }
// console.log(juft)
// console.log(toq)
// }
// let qoldiq
// let abbr=[123]

// if(r=12){

// }

// else{
   
// } 
//   const c =()=>{
//    const color=document.querySelector(`#color`).value
//    localStorage.setItem(`color`,color)
//  const saved =localStorage.getItem(`color`)
// document.querySelector(`body`).style.background=saved
//   }
//   let color=localStorage.getItem(`color`)
//   document.querySelector(`body`).style.background=color
//   const save=()=>{
//   const login= document.querySelector(`#login`).value
//    const password= document.querySelector(`#password`).value
//    localStorage.setitem(`user`,JSON.stringify({login,password}))
//   }
//   const show =()=>{
//     const users= JSON.parse(localStorage.getItem(`users`))
//     const data= document.querySelector(`p`).innerText= `login ${users.login},password ${users.password}`
//   }
//   let users=[{
//     name:`jimmy`,
//     username:`Mr.beast`,
//     password:`Mr.beast,jimmy`,
//     email:`mrbeast🤑452@gmail.com`
//   },
//   {
//     name:`jinwoo`,
//     age:18,
//     username:`jinwoo126`,
//     password:`********`,
//     email:`j@gmail.com`
//   },
//   { 
//   name:`alice`,
//     age:18,
//     username:`alice126`,
//     password:`alice*****`,
//     email:`a@gmail.com`
//   }]
//   const container=document.querySelector(`.user-container`)
//  users.forEach(user => {
//     const div=document.createElement(`div`)
//     div.innerHTML=`${user.name}`
//      container.appendChild(div)
//   });
  let arr=[1,2,3,`A`,`B`,`D`]
  let son=[]
  let xarf=[]
  for(let i=0; i<arr.length;i++){
    if(typeof arr [i]===`number`){
      son.push(arr[i])
    }
    else if(typeof arr[i]===`string`){
      xarf.push(arr[i])
    }
  }
console.log(son,xarf)
let clone=[Infinity,`s`,`d`,`q`]
let sum=[]
let strring=[]
for(el of clone){
  if(typeof el ===`number`){
    sum=sum+el
  }
}
console.log(sum)
fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(response => response.json())
      .then(json => console.log(json))
  fetch(`https://api.weatherapi.com/v1/current.json?key=bc325e418f4a4af3a5240145251608&q=khorezm&aqi=no`)
  .then(res=>res.json)
  .then(data=>{
    console.log(data)
  })
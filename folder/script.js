
// const juft=[]
// const toq=[]
// const number=100
// for( let i=0; i<=number; i++){
//     if(i %2==0){
//         juft.push(i)
//     }
//     else{
//         toq.push(i)
//     }
// }

// console.log(juft)
// console.log(toq)
// console.log(toq[13])
// console.log(toq.length-1)
// console.log(juft.length-1)
// for(let i=0 ;i<=toq.length-1;i++){
//     console.log(toq[i],`toq`)
// }
// for(let i=0 ;i<=juft.length-1;i++){
//     console.log(juft[i],'juft')
// }
// let son=18
// console.log(son*1-1)
// console.log(
//     toq[1]*(toq[toq.length-1])
// )
// juft.pop(0)

// juft.shift(0)
// juft.unshift(0)
// console.log(juft)
// juft.push(1)
// const numbers=[100,200,300]
// const result=numbers.map(n => n+n)
// console.log(result)


// const mevalar=[`OLma`,`OLCha`,`Orik`]
// const arr=mevalar.map(n=>n.toLocaleLowerCase())
// console.log(arr)
// const numBer=[100,200,300]
// const Arr=numBer.map(n=>Math.ceil(n*1.15))
// console.log(Arr)
// const Sort =mevalar.map(n=>`${n}`)
// console.log(Sort)
// const user=[
//     {
//         name:`jakhson`,
//         email:`john@gmail.com`,
//         number:+8686645345,
//         surname:`nikolas`,
//         Age:8,
//     },
//      {   
//          name:`Mr.bean`,
//         email:`bean@gmail.com`,
//         number:+86835645345,
//         surname:`khusanov`,
//         Age:5
//     }
// ]
// cost names=user.map(n=>`${n.name} ${n.Age}`)
// console.log(names)
// const foundUser= user.find(n=>n.surname ==`nikolas`)
// console.log(foundUser)
// const filterUser=user.filter(n=>n.Age>10)
// console.log(filterUser)
// const fillterUser=user.filter(n=>!(n.Age%2==0))
// console.log(fillterUser)
// const users=[
//     {
//         name:`jakhson`,
//         email:`jakhson@gmail.com`,
//         number:+8686645345,
//         surname:`nikolas`,
//         score:67,
//     },
//     {
//         name:`Mr.john`,
//         email:`john78@gmail.com`,
//         number:+86835645345,
//         surname:`khusanov`,
//         score:34
//     },
//     {
//         name:`Mr.bean`,
//         email:`bean@gmail.com`,
//         number:+86835645345,
//         surname:`khusanov`,
//         score:60
//     }
// ]
// const filterUsers=users.filter(n=>n.score>=60)
// console.log(filterUsers)
// const nums=[2,3,4,6,1,5]
// const nams=[`ronaldo`,`ronaldinho`,`messi`,`pele`,`maradona`,`zidane`,`casilass`,`neymar`,`abduqodir`]
// nams.sort()
// console.log(nams)
// nums.sort((a,b)=>b-a)
// console.log(nums)
// nams.sort((a,b)=>b.localeCompare(a))
// console.log(nams)
// setTimeout(()=>{
//   console.log(`hello world`)  
// },5000)
// let a =0
// let id =setInterval(()=>{
//     console.log(`started`)
// },100)
// setInterval(() => {
//     clearInterval(id)
//     console.log(`finished`)
// },500);
// let count=10
// let interval =setInterval(()=>{
//     console.log(count)
// count--
// if (count== 0){
//     clearInterval(interval)
//     console.log(`finished`)
// }
// },1000)
// Math.floor(Math.random()*10+1)
// let game =setInterval(()=>{
//     let num=Math.floor(Math.random()*10)+1
//     console.log(num)
//     if(num==7){
//         clearInterval(game)
//         console.log(`finished`) }
// },1000)
// const users=[
//  {
//         name:`jakhson`,
//         email:`jakhson@gmail.com`,
//         number:+8686645345,
//         surname:`nikolas`,
//         age:54,
//         score:67,
//    },
//   {
//        name:`Mr.john`,
//          email:`john78@gmail.com`,
//         number:+86835645345,
//         surname:`khusanov`,
//          score:34,
//          age:51
//     },
//     {
//         name:`botir`,
//         email:`bean@gmail.com`,
//          number:+86835645345,
//          surname:`khusanov`,
//         score:60,
//         age:33
//     }
//  ]
// const Names=users.map(n=> `${n.email}`)
// console.log(Names)
// users.map((users)=>{
//s     console.log(users.name)
// },5000)
// const Userfilter=users.filter(n=>n.age>50)
// console.log(Userfilter)
// const olds= users.every(users=> users.age>50)
// console.log(olds)
// const finds=users.find(n=> n.name=`Mr.bean`)
// console.log(finds)
// const newName=`botir`
// const age=23
// const found=users.find(user=>user.name==newName)
// if(found){
//     console.log(`user bor`)
// }
// else{
//     const Newuser={
//         name:`ali`,
//         age:11
        
//     }
//     users.push(Newuser)
// }
// console.log(users)


// function NAME(a,b){
// console.log(a+b)
// return(a*b)
// }


// let cars=[`BMW`,"ggg",`Audi`,`ow`,`gsqw`]
// cars.sort((a,z)=> z.localeCompare(a)) 
// console.log(cars)
// let ARr=[6,7,3]
// ARr.push( Math.floor(Math.random()*100))
// console.log(ARr)
// let anime1=[]
// const anime=(Math.floor(Math.random()*10))
// for (let i=0;i<20;i++){
//    anime1.push( Math.floor(Math.random()*10))
// }
// console.log(anime1)
// let naruto=Array.from({length:Math.floor(Math.random()*100)},()=>Math.floor(Math.random()*100))
// console.log(naruto)
// let kun=2
// switch(kun){
//     case 1:
//     console.log(`dushanba`) 
//     break
//     case 2:
//         console.log(`seshanba`)
// }

// const masalan2=()=>{}

// masalan2()
// if(5){
//     console.log(`salom`)
// }
// 
let OBECT=[
    {
        NAME:`HASAN`,
        surname:`Do'smatov`,
        AGE:21
    },
    {
        NAME:`HUSAN`,
        surname:`Do'smatov`,
        AGE:32
    },
    {
        NAME:`ALI`,
        surname:`Do'smatov`,
        AGE:24
    }
]
// (Math.floor(Math.random().OBECT))
// console.log(OBECT[2].NAME)
// let vbn=[( Math.floor(Math.random(OBECT)))]
// console.log(vbn
let OBECTrandom=( Math.floor(Math.random()*OBECT.length))
console.log(`G'olib user`)
console.log(OBECT[OBECTrandom].NAME.toLowerCase(),OBECT[OBECTrandom].surname.toUpperCase())
OBECT.map((OBECT)=>{
    console.log(OBECT.NAME)
})

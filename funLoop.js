// console.log("amr mone ace");
// function Loop

// function solve(){
//     var sum=0;
//     for(var i=0;i<5;i++){
//         sum+=i;
//     }
// return sum;
// }
// console.log(solve());

//Arrow function
// const sum=(x,y)=>{
//     var sum=x+y;
//    console.log(sum);
   
// }
// sum(3,4);
//Shorcurt Arrow function 
// const sum1=(x,y)=>x+y;
// console.log(sum1(2,5));

//Returning function 
// function fun(a){
//     return function(b){
//         return a*b;
//     }
// }
// const mult=fun(4);
// console.log(mult(5));

//Destructring parameter

// function user({name,age,email}){
//     console.log(`name:${name},age:${age},email:${email}`);
    
// }
// user({
//     name:"Saif",
//     age:22,
//     email:"ssssss@gmail.com"
// });
//example ``
// var ammount=22;
// console.log("amount",ammount);
// console.log(`amount:${ammount}`);


///                                               Array
// let colors=["red","green"];
// colors.push("blue");
//first insert in array 
// colors.unshift("white");
//colors.pop();
//first element delete 
// colors.shift();
// console.log(colors.length);

// console.log(colors[2]);

// let fruts=["apple","banana","orrange","grape"];

//find Element
// console.log(fruts.indexOf("banana"));
//bound dea print
// const temp=fruts.slice(1,3);
// console.log(temp);
//full arra print 
// fruts.forEach(function(frut){
//     console.log(frut);
// });
//                               Object


// let person ={
//     name:"Saif",
//     age:22,
//     city:"Dhaka"
// }
// let myname=person.name;
// console.log(myname);
// console.log(person.age);

///                       Settime
// console.log("Start time");
// setTimeout(()=>{
//     console.log("This code run after 5 second");
// },5000)
// console.log("End time");
//                   SetIntervel
// let count=0;
// const intevel= setInterval(()=>{
//     count++;
//     console.log(count);
//     if(count >= 5){
//         clearInterval(intevel);
//     }
   
// },5000)
//                       Try and Catch
// try{
   
//     console.log("hellw1");
//     console.log("hellw2");
//     console.log("hellw3");
//     console.log(A);
//     console.log("hellw4");
//     console.log("hellw5");
//     console.log("hellw6");
        
// }catch(er){
//     console.log("Somthing error");
//     console.log(er);
// }


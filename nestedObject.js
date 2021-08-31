// const information = {
//     id:1023,
//     name:'Fardin Tazbeed',
//     Balance:10000,
//     roll:23453,
//     financial:false,
//     subject:['Math','Accounting','English','Marketing','Economic','History'],
//     bestFriend:{
//         name:['anika','fariya','nowrin','Afif','rahmat','Emrul','Nafis'],
//         roll:[23456,2345,2345,2345,2345]
//     },
//     // আমরা ফাংশন ও ডিফাইন্ড করতে পারি অবজেক্ট এর মাধ্যমে 
//     TakeExam:function (){
//         console.log(this.name,'Taking Exam')
//     },
//     cost: function (expence,tips){
//         this.Balance = this.Balance - expence - tips;
//         return this.Balance
//     }
// }

// information.TakeExam()
// const totalBalance = information.cost(5000,1500) //পেরামিটারের ভেলু 
// console.log(totalBalance)
// console.log(information)

// // অবজেক্ট KEY and Value  নিচে দেখানো হলো 
// const keys = Object.keys(information)
// console.log(keys)
// const values = Object.values(information)
// console.log(values)

let myObj = {
    name:'rubel',roll:2345666,price:345678
}
const result = Object.keys(myObj)
const resultOne = Object.values(myObj)
// entries এর মাধ্যমে আমরা একটা অবজেক্ট এর ঝড়ায় ঝড়ায় পেতে পারি  
const resultTwo = Object.entries(myObj)

// console.log(result)
// console.log(resultOne)
// console.log(resultTwo)
// সিল করা হচ্ছে কোণো ভেলু চেঞ্জ করা যাবে কিন্তু ডিলেট করা যাবে না । উপরে প্রথম সিল দিয়েছি পরে ডিলেট দিয়ে কনসল লগ করা হলো কিন্তু কনসলে আমরা সিল এর রেজাল্ট দেখতে পাইছি সেখানে ডিলেট হয় নাই 
// Object.seal(myObj)
// delete myObj.price
// console.log(myObj)
// ফ্রিজ এর মাধ্যমে আমরা ভেলুও চেঞ্জ করতে পারবো না , 
Object.freeze(myObj)
console.log(myObj)
//for(initalize; condition ; increment/decrement)

//////////////////////////////////////// MAP  method /////////////////////////////////////////////////////////

//let num = [2,8,6,9,14]

//let newarr = num.map( (e) => {
                                   // call back function yesa function hota hai jo kisi ke perameter me pass kiya jata hai
   // return e*2
//});
//console.log(newarr);    // yesa function jo kisi parametr me function ko leta hai or kuch naya return krta hai highrorder function 

/////////////////////////////////////// Filter Method ////////////////////////////////////////////////////////////

// let num = [20,21,6,88,5,9]
// let newarr= num.filter((e) => {
//     return e%2==0
//     return e>7
// });
// console.log(newarr);

///////////////////////////////////// Reduce Method //////////////////////////////////////////////////////////

let num = [2,4,6,8,9,1]
let newvalue= num.reduce((acc,crr) => {
     
    return (acc+crr)
}, 0 );
console.log(newvalue);


let Data = [ {                                  // API Data yesa dikhta hai...
    name: "prachi",
    age: 21,
    city: "Bhopal"

}, {
    name: "shubh",
    age: 27,
    city: "Nagpur"

}, {
    name: "sarika",
    age: 30,
    city: "Sausar"
} ]

let NewData= Data.map((e) => {
    console.log(e);
})



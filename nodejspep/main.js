// const add = require('./myMath.js');
// const res = add(23,23);
// console.log(res)

// const [sum,mul] =require('./myMath.js');
// const res = sum(9,20);
// console.log(res);

// const res2 = mul(8,4);             ////////// with array 
// console.log(res2);



// const {sum,mul} =require('./myMath.js');
// const res = sum(9,20);
// console.log(res);

// const res2 = mul(8,4);             ///////////// with object curly bracket
// console.log(res2);

// const {sub,mul,add,sum} =require('./myMath.js');

// const res = sub(9,20);
// console.log(res);

// const res2 = sum(8,4);        
// console.log(res2);

// const res3 = mul(8,4);        
// console.log(res3);

// const res4 = add(8);        
// console.log(res4);


const figlet = require("figlet");

figlet("Abhishek",(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
});









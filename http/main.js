// const http = require("http");
// const fsPromises = require("fs/promises");
// const app = http.createServer(async(req, res) => {
// //   res.write("WELCOME");
// // res.setHeader('content-type','text/html');
// console.log(req.url);
// res.writeHead(200,{
//     'Content-Type': 'text/html'
// });
// const stream = await fsPromises.readFile('./js.html')
// res.end(stream);

// });
// // http://localhost:1900
// app.listen(1900);






const http = require("http");
const fsPromises = require("fs/promises");
const app = http.createServer(async(req, res) => {
const route =req.url;
switch(route){
    case '/':{
        const stream = await fsPromises.readFile('./js.html');
res.end(stream);
break;
};
    case '/Products.js':{
    res.end('This is a product page');
    break;
};
default :{
    res.end('Oops! page not found')
}
}
});
// http://localhost:1900
app.listen(1900);


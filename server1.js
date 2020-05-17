//video 1  // impoort file and default variable
//import './config';

//video 2 import variables, function from other files
/*import config,{ nodeEnv, logStars} from './config';
console.log(config);
console.log(nodeEnv);
logStars('Function');*/

//video 3 Part 1 node as client
/*import https from 'https';

https.get('https://www.google.com', res =>{
 console.log('Response Code:',res.statusCode);

 res.on('data',chunk1 => {
console.log(chunk1.toString());
  });
});*/

//video 3 part 2 node as server
/*import http from 'http';

const server = http.createServer();

server.listen(8081);

server.on('request',(req,res)=>{
res.write('Hello Http \n');
setTimeout(()=> {
    res.write ('I can stream');
    res.end();
}, 3000);
});*/

//video 4  node express server
import config from './config';
import express from 'express';
// to import apis
import apiRouter from './api';


//import fs from 'fs'; // this is when to read file

const server = express();

//setting up EJS embedded Javascript
// express server will see ejs template under views folder
server.set('view engine','ejs');

server.get('/',(req,res)=>{
    //res.send('Hello Express');
    //res.render('index'); // this is to render ejs template
    res.render('index',{
    content:'Hell EJS <em>template2</em>'    
    }); // this is to render ejs template with parameter
});

//send some hard coded data
// server.get('/about.html',(req,res)=>{
//     res.send('Hello Express about');
// });

//send data by reading file by using fs
/*server.get('/about.html',(req,res)=>{
    fs.readFile('./about.html',(err, data)=>{
        res.send(data.toString());
    });
    
});*/

// use express server middleware static function to serve pages form public folder or any folder
//no need to use fs with this
server.use(express.static('public'));

//api routing
server.use('/api',apiRouter);

server.listen(config.port, () => {
    console.info('Express listen on port',config.port);
});
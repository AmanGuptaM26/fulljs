//video 4  node express server
import config from './config';

// to import apis
import apiRouter from './api';

import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
    src:path.join(__dirname,'sass'),
    dest:path.join(__dirname,'sass'),
    debug: true,
    outputStyle: 'compressed'
    //indentedSyntax: true,
}));

//setting up EJS embedded Javascript
// express server will see ejs template under views folder
server.set('view engine','ejs');

import './serverRender';

server.get('/',(req,res)=>{
    //res.send('Hello Express');
    //res.render('index'); // this is to render ejs template
    res.render('index',{
    content:'Hell EJS <em>template2</em>'    
    }); // this is to render ejs template with parameter
});


// use express server middleware static function to serve pages form public folder or any folder
//no need to use fs with this
server.use(express.static('public'));

//api routing
server.use('/api',apiRouter);

server.listen(config.port,config.host ,() => {
    console.info('Express listen on port',config.port);
});
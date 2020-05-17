import React from 'react'
import ReactDOMServer from 'react-dom/server'
import config from './config';
import axios from 'axios';
import App from './src/components/App'

const serverRender = () =>
axios.get(`${config.serverUrl}/api/contestList`)
.then(res =>{
    //console.log(res.data.contestList);
   return{
       initialMarkup: ReactDOMServer.renderToString(
        <App initialContestList={res.data.contestList}/>
        ),
        initialData: res.data
       }
    })
.catch(error =>{
    console.error(error);
});


export default serverRender;
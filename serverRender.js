import React from 'react'
import ReactDOMServer from 'react-dom/server'
import config from './config';
import axios from 'axios';
import App from './src/components/App'

const getApiUrl = contestId => {
 //   console.log(contestId);
    if(contestId){
        return `${config.serverUrl}/api/contestList/${contestId}`;
    }
    return `${config.serverUrl}/api/contestList`;
};

const getInitialData=(contestId,apiData)=>{
 //   console.log(apiData);
if(contestId)
{
    console.log(apiData.id);
    return{
        selectedContestId:apiData.contestDetails.id,
        contestList:{
            [apiData.id]:apiData.contestDetails
        }
    };
}
return{
    contestList:apiData.contestList
    };
};

const serverRender = contestId =>
axios.get(getApiUrl(contestId))
.then(res =>{
    const initialData = getInitialData(contestId,res.data);
   return{
       initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData}/>
        ),
        initialData
       };
    })
.catch(error =>{
    console.error(error);
});


export default serverRender;
// video 1 from chapter 3
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


//console.log(data);
import App from './components/App';


axios.get('/api/contestList')
.then(resp => {
    ReactDOM.render(
        <App initialContestList={resp.data.contestList} />,
        document.getElementById('root')
    );
})
.catch(error => {
    console.error(error);
});



/*setTimeout(()=>{
    ReactDOM.render(
        <h2>Unmounted</h2>,
        document.getElementById('root')
    );
},4000);*/
// video 1 from chapter 3
import React from 'react';
import ReactDOM from 'react-dom';


//console.log(data);
import App from './components/App';


ReactDOM.render(
    <App initialContestList={[]} />,
    document.getElementById('root')
);

/*setTimeout(()=>{
    ReactDOM.render(
        <h2>Unmounted</h2>,
        document.getElementById('root')
    );
},4000);*/
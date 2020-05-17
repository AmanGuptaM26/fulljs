// video 1 from chapter 3
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


//console.log(data);
import App from './components/App';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/*setTimeout(()=>{
    ReactDOM.render(
        <h2>Unmounted</h2>,
        document.getElementById('root')
    );
},4000);*/
// video 1 from chapter 3
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const App =(props) => {
return (
    <h2 className="text-center">
        Hello React Component!
        {props.headerMessage}
    </h2>
);
};

//props must be validated
App.propTypes={
    headerMessage: PropTypes.string.isRequired
};

App.defaultProps={
    headerMessage:"default hello"
}
//const color =Math.random() > 0.5 ?'green':'red';
ReactDOM.render(
    //chapter 3 video 1 how to create tag
    //React.createElement('h2',null,'Hello React'),
    //chapter 3 video 1 how to directly use tag
    /*<h2 className='text-center' style={{backgroundColor: color}}>
        heelooooo this comes from babel -- {Math.random()}
         </h2>,*/ 

         <App headerMessage="hello props"/>,
    document.getElementById('root')
);
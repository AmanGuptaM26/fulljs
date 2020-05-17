// video 1 from chapter 3
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const Header =({message})=>{
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    );
};

//props must be validated
Header.propTypes={
    message: PropTypes.string.isRequired
};

const App =(props) => {
return (
    <div className='App'>
      <Header message="Naming contests" />
      <div>
          ....
      </div>
    </div>
);
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
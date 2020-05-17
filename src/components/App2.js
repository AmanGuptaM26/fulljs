import React from 'react';
import Header from './Header'

// making react statefull components with dynamic values
class App extends React.Component{
    /*constructor(props){
        super(props);
        this.state={test:43};
    }*/
    //no need to write constructor again.
    // Just write following which is equivalaent to above construtor code
   // state={test:44}

    //directly use console of dev tools
    //$r   -- this react this variable
    //$r.state  -- get component state
    //$r.setState({pageHeader:"testeing4444"})  //change state of component

      state= {
          pageHeader:"Naming contests"
      };
    render(){
        return (
            <div className='App'>
              <Header message={this.state.pageHeader} />
              <div>
                  {this.state.test}
              </div>
            </div>
        );
    }
}



export default App;
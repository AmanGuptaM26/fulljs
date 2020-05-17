import React from 'react';
import Header from './Header'

// making react statefull components with dynamic values
class App extends React.Component{
      state= {
          pageHeader:"Naming contests"
      };
      //component life cycle method
      componentDidMount(){
          console.log('Did Mount');
          debugger;
          //do ajax call, timers, listeners
      }
      componentWillUnmount(){
        console.log('Will Un Mount');
        debugger;
        // clean timers, listeners
      }
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
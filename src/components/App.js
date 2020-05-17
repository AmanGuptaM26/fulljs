import React from 'react';
import Header from './Header'
import ContestDetails from './ContestDetails'

// making react statefull components with dynamic values
class App extends React.Component{
      state= {
          pageHeader:"Naming contests"
      };
      //component life cycle method
      componentDidMount(){
          //do ajax call, timers, listeners
      }
      componentWillUnmount(){
        // clean timers, listeners
      }
    render(){
        return (
            <div className='App'>
              <Header message={this.state.pageHeader} />
              <div>
                  {this.props.contestList.map(contest=>
                    <ContestDetails {...contest}/>
                    )}
                  
              </div>
            </div>
        );
    }
}



export default App;
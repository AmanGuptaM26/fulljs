import React from 'react';
import Header from './Header'
import ContestDetails from './ContestDetails'
import data from '../testData';
// making react statefull components with dynamic values
class App extends React.Component{
      state= {
          pageHeader:"Naming contests",
          contestList:[]
      };
      //component life cycle method
      componentDidMount(){
          //do ajax call, timers, listeners
          this.setState({
              contestList:data.contestList
          });
      }
      componentWillUnmount(){
        // clean timers, listeners
      }
    render(){
        return (
            <div className='App'>
              <Header message={this.state.pageHeader} />
              <div>
                  {this.state.contestList.map(contest=>
                    <ContestDetails key={contest.id} {...contest}/>
                    )}
                  
              </div>
            </div>
        );
    }
}



export default App;
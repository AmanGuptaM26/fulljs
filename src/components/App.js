import React from 'react';
import Header from './Header';
import ContestDetails from './ContestDetails';
import ContestList from './ContestList';
//import axios from 'axios';

// making react statefull components with dynamic values
class App extends React.Component{
      state= {
          pageHeader:"Naming contests",
          contestList:this.props.initialContestList
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
              <ContestList contestList={this.state.contestList}/>
            </div>
        );
    }
}



export default App;
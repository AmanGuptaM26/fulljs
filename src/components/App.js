import React from 'react';
import Header from './Header'
import ContestDetails from './ContestDetails'
import axios from 'axios';

// making react statefull components with dynamic values
class App extends React.Component{
      state= {
          pageHeader:"Naming contests",
          contestList:[]
      };
      //component life cycle method
      componentDidMount(){
          //do ajax call, timers, listeners
axios.get('/api/contestList')
.then(resp => {
    //console.log(resp.data.contestList);
    this.setState({
        contestList:resp.data.contestList
    });
})
.catch(error => {
    console.error(error);
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
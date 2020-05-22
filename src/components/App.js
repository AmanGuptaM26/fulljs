import React from 'react';
import Header from './Header';
import ContestDetails from './ContestDetails';
import EachContest from './EachContest';
import ContestList from './ContestList';
import * as api from '../../allApi';
import PropTypes from 'prop-types';
//import axios from 'axios';

//using html history back
const pushState =(obj,url) =>
 window.history.pushState(obj,'',url);

 const onPopState = handler => {
 window.onpopstate=handler;
 };


// making react statefull components with dynamic values
class App extends React.Component{
    static propTypes= {
        initialData: PropTypes.object.isRequired
    }
    state=this.props.initialData;
    //   state= {
    //       //pageHeader:"Naming contests",
    //       contestList:this.props.initialContestList
    //   };
      //component life cycle method
      componentDidMount(){
          //do ajax call, timers, listeners
          onPopState((event) => {
            this.setState({
              selctedContestId:(event.state || {}).selctedContestId
            });
          });
      }
      componentWillUnmount(){
        // clean timers, listeners
        onPopState(null);
      }
      
      // to change url to slected content
      fetchContest=(contestId)=>{
        console.log(contestId);
          pushState(
              {
                selctedContestId:contestId
              },
            `/contestList/${contestId}`
          );

        api.fetchEachContestByID(contestId).then(contest =>{
            // set state as per selected contest
          this.setState({
           // pageHeader:contest.contestName,
            selctedContestId:contestId,
            contestList:{
                ...this.state.contestList,
                [contestId]:contest
            }
        });
        });
      
        //each data 
        // this.setState({
        //     pageHeader:this.state.contestList[contestId].contestName,
        //     selctedContestId:contestId,
        // }); 
      };

      // to change url to all content
      fetchContestList=()=>{
        pushState(
            {
              selctedContestId:null
            },
          '/'
        );

      api.fetchAllContestList().then(allContest =>{
          // set state as per selected contest
        this.setState({
         // pageHeader:contest.contestName,
          selctedContestId:null,
          contestList:allContest
      });
      });
    };

    getCurrentContest()
    {
        return this.state.contestList[this.state.selctedContestId];
    }
    getPageHeader()
    {
        if(this.getSelectedContestId())
        {
            return this.getCurrentContest().contestName;
        }
        return "Naming Contest"
    }
    getSelectedContestId()
    {
        return this.state.selctedContestId;
    }
      selctedContestContent(){
        console.log(1111);
        console.log(this.state.selctedContestId);
         if(this.state.selctedContestId){
             //just for testing
             /*return <ContestDetails
             key={this.state.selctedContestId} 
             onTestClick={this.fetchContest}
                    {...this.state.contestList[this.state.selctedContestId]}/>*/

                    return <EachContest
                    // backToListClick={this.fetchContestList}
                    {...this.getCurrentContest() }
                  
                    />
         }
         return <ContestList 
         onContestClick={this.fetchContest}
         contestList={this.state.contestList}/>
       
      }

    render(){
        return (
            <div className='App'>
              <Header message={this.getPageHeader()} />
              {/* <ContestList 
              onContestClick={this.fetchContest}
              contestList={this.state.contestList}/>
             */
            this.selctedContestContent()
            }
            </div>
        );
    }
}



export default App;
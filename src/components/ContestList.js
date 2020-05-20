import React from 'react';
import ContestDetails from './ContestDetails';
import PropType from 'prop-types'

const ContestList =({contestList,onContestClick}) =>(
<div className='contest-list'>
    {
        //this code when contestList is an array
    /*contestList.map(contest=>
        <ContestDetails key={contest.id} 
        onTestClick={onContestClick}
        {...contest}/>
    )*/
// this code when contest list is object
    Object.keys(contestList).map(contestID=>
        <ContestDetails
         key={contestID} 
        onTestClick={onContestClick}
        {...contestList[contestID]}/>
    )}
    }
 </div>
);

ContestList.propTypes = {
   // contestList:PropType.array,
   contestList:PropType.object,
    onContestClick:PropType.func.isRequired,

}

export default ContestList;
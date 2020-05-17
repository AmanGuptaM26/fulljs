import React from 'react';
import ContestDetails from './ContestDetails';
import PropType from 'prop-types'

const ContestList =({contestList}) =>(
<div className='contest-list'>
    {contestList.map(contest=>
        <ContestDetails key={contest.id} {...contest}/>
    )}
 </div>
);

ContestList.propTypes = {
    contestList:PropType.array
}

export default ContestList;
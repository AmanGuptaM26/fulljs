import React from 'react';



const ContestDetails =(contest) =>(
<div className="ContestDetails">
<div className='category-name'>
    {contest.categoryName}
</div>
<div className='contest-name'>
    {contest.contestName}
</div>
</div>
);

export default ContestDetails;
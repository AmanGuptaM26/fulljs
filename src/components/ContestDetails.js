import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ContestDetails extends Component {
    handelClick =()=>{
     //console.log(this.props.contestName);
     this.props.onTestClick(this.props.id);
    }
    render(){
        return(
            <div className="link ContestDetails" onClick={this.handelClick}>
            <div className='category-name'>
            {this.props.categoryName}
            </div>
            <div className='contest-name'>
            {this.props.contestName}
            </div>
            </div>
        )
    }
}

ContestDetails.propTypes ={
    contestName:PropTypes.string.isRequired,
    categoryName:PropTypes.string.isRequired,
    onTestClick:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
}

export default ContestDetails;
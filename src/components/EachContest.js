import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EachContest extends Component{
    render(){
        return(
            <div className="EachContest">
              {this.props.id}
              {this.props.desc}
            </div>
        );
    }
}

EachContest.propsTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string
};

export default EachContest;
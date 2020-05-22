import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EachContest extends Component{
    render(){
        return(
            <div className="EachContest">
              <div className="each-contest-details">{this.props.desc}</div>
              {/* {this.props.id} */}
              <div className="home-link link">
              {/* onClick={this.props.backToListClick()}> */}
                  Back to list
              </div>
            </div>
        );
    }
}

EachContest.propsTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string,
  //  backToListClick:PropTypes.func.isRequired,
};

export default EachContest;
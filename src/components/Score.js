import React, {Component, useState} from 'react';

class Score extends Component{

    render(){
        return(
            <div>
                <h1 >You scored {this.props.text}/{this.props.total}</h1>

            </div>
        );
    }
}
export default Score;
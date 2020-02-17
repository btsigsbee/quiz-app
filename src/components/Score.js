import React, {Component, useState} from 'react';

class Score extends Component{
    render(){
        return(
            <div>

                <h1 className='question'>{this.props.text}</h1>
            </div>
        );
    }
}
export default Score;
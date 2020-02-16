import React, {Component} from 'react';

class Question extends Component {


    render(){
        return(

            <div>
                <h1 className='question'>{this.props.text}</h1>
                 
            </div>
        );
    }
}
export default Question;
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css"
import Vec from './Germany_Team_Vector.svg'
import Quiz from './Quiz.js';



class Menu extends Component{
    state = {
        renderView:false
    };
    clickBtn= e =>{
        if(this.state.renderView === false){
            this.setState({renderView: true});
        }
        else {
            this.setState({renderView: false});
        };
    
    };
    render(){
        switch (this.state.renderView){
        
        case true: 
            return <Quiz />;
        default:
            return(
                <div className='menuCon'><h1 className='title'>Dortmund Trivia Quiz</h1>
                <img className= 'img' alt='logo' src={Vec}></img><br />
                <button className='btn' onClick={this.clickBtn}>Start Quiz</button>
                </div>
                
                );

    }
}
}
const rootElement = document.getElementById("root");

ReactDOM.render(<Menu />, rootElement);
import React, {Component} from 'react';
import "./assets/style.css"
import quizService from './quizService';
import Question from './components/Question';
import Score from './components/Score';
import Answer from './components/Answer';

class Quiz extends Component {
    state={
        questionBank: [],
        score:0,
        responses:0,
        questionNum:0,
        q: '',
        answers: '',
        id: 0, 
        selectedA: '',

        
    };
    
    getQuestions = () => {
        
        quizService().then(question=>{
            this.setState({questionBank: question});
            var QB= this.state.questionBank;
            this.setState({q: QB[0].question});
            this.setState({answers: QB[0].answers});
            this.setState({id: QB[0].id});
        });
        
              
        
        
        
        
        
        
        
            
        
    
    
    

    };
    checkGame(resp){
        if(resp === 5){
            
        }
        this.getQuestions();

    }
    checkAnswer = (pts, responses, answer, correctA) =>{
        if(correctA===answer){
            console.log(correctA + '  ' +answer);
            pts++;
            this.state.score = pts;
        }
        this.setState({score: pts});
        console.log(this.state.score);
        responses++;
        this.state.responses = responses;
        console.log('responses: '+ this.state.responses);
        this.checkGame(responses);       
    };
    
   
    startGame(){
        this.getQuestions()
        this.setState({score: 0});
    }
    componentDidMount() {
        this.startGame()
    };
render(){
    switch(this.state.responses){
        case 5:
            return(<div><Score  text={this.state.score}/><button className='playBtn'onClick={() => window.location.reload(false)}>Return to Menu</button></div> );
        default: 
            return(<div className='container' >
            
                <Question className='question'  text={this.state.q}/>
                {this.state.questionBank.map(({answers, correct, questionId})=>(
                <Answer options={answers} key={questionId} selected={answer=>this.checkAnswer(this.state.score, this.state.responses, answer, correct)}/>
                
                )
                )
                
        }
        </div>);


    }
    
}

}


export default Quiz;
import React, {Component} from 'react';
import "./assets/style.css"
import quizService from './quizService';
import QuestionBox from './components/QuestionBox.js';
import Result from './components/Result';

class Quiz extends Component {
    state={
        questionBank: [],
        score:0,
        responses:0,
        questionNum:0
    };
    getQuestions = () => {
        quizService().then(question => {
            
            this.setState({questionBank: question,
            
        });
        
        this.setState({questionNum: this.state.questionNum + 1});
        
            
        });
    };
    
    computeAnswer = (answer, correctAnswer) =>{
        if(correctAnswer === answer){
            this.setState({
                score: this.state.score + 1 

            });
            
        }
        this.setState({
            responses: this.state.responses + 1
        });
        this.checkGame();
    
    };
   


    checkGame(){
        if (this.state.questionNum < 5 && this.state.responses < 5)
        {
            this.getQuestions();
        }
        else{
        }
    }
     
    playAgain = () => {
        this.getQuestions();
        this.setState({
            responses: 0,
            score: 0,
            questionNum: 0

        });
    };

    startGame(){
        this.getQuestions()
    }
    componentDidMount() {
        this.startGame()
    };
render(){
    return(
        <div className ='container'>
            <div className='title'>Borussia Dortmund Quiz</div>
            {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(({question, answers, correct, questionId}) =>(
            <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer, correct)} />
            )
            )
            }
            {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}
    />):null}
        
            
        </div>
    );
}

}

export default Quiz;
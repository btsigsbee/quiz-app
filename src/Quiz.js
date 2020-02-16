import React, {Component} from 'react';
import "./assets/style.css"
import quizService from './quizService';
import Question from './components/Question';
import Result from './components/Result';
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
    checkAnswer = (pts, answer, correctA) =>{
        if(correctA===answer){
            console.log(correctA + '  ' +answer)
            console.log(this.state.score);
            console.log(pts);
            pts++;
            console.log(pts);
            

        }
        this.setState({score: pts});
        console.log(this.state.score);
        


    };
    
    
    startGame(){
        this.getQuestions()
        this.setState({score: 0});
    }
    componentDidMount() {
        this.startGame()
    };
render(){
    return(
        <div >
            <Question className='question'  text={this.state.q}/>
            {this.state.questionBank.map(({answers, correct, questionId})=>(
            <Answer options={answers} key={questionId} selected={answer=>this.checkAnswer(this.state.score, answer, correct)}/>

            ))
            
    }
    </div>
    );
}

}


export default Quiz;
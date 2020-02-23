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
        totalQs: 7,
        showScore: false,
        qID: []

        
    };
    
    getQuestions=()=>{
        
        quizService().then(question=>{
            this.setState({questionBank: question});
            var QB= this.state.questionBank;
            var qId = this.state.qID.concat(QB[0].questionId);
            
            this.setState({q: QB[0].question,
            answers:QB[0].answers,
            id: QB[0].questionId,
            qID: qId

            });
            
            
            
        });


    };
    checkGame(resp){
        if(resp===this.state.totalQs){
            this.setState({showScore: true});
        }
        this.getQuestions();
        

    }
    checkAnswer = (pts, responses, answer, correctA) =>{
        if(correctA===answer){
            pts++;
            this.state.score = pts;
        }
        this.setState({score: pts});
        responses++;
        this.state.responses = responses;
        this.checkGame(responses);       
    };
    playAgain= () => {
        this.setState({
            responses: 0,
            score: 0,
            showScore: false

        });
        this.getQuestions();

    }
    
   
    startGame(){
        this.setState({score: 0,
        responses:0,
        showScore: false
        });
        this.getQuestions();
        
    }
    componentDidMount() {
        
        this.startGame()
    };
render(){
    switch(this.state.showScore){
        case true:
            return(<div><Score text={this.state.score} total={this.state.totalQs} /><button className='playBtn'onClick={this.playAgain}>Play Again</button></div>)
        default:
            return(<div className='mainCon'><div className='container' >
            
                <Question className='question'  text={this.state.q}/>
                {this.state.questionBank.map(({answers, correct, questionId})=>(
                <Answer options={answers} key={questionId} selected={answer=>this.checkAnswer(this.state.score, this.state.responses, answer, correct)}/>
                
                )
                )
                
        }
        </div></div>);


    }
    
}
}



export default Quiz;
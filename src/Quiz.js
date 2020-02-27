import React, {Component} from 'react';
import "./assets/style.css"
import $ from 'jquery';
import Question from './components/Question';
import Score from './components/Score';
import Answer from './components/Answer';
import quizQuestions from './quizQuestions.js';


class Quiz extends Component {
 
    state={
        questionBank: [],
        score:0,
        responses:0,
        questionNum:0,
        q: '',
        answers: [],
        id: 0, 
        selectedA: '',
        totalQs: 7,
        showScore: false,
        qID: [],
        questionId: '',
        qToGet: '',
        qArray: []

        
    };
    getQNumber=()=>{
        this.state.qToGet=  Math.floor(Math.random()*50)+1;
        this.getQToAsk();

    }
    getQToAsk=()=>{
        if(this.state.qArray.includes(this.state.qToGet)){
            this.getQNumber();
              
      }
      this.state.qArray = this.state.qID.concat(this.state.qToGet);
      

    }
    getQuestions=()=>{
        this.getQNumber();
        
        
        var qToAsk = [];
        
        var Q = quizQuestions[this.state.qToGet];
        try{
        var shuffledA = Q.answers.sort(()=>0.5-Math.random());
        
        this.state.answers= shuffledA;
        this.state.questionId=Q.questionId;
        this.state.correct= Q.correct;
        this.state.q= Q.question;
        this.state.qID=this.state.qArray;
        this.state.questionBank=qToAsk;
        }
        catch{this.getQuestions();}

        
        
        

    
            
            
        


    };
    checkGame(resp){
        if(resp===this.state.totalQs){
            this.setState({showScore: true});
        }
        this.getQuestions();
        

    }
    checkAnswer = (pts, responses, answer, correctA) =>{
        if(answer===correctA||(correctA===answer)){
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
            showScore: false,
            qArray: []

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
        console.log('hey');
        this.startGame()
    };
render(){
    switch(this.state.showScore){
        case true:
            return(<div><Score text={this.state.score} total={this.state.totalQs} /><button className='playBtn'onClick={this.playAgain}>Play Again</button></div>)
        default:
            return(<div className='mainCon'><div className='container' >
                <div className='questionBox'>
            
                <Question className='question'  text={this.state.q}/>
                {
                <Answer options={this.state.answers} key={this.state.questionId} selected={answer=>this.checkAnswer(this.state.score, this.state.responses, answer, this.state.correct)}/>
                
    }
                
                
        
                </div></div></div>);


    }
    
}
}



export default Quiz;
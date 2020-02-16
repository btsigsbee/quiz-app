import React, {Component, useState} from 'react';

const AnswerBox = ({options, selected}) => {
    const [answers, setAnswer] = useState(options);
    return(
        <div>
            {answers.map((text, index) => (
                <button
                key={index}
                className='answerBtn'

                onClick={() => {
                    selected(text);
            
                    setAnswer([text]);
                    
                  }}
                  >
                      {text}
                  </button>
            ))}
        </div>


    );
};

export default AnswerBox;
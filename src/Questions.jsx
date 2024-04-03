import { useState } from 'react';

function Questions(props) {

    const questionsElements = props.questions.map(question => {
        const answerElements = question.answers.map(answer => <button 
            className='answer-btns' 
            style={answer.selected ? 
                {backgroundColor:'#D6DBF5', border:'none'} : 
                {backgroundColor:'transparent'}} 
                onClick={() => props.selectAnswer(answer.id)}>{answer.answer}</button>)
        return (
            <div className='question-container'>
                <h3 key={question.question} className='question'>{question.question}</h3>
                <div  className="answers">{answerElements}</div>
            </div>
        )
    }) 
    return (
        <main className=' main-questions'>
            <h1 className='heading'>Quizzical</h1>
            {questionsElements}
            <button className='btn check-btn' onClick={() => props.checkAnswers()} >Check answers</button>
        </main>
    )
}

export default Questions
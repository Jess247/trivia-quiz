import { useState } from 'react';

function Questions(props) {
    let styles = ''
    const selectedStyle = {
        backgroundColor:'#D6DBF5', 
        border:'none'
    }
    const correctStyle = {
        backgroundColor: '#94D7A2',
        border:'none'
    }
    const falseStyle = {
        backgroundColor: '#F8BCBC',
        border:'none'
    }


    const questionsElements = props.questions.map(question => {
        const answerElements = question.answers.map(answer => {
            if(answer.selected && answer.correct) {
                styles = correctStyle
            } else if(answer.selected && !answer.correct && props.isChecked) {
                styles = falseStyle
            } else if (answer.selected && !answer.correct) {
                styles = selectedStyle
            }else {
                styles = {backgroundColor: 'transparent'}
            }
        return (<button 
            className='answer-btns' 
            style={styles} 
                onClick={() => props.selectAnswer(answer.id)}>{answer.answer}</button>)})
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
            {props.isChecked ? <div className='score' onClick={props.playAgain}><p>You scored <span>{props.score}</span>/5 correct answers</p><button className='btn ' onClick={() => props.checkAnswers()} >Play Again</button></div> : <button className='btn check-btn' onClick={() => props.checkAnswers()} >Check answers</button>}
        </main>
    )
}

export default Questions
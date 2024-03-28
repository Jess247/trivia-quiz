import {useState} from 'react'

function Start(props) {
    return (
        <main className='main'>
            <h1 className='heading'>Quizzical</h1>
            <h3 className='sub-heading'>Test your brain with these tricky trivia questions.</h3>
            <button className='btn' onClick={props.startQuiz}>Start quiz</button>
        </main>
    )
}

export default Start
import { useState } from "react";
import { questions } from "./test-data";

function Questions() {

    const questionsElements = questions.map(question => {
        const answerElements = question.answers.map(answer => <button className="answer-btns">{answer}</button>)
        return (
            <div className="question-container">
                <h3 className="question">{question.question}</h3>
                <div className="answers">{answerElements}</div>
            </div>
        )
    }) 
    return (
        <main className=" main-questions">
            <h1 className="heading">Quizzical</h1>
            {questionsElements}
            <button className="btn check-btn">Check answers</button>
        </main>
    )
}

export default Questions
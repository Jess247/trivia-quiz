import { useState, useEffect } from 'react'
import {decode} from 'html-entities'
import { nanoid } from 'nanoid'
import Questions from './Questions'
import Start from './Start'


function App() {
  const [isQuiz, setIsQuiz] = useState(false)
  const [allQuestions, setAllQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => {
        if(!res.ok) {
          throw res
        }
        return res.json()
      })
      .then(data => {
        const questionObj = data.results.map(result =>
            ({
            id: nanoid(),
            key: nanoid(),
            question: decode(result.question),
            correctAnswer: decode(result.correct_answer),
            answers: [...decode(result.incorrect_answers), decode(result.correct_answer)]
            }))
        setAllQuestions(questionObj)

        // loop through questions and save correct answers in new array
        const corAns = questionObj.map(que => que.correctAnswer)
        setCorrectAnswers(corAns)
      })
      .catch(err => console.log(err))
  }, [])


  useEffect(() => {
    const newAllQuestions = allQuestions.map(que => {
      const newAnswers = que.answers.map((answer,index) => ({answer:answer, selected: false, id: que.id+index, key:nanoid()}))
      return {...que, answers: newAnswers}
    })
    setAllQuestions(newAllQuestions)
    
  },[isQuiz])

  useEffect(() => {
    const uAnswers = []
    allQuestions.map(question => question.answers.map(answer => {
      if(answer.selected) {
        uAnswers.push(answer)
      }
    }))
    setUserAnswers(uAnswers)
  }, [allQuestions])


  function startQuiz() {
    setIsQuiz(prevIsQuiz => !prevIsQuiz)
  }

  function selectAnswer(id) {
    setAllQuestions(prevAllQuestions => prevAllQuestions.map(question => {
      if(question.id === id.slice(0,-1)) {
        const newAnswers = question.answers.map(answer => {
          return answer.id === id && question.id === id.slice(0,-1) ? {...answer, selected: !answer.selected} : {...answer, selected:  false}
        })
        return {...question, answers: newAnswers}
      } else {
        return question
      }
    }))
  }

  function checkAnswers() {
    for(let i = 0; i < userAnswers.length; i++) {
      if(userAnswers[i].answer === correctAnswers[i]) {
        console.log("Yay")
      } else {
        console.log("Nay")
      }
    }
  }

  return (
    <>
    <div className='blob blob-top'>
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
              <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
      </div>
      {!isQuiz ? <Start startQuiz={startQuiz}/> :
      <Questions questions={allQuestions} selectAnswer={selectAnswer} checkAnswers={checkAnswers}/>}
      <div className='blob blob-bottom'>
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
              <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
      </div>
    </>
  )
}

export default App

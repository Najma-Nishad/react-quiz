import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import { questions } from '../quiz'
import { Button } from 'react-bootstrap'



function Home() {
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [showScore,setShowScore]=useState(false)
    const [selectedAnswer,setSelectedAnswer]=useState('')
    const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(null)
const [score,setScore]=useState(0)

    const handleAnswer=()=>{
        // if(correctAnswer){
        //     alert("ans is correct")
        // }
        const nextQuestion=currentQuestion+1;
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion)
          setSelectedAnswerIndex(null)
        }
       else{
        
        setShowScore(true)
       } 

    }
    const selectedoption=(option,index)=>{
        setSelectedAnswerIndex(index)
        if(option===questions[currentQuestion].correctAnswer){
setSelectedAnswer(true)
setScore(score+1);

        }
        // else{
        //     setSelectedAnswer(false)
            
        // }
    }

  return (
    <div   >
        <div>{showScore?<div className='container justify-content-center border shadow text-center text-black fw-bold fs-2 p-5 mt-5'  >You Scored {score} out of {questions.length}</div>: 
        <Container className=" justify-content-center border shadow mt-5 my-5 " style={{width:'40rem',height:'30rem'}}>
            
            <div className='p-2 m-3 shadow text-black fw-semibold fs-5' style={{width:'35rem',height:'5rem'}}><span>{currentQuestion+1}. </span>{questions[currentQuestion].question}</div>
            <div className=''>{questions[currentQuestion].choices.map((option,index)=>(
                <button id="click" onClick={()=>selectedoption(option,index)} key={option} className={selectedAnswerIndex===index?'selected-answer':null}  >{option}</button>

            ))}
            </div>
            <div className='text-center'>
                <Button onClick={handleAnswer} disabled={selectedAnswerIndex===null} className='btn btn-success text-center p-1 mt-3 w-25'>
                    {currentQuestion===questions.length-1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </Container>
}
        </div>
       
    </div>
  )
}

export default Home

// btn btn-outline-dark w-100 p-3 mt-3'
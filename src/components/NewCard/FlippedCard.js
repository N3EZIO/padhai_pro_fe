import React from 'react'

import './card.css'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'



const FlippedCard = ({data, data_body, handleCardFlip, handleClick, selectedOptionId, loading}) => {
    return(
         (<div className={`card mb-3 card-flip ${selectedOptionId && (selectedOptionId == data_body["Correct Option"] ? 'card-correct-answer' : 'card-wrong-answer')}`}>
                <div className='card-header'>{data_body["Topic"]}</div>
                <div className='card-body'>
                    <div className='card-title fs-3'>Solution</div>
                    {/* <div className='card-text fs-5'>Your Answer :- <br /> <b>{selectedOptionId + ') ' + (selectedOptionId && data.options.filter(obj => obj.id === selectedOptionId)[0].text) } </b></div> */}
                    <br />
                    <div className='card-text fs-5'>Correct Answer :- <br /> <b>{data_body["Correct Option"] + ') ' + data_body[`Option ${data_body["Correct Option"]}`]}</b></div>
                    <br />
                    <div className='card-text'>Explanation :- <br />{data.greeting}</div>
                </div>
                <div className='card-footer'>
                    <Stack gap={2}>
                        <Button className='w-100' variant="primary" onClick={ handleCardFlip }>Back to Question</Button>
                        <Button className='w-100' variant="primary" onClick={ handleClick }>Next Question</Button>
                    </Stack>
                </div>
            </div>)
    )
}

export default FlippedCard;


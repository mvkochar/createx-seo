import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number,
    question: string
    answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [viewAnswer, setViewAnswer] = React.useState(false)
    const handleAnswer = () => {
        setViewAnswer((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item}>
            <div className={classes.faq_item_heading}>
                <button className='btn-clear d-b' onClick={handleAnswer}>
                    <img src={viewAnswer ? "/images/minus.png" : "/images/plus.png" } alt="minus/plus" />
                </button>
                <h3 className={classes.faq_item_question}>{question}</h3>
            </div>
            <p className={viewAnswer ? classes.faq_item_answer : 'd-n'}>{answer}</p>
        </div>
    )
}

export default FaqItem
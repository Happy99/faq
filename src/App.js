import { useState } from "react"
import Question from "./components/Question"

import questionsData from "./data"

const App = () => {
    const [questions, setQuestions] = useState(questionsData)

    return (
        <div className="questions">
            {
                questions.map( (question, index) => {
                    const {id, title, info} = question

                    return(
                        <Question 
                            key={index}
                            id={id}
                            title={title}
                            info={info}
                        />
                    )
                })
            }
        </div>
    )
}

export default App
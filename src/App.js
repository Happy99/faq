import { useState } from "react"
import Question from "./components/Question"

import questionsData from "./data"

const App = () => {
    const [questions, setQuestions] = useState(questionsData)

    return (
        <div className="questions">
            {
                questions.map( (question, index) => {
                    return <Question key={index} {...question} />
                })
            }
        </div>
    )
}

export default App
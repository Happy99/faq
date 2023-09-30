import "./Question.css"

import { useState } from "react"

const Question = ({title, info}) => {
    const [ukazOdpoved, setUkazOdpoved] = useState(false)

    return (
        <div className="question">
            <h1>{title}</h1>
            {ukazOdpoved && <p>{info}</p>}
            <button type="button" onClick={ () => setUkazOdpoved(!ukazOdpoved) }>Ukaz/Skryj</button>
        </div>
    )
}

export default Question
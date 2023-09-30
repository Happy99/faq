import "./Question.css"

import { useState } from "react"

const Question = ({title, info}) => {
    const [ukazOdpoved, setUkazOdpoved] = useState(false)

    return (
        <div className="question">
            <section>
                <h1>{title}</h1>
                <button type="button" onClick={ () => setUkazOdpoved(!ukazOdpoved) }>Ukaz/Skryj</button>
            </section>
            {ukazOdpoved && <p>{info}</p>}
        </div>
    )
}

export default Question
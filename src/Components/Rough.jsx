import React from 'react'

export default function Pad({ pad }) {
    /**
     * Challenge:
     * Create state controlling whether
     * this pad is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the pad is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each pad should toggle it on and off.
     */

    const [on, setOn] = React.useState(pad.on)

    const handleOn = () => {
        setOn(prev => !prev)
    }

    return (
        <button
            onClick={handleOn}
            style={{ backgroundColor: pad.color }}
            className={on ? 'on' : undefined}
        ></button>
    )
}


// App
import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} pad={pad} />
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

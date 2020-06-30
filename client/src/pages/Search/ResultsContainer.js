import React from 'react'

export default function ResultsContainer(props) {
    return (
        <div className = "row">
            <div className = "container rounded" style = {{border : "5px groove grey", padding : "40px"}}>
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

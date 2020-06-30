import React from 'react'

export default function SearchContainer(props) {
    return (
        <div className = "row">
            <div className = "container rounded" style = {{border : "5px groove grey", padding : "40px"}}>
                {props.children}
            </div>
        </div>
    )
}

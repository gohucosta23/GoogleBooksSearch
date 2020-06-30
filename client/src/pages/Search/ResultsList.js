import React from 'react';

export default function ResultsList(props) {
    return (
        <li>
            <div className = "row rounded mb-3" style = {{border : "5px groove grey", padding : "10px"}}>
                <div className = "col-2">
                    <img src = {props.thumbnail} alt = {props.title} className = "mt-5"/>
                </div>
                <div className = "col-9 mx-auto" style = {{padding : "30px 0px 30px 20px"}}>
                    <h3 className = "text-center">Title : {props.title}</h3>
                    <br></br>
                    <p>Authors : {props.authors}</p>
                    <p>Description : {props.description}</p>
                    <div className = "row justify-content-between"><a href = {props.link}>More info...</a>
                    <button className = "btn btn-primary" onClick = {props.handleSave}>Save Book</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

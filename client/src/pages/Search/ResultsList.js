import React from 'react';

export default function ResultsList(props) {

    const handleSaveItem = () => {
        
        const data = {
            title : props.title,
            authors : props.authors,
            thumbnail : props.thumbnail,
            description : props.description,
            link : props.link
        }
            props.handleSave(data)
        
    }

    return (
        <li>
            <div className = "row rounded mb-3" style = {{border : "5px groove grey", padding : "10px"}}>
                <div className = "col-2">
                    <img name = "image" value= {props.thumbnail}  src = {props.thumbnail} alt = {props.title} className = "mt-5"/>
                </div>
                <div className = "col-9 mx-auto" style = {{padding : "30px 0px 30px 20px"}}>
                    <h3 className = "text-center" name = "title" value = {props.title}>Title : {props.title}</h3>
                    <br></br>
                    <p name = "authors" value = {props.authors}>Authors : {props.authors}</p>
                    <p name = "description" value = {props.description}>Description : {props.description}</p>
                    <div name = "link" value = {props.link} className = "row justify-content-between"><a href = {props.link}>More info...</a>
                    <button className = "btn btn-primary" onClick = {handleSaveItem}>Save Book</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

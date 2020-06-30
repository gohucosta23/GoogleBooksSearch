import React from 'react'

export default function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label >Search Book</label>
                <input type="text" placeholder = "Book Name" className="form-control" name = "search" value = {props.search} onChange = {props.handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-success" onClick = {props.handleSubmit}>Submit</button>
        </form>
    )
}

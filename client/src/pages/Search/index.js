import React, {useState, useEffect} from 'react';
import SearchContainer from "./SearchContainer";
import SearchForm from "./SearchForm";
import ResultsContainer from "./ResultsContainer";
import ResultsList from "./ResultsList";
import API from "../../utils/API";

export default function index() {

    const [search, setSearch] = useState("harry potter");
    const [results, setResults] = useState([]);

    useEffect(() => {
        searchBooks(search)
    }, []);

    function searchBooks(search) {
        API.search(search)
        .then(res => 
            setResults(res.data.items))
            .catch(err => console.log(err));
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSearch({[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search) {
            API.search(search.search)
            .then(res => {
                setResults(res.data.items)
                console.log("First" , results[0].volumeInfo)
            }).then(console.log("Second" ,results[0].volumeInfo))
            .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <SearchContainer>
                <SearchForm 
                handleInputChange = {handleInputChange}
                handleSubmit = {handleSubmit}/>
            </SearchContainer>
            <br></br>
            <ResultsContainer>
                {results.map(book => (
                    <ResultsList 
                    key = {book.id}
                    title = {book.volumeInfo.title}
                    authors = {book.volumeInfo.authors}
                    description = {book.volumeInfo.description}
                    thumbnail = {book.volumeInfo.imageLinks.thumbnail}
                    link = {book.volumeInfo.infoLink}/>
                ))}
            </ResultsContainer>
        </div>
    )
}

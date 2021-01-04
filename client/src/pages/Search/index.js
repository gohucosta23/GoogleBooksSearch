import React, { useState, useEffect } from 'react';
import SearchContainer from "./SearchContainer";
import SearchForm from "./SearchForm";
import ResultsContainer from "./ResultsContainer";
import ResultsList from "./ResultsList";
import API from "../../utils/API";
import DatabaseAPI from "../../utils/DatabaseAPI";

export default function index() {

    const [search, setSearch] = useState("harry potter");
    const [results, setResults] = useState([]);
    const [book, setBook] = useState({});
    const bookInput = document.getElementById("bookName")

    useEffect(() => {
        searchBooks(search)
    }, []);

    function searchBooks(search) {
        API.search(search)
            .then(res => {
                setResults(res.data.items)
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearch({ [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            API.search(search.search)
                .then(res => {
                    setResults(res.data.items)
                    bookInput.value = " ";
                })
                .catch(err => console.log(err));
        }
    }

    const handleSave = (data) => {

        setBook(data)
        console.log(book)
        // DatabaseAPI.saveBook(book)
        // .then(console.log("Book Saved"))
        // .catch(err => console.log(err));

    }
    console.log(book)

    return (
        <div>
            <SearchContainer>
                <SearchForm
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit} />
            </SearchContainer>
            <br></br>
            <ResultsContainer>
                {results.map(book => (
                    <ResultsList
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.infoLink}
                        handleSave={handleSave} />
                ))}
            </ResultsContainer>
        </div>
    )
}

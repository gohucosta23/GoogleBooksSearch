import axios from "axios";

export default {

    getBooks : function() {
        return axios.get("/api/books");
    },
    saveBook : function(bookData) {
        axios.post("/api/books", bookData);
    },
    deleteBook : function(id) {
        axios.delete("api/books" + id);
    }
}
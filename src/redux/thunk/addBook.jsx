import { addBooks } from "../books/actions";

const addBook = (book) => {
   return async (dispatch) => {
        const response = await fetch("http://localhost:9000/books", {
            method : "POST",
            body : JSON.stringify(book),
            headers : {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        const inputBooks = await response.json();
    
        dispatch(addBooks(inputBooks))
    };
};

export default addBook;
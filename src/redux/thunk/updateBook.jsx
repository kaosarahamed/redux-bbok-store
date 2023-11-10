import { updateBooks } from "../books/actions";

const updateBook = (isUpdate, book) => {
    return async (dispatch) => {
         const response = await fetch(`http://localhost:9000/books/${isUpdate}`, {
             method : "PATCH",
             body : JSON.stringify(book),
             headers : {
                 "content-type": "application/json; charset=UTF-8"
             }
         });
         const books = await response.json();
     
         dispatch(updateBooks(books.id, books))
     };
 };

export default updateBook;
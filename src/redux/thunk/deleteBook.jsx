import { deleteBooks } from "../books/actions";


const deleteBook = (id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/books/${id}`, {
            method : "DELETE",
        });
    
        dispatch(deleteBooks(id))
    };
};

export default deleteBook;
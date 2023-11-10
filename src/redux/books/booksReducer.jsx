import { ADDBOOKS, DELETEBOOKS, UPDATEBOOKS, LOADBOOKS } from "./actionType";
import initialState from "./initialBoks";


const maxId = (state) => {
    const maxID = state.reduce((maximumID, books) => Math.max(books.id, maximumID) -1);
    return maxID + 1;
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADBOOKS:
            return action.payload
        case ADDBOOKS:
            return[
                ...state,
                {
                    name : action.payload.name,
                    author : action.payload.author,
                    thumbnail : action.payload.thumbnail,
                    price : action.payload.price,
                    rating : action.payload.rating,
                    featured : action.payload.featured,
                    id : maxId(state)

                }
            ] 
        case UPDATEBOOKS:
            return state.map((item) => item.id === action.payload.id ? {...action.payload.books} : item)
        case DELETEBOOKS:
            return state.filter((item) => item.id !== action.payload)   
        default:
            return state;
    }
}

export default booksReducer;

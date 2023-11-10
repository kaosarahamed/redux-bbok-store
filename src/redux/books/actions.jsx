import { LOADBOOKS, ADDBOOKS, UPDATEBOOKS, DELETEBOOKS } from "./actionType";


export const loadBooks = (books) => {
    return{
        type : LOADBOOKS,
        payload : books
    }
};

export const addBooks = (inputBooks) => {
    return{
        type : ADDBOOKS,
        payload : inputBooks
    }
};

export const updateBooks = (id, books) => {
    return{
        type : UPDATEBOOKS,
        payload : {
            id, books
        }
    }
};

export const deleteBooks = (id) => {
    return{
        type : DELETEBOOKS,
        payload : id
    }
}
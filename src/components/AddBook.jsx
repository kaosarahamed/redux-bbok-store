import { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import updateBook from "../redux/thunk/updateBook";
import addBook from "../redux/thunk/addBook";


function AddBook({ isUpdate, setIsUpdate}) {
    const books = useSelector(state => state.books);
    

    const dispatch = useDispatch()
    const [book, setBook] = useState({
        name : "",
        author : "",
        thumbnail : "",
        price : 0,
        rating : 0,
        featured : false
    });



    const {name, author, thumbnail, price, rating, featured } = book

    useEffect(() => {
      books.map((item) => item.id === isUpdate && setBook(item))
    },[books, isUpdate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isUpdate){
          dispatch(updateBook(isUpdate, book));
          setIsUpdate(false);
          setBook({
            name : "",
        author : "",
        thumbnail : "",
        price : 0,
        rating : 0,
        featured : false
        })
        }else{
          dispatch(addBook(book));
        setBook({
            name : "",
        author : "",
        thumbnail : "",
        price : 0,
        rating : 0,
        featured : false
        })
        }
    }


    const handleChange = (fieldName, e) => {
      switch(fieldName){
        case "price": 
        setBook({ ...book, [fieldName]: Number(e.target.value) })
        break;
  
        case "rating": 
        setBook({ ...book, [fieldName]: Number(e.target.value) })
        break;
  
        case "featured":
          setBook((prev) => {
            return { ...book, [fieldName]: !prev.featured }
          })
          break;
  
        default:
          setBook({ ...book, [fieldName]: e.target.value })
      }
    }

    

    return (
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input required className="text-input" type="text" id="input-Bookname" value={name} name="name" onChange={(e) => handleChange("name", e)}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="category">Author</label>
              <input required className="text-input" type="text" id="input-Bookauthor" value={author} name="author" onChange={(e) => handleChange("author", e)}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input required className="text-input" type="text" id="input-Bookthumbnail" value={thumbnail} name="thumbnail" onChange={(e) => handleChange("thumbnail",e)}/>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input required className="text-input" type="number" id="input-Bookprice" value={price} name="price" onChange={(e) => handleChange( "price",e)}/>
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input required className="text-input" type="number" id="input-Bookrating" value={rating} name="rating" min="1" max="5" onChange={(e) => handleChange( "rating",e)}/>
              </div>
            </div>

            <div className="flex items-center">
              <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} value={featured} onChange={(e) => handleChange( "featured", e)}/>
              <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="submit">{isUpdate ? "Update Book" : "Add Book"}</button>
          </form>
        </div>
    )
}

AddBook.propTypes = {
  isUpdate : PropTypes.any,
  setIsUpdate : PropTypes.any
}


export default AddBook

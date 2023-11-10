import { useDispatch, useSelector } from 'react-redux'
import AddBook from './AddBook'
import Book from './Book'
import React, { useEffect, useState } from 'react';
import Header from './Header';
import fetchBooks from '../redux/thunk/fetchBooks';

function Home() {

    const books = useSelector(state => state.books);
    const [isUpdate, setIsUpdate] = useState();
    const [filterFeatured, setFilterFeatured] = useState(false)
    const [searchText, SetSearch] = useState("");
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(fetchBooks)
    },[dispatch])

    // feature filter 
    const featureFilterHandler = (item)=>{
      if (filterFeatured) {
          return item.featured
      } else {
          return true
      }
  }
  
  // search filter 
  const searchFilterHandler = (item)=>{
      if(searchText){
          return item.name.toLowerCase().includes(searchText?.toLowerCase())
          }else{
              return true
          }
  }

    return (
      <React.Fragment>
      <Header SetSearch={SetSearch}/>
        <main className="py-12 2xl:px-6">
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
                                <button onClick={() => setFilterFeatured(false)} className={`filter-btn ${!filterFeatured && 'active-filter'}`} id="lws-filterAll">All</button>
                                <button onClick={() => setFilterFeatured(true)} className={`filter-btn ${filterFeatured && 'active-filter'}`} id="lws-filterFeatured">Featured</button>
                            </div>
        </div>
        <div className="lws-bookContainer">
          {books && books.filter(searchFilterHandler).filter(featureFilterHandler).map((item) => <Book key={item.id} item={item} setIsUpdate={setIsUpdate}/>)}
        </div>
      </div>
      <div>
        <AddBook isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
      </div>
    </div>
  </main>
  </React.Fragment>
    )
}

export default Home

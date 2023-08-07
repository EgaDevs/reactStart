import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"
import PropBook from './propBook';
import TagBook from './tagBook';
import {booksDelete, booksEdit} from '../store/book/bookSlice';
import EditBook from './editBook';
import style from '../style/book.css';

function ListBook() {
    const listBook = useSelector(state => state.books.books);
    const dispatch = useDispatch()
    const [id, setId] = useState(0)

    function del(event) {
        const id = Number(event.target.id)
        dispatch(booksDelete(id))
    }
    function edit(event) {
        setId(Number(event.target.id - 1))
    }
    function bookEdit(event) {
        event.preventDefault()
        const name = event.target.name.value
        const year = event.target.year.value
        const author = event.target.author.value
        console.log(id);
        dispatch(booksEdit({id: id, name: name, year: year, author: author}))
    }

    return (
        <div>
            <div className='shelf'>
            {listBook.map((book) => {
                return (
                    <PropBook {...book} booksDelete={del} edit = {edit} key={book.id}/>
                    )
                })}
            </div>
            <TagBook listBook={listBook}/>
            <EditBook editBook={bookEdit} id={id}/>
        </div>
    )
}

export default ListBook;
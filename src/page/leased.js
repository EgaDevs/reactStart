import { useSelector, useDispatch } from "react-redux";
import { booksClear } from "../store/user/userSlice";
import { booksReturn } from "../store/book/bookSlice";

function Leased() {
    const books = useSelector(state => state.books.booksLeased)
    const dispatch = useDispatch()
    function returnBook(event) {
        const id = Number(event.target.id)
        const bookName = books[id].book[0].name
        dispatch(booksReturn([bookName]))
        dispatch(booksClear(bookName))
    }
    return ( 
        <div>
            <h2 className="title">Leased books</h2>
            <div>
                {books.map((el, index) => {
                    return el.books.map(book => {
                        return (
                            <div key={book.id}>
                                <div>{book.name}</div>
                                <div>{el.lender}</div>
                                <button onClick={returnBook} id = {index}>Вернуть</button>
                            </div>
                        )    
                    })
                })}
            </div>
        </div>
    );
}

export default Leased;
import { useSelector, useDispatch } from "react-redux";
import { booksAdd } from "../store/user/userSlice";
import { booksLease } from "../store/book/bookSlice";

function Lease() {
    const [books, users] = useSelector(state => [state.books.books, state.user.users])
    const dispatch = useDispatch()
    function leaseBook(event) {
        event.preventDefault();
        const userName = event.target.user.value 
        const bookName = event.target.book.value
        dispatch(booksAdd({name: userName, book: bookName}))
        dispatch(booksLease({name: userName, book: bookName}))
    }
    return (  
        <div>
            <h2 className="title">Take book</h2>
            <form onSubmit={leaseBook}>
                <select name="book">
                    {books.map(book => {
                        if(book.status === 'выдана') {
                            return ''
                        }else {
                            return (
                                <option key={book.id}>{book.name}</option>
                            )
                        }
                    })}
                </select>
                <select name = "user">
                    {users.map(user => {
                        return (
                            <option id={user.id} key={user.id}>{user.name} {user.surname}</option>
                        )
                    })}
                </select>
                <button>Lease</button>
            </form>
        </div>
    );
}

export default Lease;
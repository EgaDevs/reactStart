import {useDispatch} from 'react-redux';
import {booksAdd} from '../store/book/bookSlice';

function TagBook({listBook}) {
    const dispatch = useDispatch();
    return ( 
        <div>
            <form onSubmit ={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const author = e.target.author.value;
                const year = e.target.year.value;
                const id = listBook.length + 1;
                const status = "not given";
                dispatch(booksAdd({name: name, author: author, year: year, id: id, status: status}))
            }}>
                <input type="text" name="name" placeholder="Enter name of book"/>
                <input type="text" name="author" placeholder="Enter author"/>
                <input type="text" name="year" placeholder="Enter year of book"/>
                <button type="submit">Tag</button>
            </form>
        </div>
     );
}

export default TagBook;
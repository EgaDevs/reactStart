function EditBook({editBook}) {
    return ( 
        <div>
            <form onSubmit = {editBook}>
                <input type="text" name="name" placeholder="Enter name of book"/>
                <input type="text" name="author" placeholder="Enter author"/>
                <input type="text" name="year" placeholder="Enter year of book"/>
                <button type="submit">Edit</button>
            </form>
        </div>
     );
}

export default EditBook;
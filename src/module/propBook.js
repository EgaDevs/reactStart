function PropBook({id,name,author,year,status,booksDelete, edit}) {
    return (
            <div className="books">
                <div className="book">
                    <div>{id}</div>
                    <div>{name}</div>
                    <div>{author}</div>
                    <div>{year}</div>
                    <div>{status}</div>
                    <button id={id} onClick={booksDelete}>Delete</button>
                    <button id={id} onClick={edit} value="test">Edit</button>
                </div>
            </div>
    )
}

export default PropBook;
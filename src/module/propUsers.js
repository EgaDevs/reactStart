function PropUsers({name, surname, books, id, del, getId}) {
    return ( 
        <div>
            <div>{name} {surname}</div>
            {books ? <div>{books}</div> : <div></div>}
            <button id = {id} onClick = {del}>delete</button>
            <button id = {id} onClick = {getId}>edit</button>
        </div>
    );
}

export default PropUsers;
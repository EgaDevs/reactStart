function TagUser({addNewUser}) {
    return ( 
        <div>
            <form onSubmit ={addNewUser}>
                <input type = "text" name = "name" placeholder = "name"/>
                <input type = "text" name = "surname" placeholder = "surname"/>
                <button type = "submit">Tag</button>
            </form>
        </div>
    );
}


export default TagUser;
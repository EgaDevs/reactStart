function EditUser({userEdit}) {
    return ( 
        <div>
            <form onSubmit ={userEdit}>
                <input type = "text" name = "name" placeholder = "name"/>
                <input type = "text" name = "surname" placeholder = "surname"/>
                <button type = "submit">edit</button>
            </form>
        </div>
    );
}


export default EditUser;
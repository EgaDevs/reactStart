import { useSelector, useDispatch } from "react-redux"
import { userDelete, userAdd, userEdit } from "../store/user/userSlice"
import { useState } from "react"
import PropUsers from "./propUsers"
import TagUser from "./tagUser"
import EditUser from "./editUser"

function UserList() {
    const [add, setAdd] = useState(false)
    const [bool, setBool] = useState(false)
    const [id, setId] = useState(0)
    function addUser () {
        setAdd(true)
    }
    const userList = useSelector(state => state.user.users)
    const dispatch = useDispatch()
    function del(event) {
        const id = Number(event.target.id)
        const book = userList[id - 1].books
        console.log(book);
        dispatch(userDelete(id))
    }
    function addNewUser(event) {
        event.preventDefault();
        const name = event.target.name.value
        const surname = event.target.surname.value
        const id = userList.length + 1
        const books = []
        dispatch(userAdd({name: name, surname: surname, id: id, books: books}))
        setAdd(false)
    }
    function getId(event) {
        const id = Number(event.target.id - 1)
        setId(id)
        setBool(true)
    }
    function editUser(event) {
        event.preventDefault()
        const name = event.target.name.value
        const surname = event.target.surname.value
        dispatch(userEdit({id: id, name: name, surname: surname}))
        setBool(false)
    }
    return ( 
        <div>
            {userList.map((user) => {
                return (
                    <PropUsers {...user} key = {user.id} del = {del} getId = {getId}/>
                )
            })}
            <button onClick={addUser}>Add User</button>
            {add ? <TagUser addNewUser={addNewUser}/> : <div></div>}
            {bool ? <EditUser userEdit={editUser}/> : <div></div>}
        </div>
    );
}

export default UserList;
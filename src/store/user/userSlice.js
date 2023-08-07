import { createSlice } from '@reduxjs/toolkit'

const userList = [
    {
        id: 1,
        name: 'John',
        surname: 'Johns',
        books: [],  
    },
    {
        id: 2,
        name: 'Conor',
        surname:'McGregor',
        books: [],  
    },
    {
        id: 3,
        name: 'Khabib',
        surname:'Nurmagomedov',
        books: [],  
    },
]

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: userList,
  },
  reducers: {
    userDelete: (state, {payload} ) => {
        state.users = state.users.filter(el => el.id !== payload)
        state.users.forEach(el => {
            if(el.id > payload) {
                el.id = el.id - 1
            }
        })
    },
    userAdd: (state, {payload}) => {
        state.users.push(payload)
    },
    userEdit: (state, {payload}) => {
        state.users[payload.id].name = payload.name
        state.users[payload.id].surname = payload.surname
    },
    booksAdd: (state, {payload} ) => {
        if(payload) {
            const arr = payload.name.split(' ')
            const currName = arr[0]
            const proxy = JSON.parse(JSON.stringify(state.users))
            const result = proxy.filter(el => el.name === currName)
            const bookName = payload.books
            const id = result[0].id
            state.users[id - 1].books.push(bookName)
        }
    },
    booksClear: (state, {payload}) => {
        state.users.forEach(el => {
            el.books = el.books.filter(item => item !== payload)
        })
    }
  }
})
// Action creators are generated for each case reducer function
export const { userAdd, userDelete, userEdit, booksAdd, booksClear } = userSlice.actions

export default userSlice;
import { createSlice } from '@reduxjs/toolkit';
const bookList = [
    {
        id: 1,
        name: 'Financier',
        author: 'Theodore Dreiser',
        year: 1912,
        status: 'given',
    },
    {
        id: 2,
        name: 'Titan',
        author: 'Theodore Dreiser',
        year: 1912,
        status: 'given',
    },
    {
        id: 3,
        name: 'Stoic',
        author: 'Theodore Dreiser',
        year: 1912,
        status: 'given',
    },
]
export const bookSlice = createSlice({
    name: 'books',
    initialState: {
      books:bookList,
      booksLeased: [],
    },
    reducers: {
        booksDelete: (state,{payload}) => {
            state.books = state.books.filter(el=>el.id!==payload);
            state.booksLeased = state.booksLeased.filter(el => el.id !== payload)
            state.books.forEach(el => {
                if(el.id > payload) {
                el.id = el.id - 1
                }
            })
            state.booksLeased.forEach(el => {
                if(el.id > payload) {
                el.id = el.id - 1
                }
            })
        },
        booksAdd: (state,{payload}) => {
              console.log(payload);
              state.books.push(payload)
          },
        booksEdit: (state, {payload}) => {
            state.books[payload.id].name = payload.name
            state.books[payload.id].year= payload.year
            state.books[payload.id].author = payload.author
        },
        booksLease: (state, {payload}) => {
            const proxy = JSON.parse(JSON.stringify(state.books))
            const result = proxy.filter(el => el.name === payload.books)
            const id = result[0].id
            result[0].status = 'выдана'
            state.books[id - 1].status = 'выдана'
            state.booksLeased.push({id: id, books: result, lender: payload.name})
          },
        booksReturn: (state, {payload}) => {
            state.books.forEach(el => {
              payload.forEach(item => {
                  if(el.name === item){
                    el.status = 'не выдана'
                    state.booksLeased = state.booksLeased.filter(books => books.id !== el.id)
                  }
              })
            })
        }
    }
})

export const {booksDelete, booksAdd, booksEdit, booksLease, booksReturn } = bookSlice.actions;
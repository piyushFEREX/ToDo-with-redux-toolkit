import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1,todo:"hello world"},]
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            // console.log('addTodo() is running',action.payload)
            const todoo = {
                id:nanoid(),
                todo: action.payload,
            }
            state.todos.push(todoo)
            localStorage.setItem('data',JSON.stringify(state.todos))
        },
        removeTodo:(state,action)=>{
            // console.log('removeTodo() is running' , action.payload)
            state.todos = state.todos.filter(
                (todos) => todos.id !== action.payload)
                localStorage.setItem('data',JSON.stringify(state.todos))
        },
        updateTodo:(state,action)=>{
            // console.log('update() is runnig', action.payload.id ,action.payload.update , JSON.stringify(state.todos))
            state.todos = state.todos.map(
                items=> items.id==action.payload.id ? {id:items.id,todo:action.payload.update} : items
                )
                localStorage.setItem('data',JSON.stringify(state.todos))
        },
        localSetter:(state,action)=>{
            // console.log(action.payload,'thisis')
            state.todos = [...action.payload]
        }
    }
})

export const{addTodo,removeTodo,updateTodo,localSetter}=todoSlice.actions
export default todoSlice.reducer
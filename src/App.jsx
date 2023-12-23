import React, { useEffect } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { localSetter } from './assets/fertures/todo/todoSclice'

const App = () => {
  console.log('component mounted ')
  const allTodos  =useSelector( state => state.todos)
  // console.log(allTodos)
  const dispatch = useDispatch()


  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('data'))
    dispatch(localSetter(data))
  },[])



  return (
    <div>
      <div className='text-center mt-4 mb-3 '><h1>Todo Application</h1></div>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo,updateTodo } from '../assets/fertures/todo/todoSclice'

const todo = () => {
    const allTodos = useSelector(state => state.todos)
    const dispatch = useDispatch();


  return (
    <>
    <div className='fw-bold mt-5 text-center'>All the ToDo's</div>
<ol className="list-group list-group-numbered mt-3  ">
  {allTodos.length > 0 ? 
    <>{allTodos.map((list,index)=>(
      <Renderd key={index} list={list} dispatch={dispatch}/>
    ))}</>
    :<h1 className='mx-auto'>Nothing to show</h1>}
</ol>

</>
  )


  
}
var Renderd =({list,dispatch})=>{
  // console.log(index,list,updateTask,'this si s')
  const [isVisible,setisVisible]= useState(false)
  const [update,setUpdate]=useState('')
  const updateTask = (id,e)=>{
    e.preventDefault();
  if(update){
    dispatch(updateTodo({id,update}))
    setUpdate('')
    setisVisible(false)
  }
  
  }
  return(
    <li  className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{list.todo}</div>
      <form action="" onSubmit={(e)=>updateTask(list.id,e)}>
     {isVisible && (
       <>
       <div className="d-flex flex-column flex-md-row align-items-center">
    <input
        type="text"
        className="form-control mb-2 mb-md-0 me-md-2"  
        placeholder="Change Task..."
        onChange={(e) => setUpdate(e.target.value)}
        value={update}
    />
    <button
        type="submit"
        className="btn btn-success w-100"
    >
        Submit
    </button>
</div>


       
       </>
     )}
      </form>
    </div>
    <span className="badge bg-success rounded-pill "
    onClick={()=>setisVisible(!isVisible)}
    style={{cursor:'pointer'}}
    >📝</span>
    <span className="badge bg-danger  rounded-pill" 
    style={{cursor:'pointer'}}
    onClick={()=>dispatch(removeTodo(list.id))}>☠️</span>
  </li>
  )
}


export default todo
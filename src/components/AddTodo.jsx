import React, { useEffect, useRef, useState } from 'react'
import { addTodo } from '../assets/fertures/todo/todoSclice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [input,setInput ]= useState('')
    const dispatch = useDispatch()
 const submitHandler = (e)=>{
     e.preventDefault();
if(input){
    // console.log(input)
    dispatch(addTodo(input));
    setInput('')
}
 }

 const inp = useRef(null)
useEffect(()=>{
    if(inp.current){
        inp.current.focus()
    }
},[])
  return (
    <>
<form action="" onSubmit={submitHandler}>
    <div className="mb-3 row">
        <div className="col-md-8"> {/* Adjust the column width as per your requirement */}
            <input 
                ref={inp}
                type="text"
                className="form-control mb-2"
                name="todo"
                id="todo"
                placeholder="Add Todo ...."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
        <div className="col-md-4"> {/* Adjust the column width as per your requirement */}
            <button 
                type="submit"
                className="btn btn-primary w-100"  
            >
                Submit
            </button>
        </div>
    </div>
</form>

    </>
  )
}

export default AddTodo
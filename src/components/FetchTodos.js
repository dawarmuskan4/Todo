import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { appendFile } from 'fs';

const FetchTodos = () => {
  const [Todos, setTodos] = useState([{}])
  
  useEffect( async() => {

    api()
   
  }, [])

  const api = async()=>{
    await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      const todos = res.data
      console.log(todos)
      setTodos(todos);
    })
  }

   const deleteHandler = (todos) => {
     console.log(todos,"hii")
    setTodos(Todos.filter((item,i)=>todos!==i)); 

   }


  return (
    <div>
        <ul className='api-todos'>{
          Todos.map((Todo,i) => <li key={Todo.id} > <button value={Todo.id} className='trashbtn' onClick={()=>deleteHandler(i)}><i className='fas fa-trash'>{ Todo.title} </i></button></li>)
        }</ul>
    </div>
  )
}

export default FetchTodos

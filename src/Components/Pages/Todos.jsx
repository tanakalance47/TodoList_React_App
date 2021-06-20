import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from "@material-ui/core";
import TodoInfo from '../Logic/TodoInfo';

const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=> {
           const responseTodos = res.data;
           setTodos(responseTodos);
       })
    },[]);

    return(
         <>
         <h1>ALL TODOS!!</h1> <br />
           { todos ? (              
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    { todos.slice(0, 20).map((todo) => (<TodoInfo key={todo.id} todo={todo}/>))}
                </div>
            )    
           :  <CircularProgress />}          
         </>
    );
};

export default Todos;
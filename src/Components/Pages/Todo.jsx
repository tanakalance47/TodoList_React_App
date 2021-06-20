import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Todo = () => {
  const {id} = useParams();
  const [todoItemInfo, setTodoItemInfo] = useState();
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=> {
        const responseTodos = res.data;
        setTodoItemInfo(responseTodos);
    })
 },[]);

 const {completed, title} = todoItemInfo || {};
     return(
         <div>
             {todoItemInfo ? (
                <>
                    <h1>Todo Information</h1>
                    <br />
                    <p>{title}</p>
                    <p>{`Completed: ${completed}`}</p>
                    <Button variant="contained" color="primary" onClick={() => history.push(`/`)}>Go Back</Button>
                </>
             ) 
             : <CircularProgress />}
         </div>
     );
};

export default Todo;
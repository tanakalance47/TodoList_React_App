import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const TodoInfo = (props) => {
    const {todo} = props;
    const {title, completed, id} = todo;
    const classes = useStyles();
    const history = useHistory();

    return (
        <Card style={{ width: "80px" }} className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
                {id}
            </Typography>
            <Typography variant="body2" component="p">
                {title} <br />
                {`Completed: ${completed}`}
            </Typography>
          </CardContent>
          <CardActions style={{marginLeft: "95px"}}>
            <Button onClick={() => history.push(`/todo/${id}`)} variant="contained" color="secondary"  >View</Button>
          </CardActions>
        </Card>
    );
};

export default TodoInfo;
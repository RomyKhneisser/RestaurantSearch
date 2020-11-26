import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getVisitedRestaurants} from "../redux/actions/visitedRest";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
}));

  
const VisitedRest =() => {
    const classes = useStyles();
    const [visitedRestaurants, setvisitedRestaurants] = useState([]);
    const loading = useSelector(state => state.visitedRestaurants.loading);
    const errors = useSelector(state => state.visitedRestaurants.error);

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [color,setColor]=React.useState("");

    const dispatch = useDispatch();
    const api = useSelector(state => state.visitedRestaurants.visitedRestaurants);
    
    useEffect(()=>{
      if(api){ 
        setvisitedRestaurants(api);
      }  
    },[api]);

    useEffect(()=>{
      dispatch(getVisitedRestaurants());
      if(errors==true){
        setOpen(true);
        setColor("error");
        setMessage("Coudn't fetch visited restaurant, please try again.");
      }
    },[]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
     setOpen(false);
  };

    return(
        <>
     
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color}>
          {message}
        </Alert>
      </Snackbar>

        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Visited Restaurants 
          </Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Visit Date</TableCell>     
          </TableRow>
        </TableHead>
        <TableBody>
          
          {loading==false ? (
            <>
             {visitedRestaurants && visitedRestaurants.length>0 ? ( visitedRestaurants.map((visitedRestaurant, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {visitedRestaurant.restaurant.name}
                </TableCell>
                <TableCell align="right">{visitedRestaurant.date}</TableCell>
              </TableRow>
            ))):(
              <>
              {visitedRestaurants.length==0 ?(
                <Snackbar open={handleClick} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning">
                  You didn't check in any restaurant today!
                </Alert>
              </Snackbar>
              ): null }
              </>
            )} 
            </>
          ) : (    <>
            <CircularProgress color="primary" />
            </>
          )
           }
        
        </TableBody>
      </Table>
    </TableContainer> 
    </>  
);
}

export default VisitedRest;








  
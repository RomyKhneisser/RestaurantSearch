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

function createData(name, visitedRestDate) {
    return { name, visitedRestDate};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159),
    createData('Frozen yoghurt', 159),
    createData('Frozen yoghurt', 159),
    createData('Frozen yoghurt', 159),
   
  ];
  
const VisitedRest =() => {
    const classes = useStyles();
    const [visitedRestaurants, setvisitedRestaurants] = useState([]);
   
  

    const dispatch = useDispatch();
    const api = useSelector(state => state.visitedRestaurants.visitedRestaurants);
    
    useEffect(()=>{
      if(api){ 
        console.log(api);
        setvisitedRestaurants(api);
      }  
    },[api]);

    useEffect(()=>{
      dispatch(getVisitedRestaurants());
    },[]);

    return(
        <>
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
          {visitedRestaurants && visitedRestaurants.length>0 && visitedRestaurants.map((visitedRestaurant, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {visitedRestaurant.restaurant.name}
              </TableCell>
              <TableCell align="right">{visitedRestaurant.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
   
);
}

export default VisitedRest;








  
import React, { useState, useEffect } from "react";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux";
import {getRestaurants} from "../redux/actions/restaurants"
import CardActions from '@material-ui/core/CardActions';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Select from '@material-ui/core/Select';
import {getRestaurantsTypes} from "../redux/actions/restaurantsTypes"
import { MenuItem, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { postVisitedRestaurants, deleteVisitedRestaurants} from "../redux/actions/visitedRest";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
      display: 'flex',
     
     
    },
    media: {
      height: 100,
      width: 100,
      
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [types, setTypes] = useState([]);
  const [searchType, setSearchType]=useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color,setColor]=React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  
  const dispatch = useDispatch();
  const apiResult = useSelector(state => state.restaurants.restaurants);
  const loading = useSelector(state => state.restaurants.loading);
  const fetchRestaurantError = useSelector(state => state.restaurants.error);
  const errors = useSelector(state => state.visitedRestaurants.error);
  const apiResultt= useSelector(state => state.types.types);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
 
  useEffect(()=>{
    if(apiResult){ 
      setRestaurants(apiResult.restaurants);
      setCount(apiResult.totalPages);
    }
  },[apiResult]);

  useEffect(()=>{
    if(page){
    dispatch(getRestaurants(page-1,searchName,searchType));
    }
    else{
      dispatch(getRestaurants());
    }
  },[page]);

  
  const handleChangeCheckBox = (event) => {
   if(event.target.checked == true){
      dispatch(postVisitedRestaurants(event.target.value));
      handleClick();
    if(errors==false){
      setColor("success");
      setMessage("Added to visited restaurants.");
    }else{
      setColor("error");
      setMessage("Coudn't add visited restaurant, please try again.");
    }
  }
  else
  {
    dispatch(deleteVisitedRestaurants(event.target.value));
    handleClick();
    if(errors==false){
      setColor("success");
      setMessage("Deleted visited restaurant.");
    }else{
      setColor("error");
      setMessage("Coudn't delete visited restaurant, please try again.");
    }
  }
  };  

  useEffect(()=>{
    if(apiResultt){
      setTypes(apiResultt);
    }
},[apiResultt]);

useEffect(()=>{

    dispatch(getRestaurantsTypes());
  },[]);

  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(e.target.value);
  };

  const onChangeSearchType = e => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };

  
  const retrieveRestaurants = () => {
    setPage(1);
    dispatch(getRestaurants(page-1,searchName,searchType));
    if(restaurants && restaurants.length==0 ){
      handleClick();
      setColor("warning");
      setMessage("Restaurant name not available, please try another name.");
    }
    else{ 
      if(fetchRestaurantError==true){
        handleClick();
        setColor("error");
        setMessage("Erroe, please try again.");
      }
    }
  }
 

const setActivRestaurant = (restaurant, index) => {
  setCurrentRestaurant(restaurant);
  setCurrentIndex(index);
  handleClickOpen();
};


const handlePageChange = (event, value) => {
  setPage(value);
};

const classes = useStyles();

  return (
    
    <div className="list row">
      <div className="col-md-8">


        <div className="input-group mb-3">
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
             <Alert onClose={handleClose} severity={color}>
                {message}
              </Alert>
            </Snackbar>
      
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            value={searchName}
            onChange={onChangeSearchName}
          />
        <div className="input-group-append">
          <InputLabel id="Types" >
            Types
          </InputLabel>
          <Select labelId="Types"
            value={searchType}
            onChange={handleChange}
             >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {types && types.length>0 && types.map((type,index) => (
          <MenuItem key={index} value={type}> {type}  </MenuItem>
            ))}
          </Select>
          </div>
          
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveRestaurants}
            >
              Search
            </button>
            

          </div>
        </div>
      </div>
      <div >

     {loading==false ? (<ul className="list-group">
     <Grid container spacing={3}>
       {restaurants && restaurants.length>0 &&
         restaurants.map((restaurant, index) => (
         <>
             <Grid item xs={6}>
       
  
           <Card className={classes.root} style={{maxWidth:300,maxHeight:350, minWidth:300, minHeight:350}}>
   <CardActionArea onClick={() => setActivRestaurant (restaurant, index)}
            key={index} >
     <CardMedia
       className={classes.media}
      image={restaurant.imageUrl}
       component="img"
       style={{maxHeight:200,  minHeight:200}}
     
       title={restaurant.name}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="h2">
       {restaurant.name}
       </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>
   <Checkbox
         color="primary"
         icon={<CheckCircleRoundedIcon fontSize="small" />}
         checkedIcon={<CheckCircleRoundedIcon  fontSize="small" />}
         key={index}
         onChange={handleChangeCheckBox}
         value={restaurant.id}
       />
   </CardActions>
 </Card>
 </Grid>
 
           </>
         ))}
         </Grid>
         <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
     </ul>) : (
         <div className={classes.root}>
         <CircularProgress />
         <CircularProgress color="secondary" />
       </div>
     ) 
     
     
    }
      </div>
      {currentRestaurant && 

      <Dialog fullScreen open={openDialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             {currentRestaurant.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <div  style={{marginTop:100}} >
     <Card style={{maxWidth:800, maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            currentRestaurant.imageUrl
          }
          component="img"
          style={{maxWidth:780, maxHeight:300}}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {currentRestaurant.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Type: {currentRestaurant.type} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Average cost for two: {currentRestaurant.cost} LBP
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Address: {currentRestaurant.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Phone Number: {currentRestaurant.phonenumber}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      </Dialog>
}

    </div>
  );
};

export default RestaurantsList;

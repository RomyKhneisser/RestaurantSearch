import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/RestaurantService";
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
import deekduke from "../deekduke.jpg";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';


import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Button from '@material-ui/core/Button';


import Select from '@material-ui/core/Select';
import {getRestaurantsTypes} from "../redux/actions/restaurantsTypes"
import { MenuItem, InputLabel } from '@material-ui/core';
import cardComponent from "./CardComponent";
import Grid from '@material-ui/core/Grid';

import { postVisitedRestaurants, deleteVisitedRestaurants} from "../redux/actions/visitedRest";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
     
    },
    media: {
      height: 10,
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


const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  
  const [searchName, setSearchName] = useState("");
  

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const pageSizes = [3, 6, 9];

  
  const [types, setTypes] = useState([]);
  const [searchType, setSearchType]=useState("");

  //const [checked, setChecked] = React.useState(true);

  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const x=[true,false,true,false,false,false];

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };

 

  const dispatch = useDispatch();
  const apiResult = useSelector(state => state.restaurants.restaurants);
 // const restaurants = useSelector(state => state.restaurants.restaurants);
  const loading = useSelector(state => state.restaurants.loading);
  const apiResultt= useSelector(state => state.types.types);
  useEffect(()=>{
    if(apiResult){ 
      setRestaurants(apiResult.restaurants);
      setCount(apiResult.totalPages);
    }
    
  },[apiResult]);

  useEffect(()=>{
    console.log(page);
    if(page){
      console.log(page);
    dispatch(getRestaurants(page-1,searchName,searchType));
    }
    else{
      dispatch(getRestaurants());
    }
  },[page]);

  const [post,setPost]=useState();
  const [checked, setChecked] = React.useState(false);
  const handleChangeCheckBox = (event) => {
   if(event.target.checked == true){
    console.log(event.target.value);
    dispatch(postVisitedRestaurants(event.target.value));
  }else{
    dispatch(deleteVisitedRestaurants(event.target.value));
  }
    
    setChecked(event.target.checked);
  };

  //  useEffect(()=>{
  //   if(checked){
  //     dispatch(getRestaurants(page-1))
  //   }
  //   else{

  //   dispatch(getRestaurants());}
  // },[page]);

  //const postResult= useSelector(state => state.types.types);
  

  // useEffect(()=>{
  //   if(page){
  //     dispatch(getRestaurants(page-1))
  //   }
  //   else{

  //   dispatch(getRestaurants());}
  // },[page]);

  useEffect(()=>{
    if(apiResultt){
      console.log("AAAAA");
      console.log(apiResultt);
      setTypes(apiResultt);
    }
},[apiResultt]);

useEffect(()=>{

    dispatch(getRestaurantsTypes());
  },[]);

  const handleChange = (event) => {
    setSearchType(event.target.value);
  };


  // useEffect(()=>{

  // },[restaurants]);

  // useEffect(() => {
  //   retrieveRestaurants();
  // }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(e.target.value);
  };

  const onChangeSearchType = e => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };


  const getRequestParams = (searchTitle, page, pageSize) => {
    let params = {};

    if (searchTitle) {
      params["title"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  const params = getRequestParams(searchName, page, pageSize);
  const retrieveRestaurants = () => {
    setPage(1);
  
    dispatch(getRestaurants(page-1,searchName,searchType));
  }
  
//   const retrieveRestaurants = () => {
//   RestaurantDataService .getAll(params)
//     .then((response) => {
//      // const { restaurants, totalPages } = response.data;
//      const restaurants= response.data.restaurants;
//      const totalPages = response.data.totalPages;


//       setRestaurants(restaurants);
//       setCount(totalPages);

//       console.log(response.data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

//useEffect(retrieveRestaurants, [page, pageSize]);
// useEffect(()=>{console.log(page);}
//   , [page, pageSize]

// )

const refreshList = () => {
 // retrieveRestaurants();
  setCurrentRestaurant(null);
  setCurrentIndex(-1);
};

const setActivRestaurant = (restaurant, index) => {
  setCurrentRestaurant(restaurant);
  setCurrentIndex(index);
  handleClickOpen();
};

const findByName = () => {
  RestaurantDataService.findByName(searchName)
    .then(response => {
      setRestaurants(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

const findByType = () => {
  RestaurantDataService.findByType(searchType)
    .then(response => {
      setRestaurants(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

const handlePageChange = (event, value) => {
  setPage(value);
};

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

const classes = useStyles();

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">

      
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
              //onClick={getRestaurants}
            >
              Search
            </button>

          </div>
        </div>
      </div>
      <div >
        <div className="mt-3">
          {/* {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select> */}

          {/* <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          /> */}
        </div>

      
        


        <ul className="list-group">
        <Grid container spacing={3}>
       
        
          {restaurants && restaurants.length>0 &&
            restaurants.map((restaurant, index) => (
            <>
{/* <cardComponent onClick={() => setActivRestaurant (restaurant, index)}
               index={index}
               restaurant={currentRestaurant}
               root={classes.root} 
               media={classes.media}></cardComponent> */}
                <Grid item xs={6}>
          
     
              <Card className={classes.root}
               onClick={() => setActivRestaurant (restaurant, index)}
               key={index} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={
            deekduke
          }
          component="img"
        
          title="Contemplative Reptile"
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
            // checked={x[index]}
            //checked={checked}
            onChange={handleChangeCheckBox}
            value={restaurant.id}
          />
     
      </CardActions>
    </Card>
    </Grid>
              {/* <li
              
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivRestaurant (restaurant, index)}
                key={index}
              >
                {restaurant.name}
              </li> */}
              </>
            ))}
            </Grid>
        </ul>

      </div>
    
      {/* <div className="col-md-6">
        {currentRestaurant ? (
          <div>
            <h4>Restaurants</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentRestaurant.name}
            </div>
            <div>
              <label>
                <strong>Type:</strong>
              </label>{" "}
              {currentRestaurant.type}
            </div>
            <div>
              <label>
                <strong>Cost for two:</strong>
              </label>{" "}
              {currentRestaurant.cost}
            </div>
            <div>
              <label>
                <strong>Address:</strong>
              </label>{" "}
              {currentRestaurant.address}
            </div>
            <div>
              <label>
                <strong>Phone Number:</strong>
              </label>{" "}
              {currentRestaurant.phonenumber}
            </div>

     <Card className="col-md-7">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={
            deekduke
          }
          component="img"
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

            <Link
              to={"/restaurants/" + currentRestaurant.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Restaurant...</p>
          </div>
        )}
      </div> */}
      {currentRestaurant && 
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             {currentRestaurant.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="col-md-6" >
     <Card className="col-md-7">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={
            deekduke
          }
          component="img"
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
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List> */}
      </Dialog>
}
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
    </div>
  );
};

export default RestaurantsList;

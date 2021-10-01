import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import {Paper}from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function TabPanel(props) {



  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
 

  const [values, setValues] = React.useState({
    value: 0,
    fullName:'',
    email:'',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    signinOrRegister:'signin'
  });

  const signinOrRegister = values.signinOrRegister;


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleToggle = (event,newvalue) => {
    
    console.log(values)
    setValues({ ...values, signinOrRegister : newvalue });
    console.log(values)
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const login = (event)=>{
    event.preventDefault();
    console.log('login '+ values.email)

  

  };

  const register = (event)=>{
    event.preventDefault();
    console.log(values.email)

  

   
    
    axios.post('http://localhost:5000/api/register',{
      fullName:values.fullName,
      email:values.email,
      password:values.password
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data.token){
        console.log('user registered')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
  

  };
 



  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

      <ToggleButtonGroup
      color="primary"
      value={values.signinOrRegister}
      exclusive
      onChange={handleToggle}
    >
      <ToggleButton value="signin" disabled={signinOrRegister == 'register' ? false : true }>Login</ToggleButton>
      <ToggleButton value="register" disabled={signinOrRegister == 'signin' ? false : true }>Register</ToggleButton>

    </ToggleButtonGroup>


      </Box>
      <div hidden={signinOrRegister == 'register' ? true : false }  >
       
       <Divider>Login</Divider>


<form method="post" onSubmit={login}>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type={'email'}
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
    
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

       <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button  sx={{ m: 1, width: '25ch',height:'7ch' }} variant="contained"
            id="outlined-adornment-submit"
            type={'submit'}
            label="Login"
          >{'Login'}
        </Button >
</form>
      </div>
      <div hidden={signinOrRegister == 'signin' ? true : false } >
      <Divider>Register</Divider>
      <form method="post" onSubmit={register}>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">fullName</InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            type={'text'}
            value={values.fullName}
            onChange={handleChange('fullName')}
            endAdornment={
              <InputAdornment position="end">
    
              </InputAdornment>
            }
            label="fullName"
          />
        </FormControl>

<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email2"
            type={'email'}
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
    
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

       <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password2"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button  sx={{ m: 1, width: '25ch',height:'7ch' }} variant="contained"
            id="outlined-adornment-submit"
            type={'submit'}
            label="Register"
          >{'Register'}
        </Button >
</form>
      </div>

    </Box>
  );
}



class App extends Component {
 
  state = {
    loggedIn:false,
    user:null,
    results:[]
  }

  render(){

    return (
      <div className="App">
  <BasicTabs />
      </div>
    )

  }


}

export default App;

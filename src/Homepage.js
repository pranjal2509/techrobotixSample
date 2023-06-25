import React, { useEffect, useState } from "react"
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import image4 from './assets/image4.jpg'
import image7 from './assets/image7.jpg'
import image3 from './assets/image3.jpg'
import image6 from './assets/image6.jpg'

function Homepage(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailError, setEmailError] = useState("")
    const [fnameError, setFnameError] = useState("")
    const [lnameError, setLnameError] = useState("")
    const [phoneError, setphoneError] = useState("")
    const [ageError, setageError] = useState("")
    const [gender, setgender] = useState("female")
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        const formTime = setTimeout(() => {
            handleOpen();
        }, 5000)
        return () => clearTimeout(formTime)
    }, [])

    const validateEmail = (event) => {
        if(event.target.value != ""){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
                setEmailError("")
                setEmail(event.target.value)
            } else {
                setEmail("")
                setEmailError("You have entered an invalid email address!")
            }
        } else{
            setEmail("")
            setEmailError("Email can't be Empty!")
        }
    }

    const validateFname = (event) => {
        if(event.target.value != ""){
            if (/^[a-zA-Z ]{2,30}$/.test(event.target.value)) {
                setFnameError("")
                setFirstName(event.target.value)
            } else {
                setFirstName("")
                setFnameError("Special characters are not allowed!")
            }
        } else{
            setFirstName("")
            setFnameError("First Name can't be Empty!")
        }
    }

    const validateLname = (event) => {
        if(event.target.value != ""){
            if (/^[a-zA-Z ]{2,30}$/.test(event.target.value)) {
                setLnameError("")
                setLastName(event.target.value)
            } else {
                setLastName("")
                setLnameError("Special characters are not allowed!")
            }
        } else{
            setLastName("")
            setLnameError("Last Name can't be Empty!")
        }
    }
    
    const validatePhone = (event) => {
        if(event.target.value != ""){
            if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)) {
                setphoneError("")
                setPhoneNumber(event.target.value)
            } else {
                setPhoneNumber("")
                setphoneError("You have entered an invalid Phone Number!")
            }
        } else{
            setPhoneNumber("")
            setphoneError("Phone Number can't be Empty!")
        }
    }

    const validateAge = (event) => {
        if(event.target.value <= 120){
            setageError("")
            setAge(event.target.value)
        } else{
            setAge("")
            setageError("Age cannot be more than 120!")
        }
    }

    const handleGenderChange = (event) => {
        setgender(event.target.value)
    }

    const handleSubmit = (event) => {
        props.changeTab(event, "ourwork")
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        minHeight: 500,
        maxHeight: 700,
        bgcolor: 'background.paper',
        border: '2px solid #ce5301',
        boxShadow: 24,
        p: 4,
    }

    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#ff7b23',
            contrastText: '#fff',
          },
        },
    });

    return (
        <div className="homepage">
            <h1 className="heading">
                " Your one stop solution for creating unique user experiences! "
            </h1>
            <div className="rotating-text-wrapper">
                    <img src={image4} style={{width:"800px"}} alt="image4"/>
                    <img src={image7} style={{width:"800px"}} alt="image7"/>
                    <img src={image6} style={{width:"800px"}} alt="image6"/>
            </div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="formbox">
                    <Box
                        component="form"
                        sx={style}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="row fields">
                            <div className="col-md-6" style={{paddingLeft:0, paddingRight:6}}>
                            <ThemeProvider theme={theme}>
                                <TextField 
                                    error = {fnameError != ""}
                                    helperText={fnameError}
                                    fullWidth
                                    required 
                                    id="filled-basic" 
                                    label="First Name" 
                                    variant="filled" 
                                    onChange={(e) => validateFname(e)}
                                    color="neutral"
                                />
                                </ThemeProvider>
                            </div>
                            <div className="col-md-6" style={{paddingLeft:6, paddingRight:0}}>
                            <ThemeProvider theme={theme}>
                                <TextField 
                                    error = {lnameError != ""}
                                    helperText={lnameError}
                                    fullWidth
                                    required 
                                    id="filled-basic" 
                                    label="Last Name" 
                                    variant="filled" 
                                    onChange={(e) => validateLname(e)}
                                    color="neutral"
                                />
                                </ThemeProvider>
                            </div>
                        </div>
                        
                        <div className="row fields">
                        <ThemeProvider theme={theme}>
                            <TextField 
                                error = {emailError != ""}
                                helperText={emailError}
                                required 
                                id="filled-basic" 
                                label="Email" 
                                variant="filled" 
                                onChange={ (e) => validateEmail(e)}
                                color="neutral"
                            />
                            </ThemeProvider>
                        </div>
                        <div className="row fields">
                        <ThemeProvider theme={theme}>
                            <TextField 
                                error = {phoneError != ""}
                                helperText={phoneError}
                                required 
                                id="filled-basic" 
                                label="Phone Number" 
                                variant="filled" 
                                onChange={ (e) => validatePhone(e)}
                                color="neutral"
                            />
                            </ThemeProvider>
                        </div>
                        <div className="row fields">
                        <ThemeProvider theme={theme}>
                            <TextField 
                                error = {ageError != ""}
                                helperText={ageError}
                                required 
                                id="filled-basic" 
                                label="Age" 
                                variant="filled" 
                                type="number"
                                onChange={ (e) => validateAge(e)}
                                color="neutral"
                            />
                            </ThemeProvider>
                        </div>
                        <div className="fields">
                            
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" sx={{color:deepOrange[800]}}>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={gender}
                                    onChange={handleGenderChange}
                                >
                                    <FormControlLabel value="female" control={<Radio sx={{
                                        color: deepOrange[300],
                                        '&.Mui-checked': {
                                        color: deepOrange[400],
                                        },
                                    }}/>} label="Female" />
                                    <FormControlLabel value="male" control={<Radio sx={{
                                        color: deepOrange[300],
                                        '&.Mui-checked': {
                                        color: deepOrange[400],
                                        },
                                    }}/>} label="Male" />
                                    <FormControlLabel value="other" control={<Radio sx={{
                                        color: deepOrange[300],
                                        '&.Mui-checked': {
                                        color: deepOrange[400],
                                        },
                                    }}/>} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <ThemeProvider theme={theme}>
                        <Button 
                            className={(firstName == "" || lastName == "" || email == "" || age == "" || phoneNumber == "") ? "" : "button"} 
                            variant="contained" 
                            color="neutral"
                            onClick={handleSubmit} 
                            disabled={firstName == "" || lastName == "" || email == "" || age == "" || phoneNumber == ""}
                        >
                            Submit
                        </Button>
                        </ThemeProvider>
                    </Box>
                </div>
            </Modal>
        </div>
    )
}

export default Homepage;
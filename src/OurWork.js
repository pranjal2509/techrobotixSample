import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import IconButton from '@mui/material/IconButton';
import ReactPlayer from 'react-player'

function OurWork() {
    const [index, setIndex] = useState(0)
    const [disableForwadButton, setdisableForwadButton] = useState(false)
    const [disableBackwardButton, setdisableBackwardButton] = useState(true)

    useEffect(() => {
        console.log("from useeffect" + index)
        checkBounds();
    }, [index])

    var videos = [
        {
            name: "1st",
            link: "https://youtu.be/5-WApzS_qTE"
        },
        {
            name: "2nd",
            link: "https://youtu.be/eQ5YBXP08Do"
        },
        {
            name: "3rd",
            link: "https://youtu.be/9DpXC5ZR4Tg"
        },
        {
            name: "4th",
            link: "https://youtu.be/XgCBE1X0VPI"
        },
        {
            name: "5th",
            link: "https://youtu.be/NAESVVW0OYI"
        },
        {
            name: "6th",
            link: "https://youtu.be/YbyS7q0IK9A"
        },
        {
            name: "7th",
            link: "https://youtu.be/bOgUbl1fxmU"
        },
        {
            name: "8th",
            link: "https://youtu.be/7f2kaMNGzb4"
        },
        {
            name: "9th",
            link: "https://youtu.be/hh8ekUTu5cQ"
        },
        {
            name: "10th",
            link: "https://youtu.be/tkReZxNPrb0"
        },
        {
            name: "11th",
            link: "https://youtu.be/igtP6U7stbY"
        },
        {
            name: "12th",
            link: "https://youtu.be/GWlttLy0k_Q"
        },
        {
            name: "13th",
            link: "https://youtu.be/GWlttLy0k_Q"
        },
        {
            name: "14th",
            link: "https://youtu.be/GWlttLy0k_Q"
        }
    ]

    const swipeforward = () => {
        if(index + 6 < videos.length) {
            setIndex(index + 3)
        } else if(index + 6 > videos.length){
            setIndex(videos.length - 3)
        }
    }

    const swipebackward = () => {
        if(index - 3 >= 0){
            setIndex(index - 3)
        } else if(index - 3 < 0){
            setIndex(0)
        }
    }

    const checkBounds = () => {
        if(index == 0 && index + 3 >= videos.length){
            setdisableBackwardButton(true)
            setdisableForwadButton(true)
        } else {
            if(index == 0 && index + 3 < videos.length ){
                setdisableBackwardButton(true)
                setdisableForwadButton(false)
            } else if(index > 0 && index + 3 >= videos.length){
                setdisableBackwardButton(false)
                setdisableForwadButton(true)
            } else{
                setdisableBackwardButton(false)
                setdisableForwadButton(false)
            }
        }
    }

    const paperSX = {
        '& > :not(style)': {
            m: 1,
            width: "350px",
            height: "200px",
        },
        "&:hover": {
            border: "1px solid #dcdcdc",
            color: 'gray',
            backgroundColor: '#f4f4f4'
        },
    }

    return (
        <div className="ourwork">
            <h1 className="heading">
                " Our Work "
            </h1>
            <div className="row" style={{paddingTop: "10vh"}}>
                <div className="col-md-1" style={{paddingTop: "8vh"}}>
                    <IconButton aria-label="delete" size="large" onClick={swipebackward} disabled={disableBackwardButton}>
                            <ArrowBackIosRoundedIcon fontSize="inherit" disabled={disableBackwardButton}/>
                    </IconButton>
                </div>
                <div className="col-md-10">
                    {/* <Box 
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: "23vw",
                                height: "23vh",
                            },
                        }}
                    >
                        <Paper style={{paddingLeft: "1vh"}} sx={paperSX} elevation={2}>
                            
                            <ReactPlayer url={videos[index].link} width={320} height={180}/>
                        </Paper>
                        <Paper style={{paddingLeft: "1vh"}} sx={paperSX} elevation={2}>
                            <h1>{videos[index+1].name}</h1>
                        </Paper>
                        <Paper style={{paddingLeft: "1vh"}} sx={paperSX} elevation={2}>
                            <h1>{videos[index+2].name}</h1>
                        </Paper>
                    </Box> */}
                    <div className="row">
                        <div className="col-md-4">
                        <Paper style={{paddingLeft: "1vh"}} sx={paperSX} elevation={3}>
                            <ReactPlayer url={videos[index].link} width={320} height={180}/>
                        </Paper>
                        </div>
                        <div className="col-md-4">
                        <Paper style={{paddingLeft: "1vh"}} sx={paperSX} elevation={3}>
                        <ReactPlayer url={videos[index + 1].link} width={320} height={180}/>
                        </Paper>
                            
                        </div>
                        <div className="col-md-4">
                        <Paper style={{paddingLeft: "1vh"}} sx={paperSX} elevation={3}>
                        <ReactPlayer url={videos[index + 2].link} width={320} height={180}/>
                        </Paper>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-1" style={{paddingTop: "8vh"}}>
                    <IconButton aria-label="delete" size="large" onClick={swipeforward} disabled={disableForwadButton}>
                            <ArrowForwardIosRoundedIcon fontSize="inherit" disabled={disableForwadButton}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default OurWork;
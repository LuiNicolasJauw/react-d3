import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle } from '@mui/material';

export default function Header({list,setList}) {
    const [open,setOpen] = useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    };
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [hobby, setHobby] = useState("");

    const addName = (event)=>{
        setName(event.target.value);
    };
    const addAddress = (event) =>{
        setAddress(event.target.value);
    };
    const addHobby = (event) =>{
        setHobby(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        setList([...list, {name,address,hobby}]);
        setName('');
        setAddress('');
        setHobby('');
        handleClose();
    };


  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Box>
                    <Typography variant="h6" component="div" sx={{flexGrow:0}}>
                        My App
                    </Typography>
                </Box>
                <Box sx={{marginLeft:'auto'}}>
                    <Button sx={{backgroundColor:'aqua', color:'gray',borderRadius:'30px'}} color="inherit" onClick={handleClickOpen}>Add User</Button>
                </Box>
            </Toolbar>
        </AppBar>
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle sx={{textAlign:'center'}}>Add User</DialogTitle>
            <form onSubmit={(event)=>submitHandler(event)}>
            <Box sx={{margin:1}}>
            <label>Name</label><br/>
            <input type={'text'} onChange={(event)=>addName(event)}></input><br/>
            <label>Address</label><br/>
            <input type={'text'} onChange={(event)=>addAddress(event)}></input><br/>
            <label>Hobby</label><br/>
            <input type={'text'} onChange={(event)=>addHobby(event)}></input>
            <br/>
            <Box sx={{marginLeft:7, marginTop:3}}>
                <Button sx={{backgroundColor:'aqua', color:'gray',borderRadius:'30px'}} type="submit">Save</Button>
            </Box>
            </Box>
            </form>
        </Dialog>
    </div>
    )
}
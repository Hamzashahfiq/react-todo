import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ariaLabel = { 'aria-label': 'description' };

export default function InputTask() {
    return (
        <>
                <Grid container justifyContent="center" sx={{backgroundColor: '#EAEAEA',borderRadius: '5px',boxSizing: 'border-box',minWidth:'fit-content'}}>
                    <Grid item xs={10}>
                        <Input placeholder="Add a task"  inputProps={ariaLabel}
                            sx={{
                                m:1,p: 1, backgroundColor: 'white', width: '100%',boxSizing: 'border-box'
                            }} />
                    </Grid>
                    <Grid item xs={11} md={1}  sx={{textAlign: 'center', p:'5px',m:1,boxSizing: 'border-box' }}>
                        <Button variant="outlined" >Add</Button>
                    </Grid>
                </Grid>
        </>
    )
}

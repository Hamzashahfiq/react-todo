import React from 'react'
import Input from '@mui/material/Input';
import { border, height, style } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ariaLabel = { 'aria-label': 'description' };

export default function InputTask({inputTask,setInputTask,onSubmitHandler}) {
    return (
        <>
            <Box component="div" sx={{
                backgroundColor: '#EAEAEA', height: 'fit-content', p: 2, borderRadius: '5px', paddingRight:'30px',width: '100%'
            }}>
                <Grid container>
                    <Grid item xs={12} md={11}>
                        <Input placeholder="Add a task" onChange={(e)=>setInputTask(e.target.value)} value={inputTask}  inputProps={ariaLabel}
                            sx={{
                                p: 1, backgroundColor: 'white', width: '100%',
                            }} />
                    </Grid>
                    <Grid item xs={12} md={1}  sx={{textAlign: 'center', p:'5px' }}>
                        <Button className='addButtonDrawer' variant="outlined"  onClick={onSubmitHandler}>Add</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

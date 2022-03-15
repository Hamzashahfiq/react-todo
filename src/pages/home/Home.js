import React from 'react'
import PrimarySearchAppBar from '../../component/navBar/PrimarySearchAppBar';
import '../../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {

    return (
        <Box className='mpZero'>
            <Box className='mpZero' sx={{ height: '100vh', position: 'relative', border: 3 }} >
                <PrimarySearchAppBar />
                <Box sx={{ width: '100%', mt: { xs: 6, md: '61px' }, position: 'absolute', }}>
                    <Grid container sx={{ height: '100vh' }}>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ height:'100%',bgcolor: '#EAEAEA',minWidth:'fit-content',border: 3}}>hallo</Box>
                        </Grid>

                        <Grid item xs={12} sm={9}>
                            <Box sx={{height:'100%',minWidth:'fit-content' ,border: 3}}>hallo222</Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

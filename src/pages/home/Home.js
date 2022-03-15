import React from 'react'
import PrimarySearchAppBar from '../../component/navBar/PrimarySearchAppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputTask from '../../component/inputTask/InputTask';

export default function Home() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Box >
                <PrimarySearchAppBar />
            </Box>
            <Box sx={{ flex: '1 0 auto' }}>
                <Grid container sx={{ height: '100vh' }}>
                    <Grid item xs={12} sm={3}>
                        <Box sx={{ height: '100%',border:1, bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>

                            hallo</Box>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Box sx={{ height: '100%',border:1, minWidth: 'fit-content', px: 1, pt: '70px', boxSizing: 'border-box' }}>
                            <InputTask />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

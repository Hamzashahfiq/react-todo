import React from 'react'
import { SideBarData } from '../../constant/SideBarData';
import './SideNavBar.css'
import Box from '@mui/material/Box';


export default function SideNavBar() {
    return (
        <>
            <Box sx={{ mt: 3 }}>
                {
                    SideBarData.map((item, index) => {
                        return (
                            <Box key={index} >
                                <a href='#' className='sideBarLink' >
                                    <Box component='ul' sx={{ px: 2, pt:1,my:0 }}>
                                        <Box component='li' sx={{ listStyleType: 'none', mx: 0, my: 0, position: 'relative' }}>

                                            <Box component='span' sx={{ position: 'absolute', left: -2 }} >
                                                {item.icon}
                                            </Box>
                                            <Box className='sideBarText' component='span' sx={{ mb: 1, typography: 'subtitle2', mx: 6 }}>
                                                {item.name}
                                            </Box>
                                        </Box>
                                    </Box>
                                </a>
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}

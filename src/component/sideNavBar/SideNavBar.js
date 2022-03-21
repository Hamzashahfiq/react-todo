import React from 'react'
import { SideBarData } from '../../constant/SideBarData';
import './SideNavBar.css'
import Box from '@mui/material/Box';
import { Link, NavLink } from "react-router-dom";


export default function SideNavBar() {
    return (
        <>
            <Box component='ul' sx={{ mt: 4,p:0}}>
                {
                    SideBarData.map((item, index) => {
                        return (
                            <NavLink  key={index} to={item.link} className='sideBarLink' activeclassname="active" >
                                <Box component='li' sx={{ listStyleType: 'none', position: 'relative',backgroundColor:'inherit',pt:1,px:2 }}>
                                    <Box component='span' sx={{ position: 'absolute', left:13 }} >
                                        {item.icon}
                                    </Box>
                                    <Box className='sideBarText' component='span' sx={{ mb: 1, typography: 'subtitle2', mx: 6 }}>
                                        {item.name}
                                    </Box>
                                </Box>
                            </NavLink>
                        )
                    })
                }
            </Box>
        </>
    )
}

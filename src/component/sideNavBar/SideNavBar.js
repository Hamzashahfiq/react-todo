import React from 'react'
import { SideBarData } from '../../constant/SideBarData';

import Box from '@mui/material/Box';


export default function SideNavBar() {
    console.log(SideBarData)
    return (
        <div>
            {
                SideBarData.map((item, index) => {
                    return (
                        <Box key={index}>

                            <Box component='ul' sx={{ border: 1, px: 2 }}>
                                <Box component='li' sx={{ listStyleType: 'none', mx: 0, border: 1 }}>
                                    <Box component='a'>
                                        <Box component='span'>
                                            {item.icon}
                                        </Box>
                                        <Box component='span'>
                                            {item.name }
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }
        </div>
    )
}

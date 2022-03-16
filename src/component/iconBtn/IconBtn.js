import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function IconBtn({icon,btnStyle,onClickHandler}) {
    return (
        <div>
            <IconButton aria-label="delete" onClick={onClickHandler} sx={btnStyle}>
                {icon}
            </IconButton>
        </div>
    )
}

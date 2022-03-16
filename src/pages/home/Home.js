import React, { useState } from 'react'
import PrimarySearchAppBar from '../../component/navBar/PrimarySearchAppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputTask from '../../component/inputTask/InputTask';
import IconBtn from '../../component/iconBtn/IconBtn';
import MenuIcon from '@mui/icons-material/Menu';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

let date = new Date();
let day = date.getDay();
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday', 'Saturday'].map((item, index) => {
    return index === day ? item : null;
})
let month = date.getMonth();
let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((item, index) => {
    return index === month ? item : null;
})
let currentDate = date.getDate();


export default function Home() {
    const [openLeft, setOpenLeft] = useState(true)
    const [inputTask, setInputTask] = useState('')
    const [taskData, setTaskData] = useState([])


    const leftDivHandler = () => {
        setOpenLeft(false)
    }
    const leftDivHandlershow = () => {
        setOpenLeft(true)
    }


    const onSubmitHandler = () => {
        if (!inputTask) {
            alert("please add some task in input field")
            return
        }
        let task = {
            id: uuidv4(),
            taskDetail: inputTask
        }
        setTaskData([task, ...taskData])
        setInputTask('')
    }
    const onDeleteHandler = () => {
        alert('hallo update')
        // console.log(uuid)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', boxSizing: 'border-box', position: 'fixed' }}>
            <Box >
                <PrimarySearchAppBar />
            </Box>
            <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row', boxSizing: 'border-box' }}>
                {openLeft ?
                    <Box sx={{ height: '100%', width: '20%', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                    </Box> :
                    <Box sx={{ height: '100%', display: 'none', width: '20%', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                    </Box>
                }
                <Box sx={{ height: '100%', width: '80%', px: 3, pt: '70px', boxSizing: 'border-box', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                    {openLeft ?
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandlershow} btnStyle={{ marginLeft: { xs: '0', sm: '7px' }, display: 'none' }} />
                        : <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandlershow} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                    }
                    <Box sx={{ py: 1, }}>
                        <Box component="h3" mb='0'>
                            My Day
                        </Box>
                        <Box component="p" sx={{ typography: 'subtitle2', fontWeight: 'light', marginTop: '5px' }}>
                            {dayName},{monthName} {currentDate}
                        </Box>
                        <InputTask inputTask={inputTask} setInputTask={setInputTask} onSubmitHandler={onSubmitHandler} />
                    </Box>
                    <Box sx={{ px: 4, overflowY: 'auto', height: '68vh' }} >
                        {
                            taskData.map((item) => {
                                return (
                                    <Grid key={item.id} container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", px: 2, }}>
                                        <Grid item xs={12} md={11} sx={{ pt: 1 }}>{item.taskDetail}</Grid>
                                        <Grid item xs={12} md={1}>
                                            <Grid container spacing={3} justifyContent='center'>
                                                <Grid item xs={1} md={4} ><Tooltip title="Update" placement="bottom"><IconButton aria-label="delete" color="primary">
                                                    <EditIcon />
                                                </IconButton></Tooltip></Grid>
                                                <Grid item xs={1} md={4}><Tooltip title="Delete" placement="bottom"><IconButton aria-label="delete" color="error">
                                                    <DeleteIcon />
                                                </IconButton></Tooltip></Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                )
                            })
                        }
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

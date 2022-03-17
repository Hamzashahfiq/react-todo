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
import SideNavBar from '../../component/sideNavBar/SideNavBar'
import CheckBoxComp from '../../component/CheckBoxComp/CheckBoxComp'

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
    const [updateIs, setUpdateIs] = useState(true)
    const [updatedId, setUpdatedId] = useState(0)
    const [completeTask, setCompleteTask] = useState([])


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
    const onDeleteHandler = (uuid) => {
        let newTask = taskData.filter((item) => item.id !== uuid)

        setTaskData(newTask)
        setInputTask('')
        setUpdateIs(true)
        alert('Deleted')
    }

    const onUpdate = (item) => {
        setInputTask(item.taskDetail)
        setUpdatedId(item.id)
        setUpdateIs(false)
    }


    const updateHandler = () => {
        let task = {
            id: updatedId,
            taskDetail: inputTask

        }
        let newTaskData = taskData.map((item) => {
            if (item.id === updatedId) {
                return task
            } else {
                return item
            }

        })

        setTaskData(newTaskData)
        setInputTask('')
        setUpdateIs(true)
        alert('updated')

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', boxSizing: 'border-box', position: 'fixed' }}>
            <Box >
                <PrimarySearchAppBar />
            </Box>
            <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row', boxSizing: 'border-box' }}>
                {openLeft ?
                    <Box sx={{ height: '100%', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                        <SideNavBar />
                    </Box> :
                    <Box sx={{ height: '100%', display: 'none', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                    </Box>
                }
                <Box sx={{ height: '100%', width: '80%', px: 1, overflowX: 'auto', pt: '70px', boxSizing: 'border-box', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                    {openLeft ?
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandlershow} btnStyle={{ marginLeft: { xs: '0', sm: '7px' }, display: 'none' }} />
                        : <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandlershow} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                    }
                    <Box sx={{ py: 1, px: 3 }}>
                        <Box component="h3" mb='0'>
                            My Day
                        </Box>
                        <Box component="p" sx={{ typography: 'subtitle2', fontWeight: 'light', marginTop: '5px' }}>
                            {dayName},{monthName} {currentDate}
                        </Box>
                        <InputTask inputTask={inputTask} setInputTask={setInputTask} updateIs={updateIs} updateHandler={updateHandler} onSubmitHandler={onSubmitHandler} />
                    </Box>
                    <Box sx={{ px: 4, overflowY: 'auto', height: '68vh' }} >
                        <Box component='h4'> Tasks  </Box>
                        {
                            taskData.map((item) => {
                                return (
                                    <Grid key={item.id} container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", px: 2, pb: 1 }}>
                                        <Grid item xs={12} md={1} sx={{ pt: 1 }}><CheckBoxComp /></Grid>
                                        <Grid item xs={12} md={10} sx={{ pt: 1 }}>{item.taskDetail}</Grid>
                                        <Grid item xs={12} md={1}>
                                            <Grid container spacing={3} justifyContent='center'>
                                                <Grid item xs={1} md={4} ><Tooltip title="Update" placement="bottom"><IconButton onClick={() => onUpdate(item)} aria-label="delete" color="primary">
                                                    <EditIcon />
                                                </IconButton></Tooltip></Grid>
                                                <Grid item xs={1} md={4}><Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteHandler(item.id)} aria-label="delete" color="error">
                                                    <DeleteIcon />
                                                </IconButton></Tooltip></Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                )
                            })
                        }
                        <Box  sx= {{display:'none'}}>
                            <Box component='h4'> Completed  </Box>
                            {
                                completeTask.map((item) => {
                                    return (
                                        <Grid key={item.id} container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", px: 2, pb: 1 }}>
                                            <Grid item xs={12} md={1} sx={{ pt: 1 }}><CheckBoxComp /></Grid>
                                            <Grid item xs={12} md={11} sx={{ pt: 1 }}></Grid>
                                        </Grid>

                                    )
                                })
                            }

                        </Box>
                    </Box>


                </Box>
            </Box>
        </Box>
    )
}

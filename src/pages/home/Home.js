import React, { useState } from 'react'
import './Home.css'
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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SideNavBar from '../../component/sideNavBar/SideNavBar'
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size'



// for tooltip
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));



// custom date set
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
    const [width, height] = useWindowSize()

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
    const onChangeHandler = (CompItem) => {
        let compTask = {
            id: CompItem.id,
            taskDetail: CompItem.taskDetail
        }

        let newTask = taskData.filter((item) => item.id !== CompItem.id)
        setTaskData(newTask)
        setCompleteTask([...completeTask, compTask])
        setInputTask('')
        setUpdateIs(true)
        alert('Changed to Completed')
    }
    const onChangeCompleteHandler = (unCompItem) => {
        let unCompTask = {
            id: unCompItem.id,
            taskDetail: unCompItem.taskDetail
        }

        let newTask = completeTask.filter((item) => item.id !== unCompItem.id)
        setCompleteTask(newTask)
        setTaskData([unCompTask, ...taskData])
        setInputTask('')
        setUpdateIs(true)
        alert('Changed to uncompleted task')
    }
    const onDeleteCompletedHandler = (compTaskId) => {
        let newTask = completeTask.filter((item) => item.id !== compTaskId)
        setCompleteTask(newTask)
        setInputTask('')
        setUpdateIs(true)
        alert('Completed task Deleted')
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', boxSizing: 'border-box', position: 'fixed' }}>
            <Box >
                <PrimarySearchAppBar />
            </Box>
            <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row', boxSizing: 'border-box' }}>

                {/* App bar box  */}
                {openLeft ?
                    <Box sx={{ height: '100%', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                        <SideNavBar />
                    </Box> :
                    <Box sx={{ height: '100%', display: 'none', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                    </Box>
                }


                {/* Main content box*/}
                <Box sx={{ height: '100%', width: '55%', px: 1, overflowX: 'auto', pt: '70px', boxSizing: 'border-box', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
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
                    <Box sx={{ px: 4, overflowY: 'auto', height: { xs: '45vh', md: '63vh' } }} >
                        <Box component='h4' sx={{ my: 1, mb: 2 }}> Tasks  </Box>
                        {
                            taskData.map((item) => {
                                return (
                                    <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content" }}>

                                        <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }}><BootstrapTooltip title="Mark as completed" placement="top"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 19 } }} onChange={() => onChangeHandler(item)} /></BootstrapTooltip></Grid>
                                        <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                            <Box>
                                                <Box component='button' sx={{ display: 'inline-block', backgroundColor: 'inherit', border: 0, width: '100%', padding: '11px 5px', textAlign: 'left' }}>{item.taskDetail} </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                            <Tooltip title="Update" placement="bottom"><IconButton onClick={() => onUpdate(item)} aria-label="delete" color="primary"> <EditIcon sx={{ fontSize: 19 }} /></IconButton></Tooltip>
                                            <Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteHandler(item.id)} aria-label="delete" color="error"><DeleteIcon sx={{ fontSize: 19 }} /></IconButton></Tooltip>
                                        </Grid>

                                    </Grid>
                                )
                            })
                        }
                        <Box sx={{}}>
                            <Box component='h4' sx={{ my: 2 }}> Completed  </Box>
                            {
                                completeTask.map((item) => {
                                    return (
                                        <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", }}>
                                            <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right',}} ><BootstrapTooltip title="Mark as not completed" placement="top" ><Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 19 } }} onChange={() => onChangeCompleteHandler(item)} /></BootstrapTooltip></Grid>
                                            <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                                <Box>
                                                    <Box component='button' sx={{ display: 'inline-block', backgroundColor: 'inherit', border: 0, width: '100%', padding: '11px 5px', textAlign: 'left' }}><del>{item.taskDetail}</del></Box>
                                                </Box>
                                            </Grid>
                                            <Grid xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                                <Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteCompletedHandler(item.id)} aria-label="delete" color="error"><DeleteIcon sx={{ fontSize: 19 }} /></IconButton></Tooltip>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }

                        </Box>
                    </Box>
                </Box>
                {
                    width >= 800 ?
                        <Box sx={{ height: '100%', width: '320px', px: 1, overflowX: 'auto', pt: '65px', boxSizing: 'border-box', bgcolor: '#EAEAEA' }}>
                            <Box>

                                <Paper >
                                    <Box component='h4' > <Checkbox /> Test </Box>
                                    <Box component='p' sx={{ pl: 1, position: 'relative', color: '#757de8' }} > <AddIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add step</Box></Box>
                                </Paper>
                                <Paper >
                                    <Box className='hoverColor' component='p' sx={{ px: 1, pt: 2, pb: 1, position: 'relative', color: '#757de8' }} > <LightModeOutlinedIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add to My Day</Box></Box>

                                </Paper>
                                <Paper>
                                    <Box className='hoverColor' component='p' sx={{ pl: 1, py: 2, m: 0, borderBottom: 1, borderColor: '#e0e0e0', position: 'relative', color: '#525151' }} > <NotificationsNoneIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Remind me</Box></Box>
                                    <Box className='hoverColor' component='p' sx={{ pl: 1, py: 2, m: 0, borderBottom: 1, borderColor: '#e0e0e0', position: 'relative', color: '#525151' }} > <CalendarTodayIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add due date</Box></Box>
                                    <Box className='hoverColor' component='p' sx={{ pl: 1, py: 2, m: 0, position: 'relative', color: '#525151' }} > <EventNoteIcon /><Box sx={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Reapet</Box></Box>

                                </Paper>
                                <Paper >
                                    <Box component='p' className='hoverColor' sx={{ px: 1, py: 2, position: 'relative', color: '#525151' }} > <LocalOfferIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Pick a category</Box></Box>
                                </Paper>
                                <Paper >
                                    <Box component='p' className='hoverColor' sx={{ px: 1, py: 2, position: 'relative', color: '#525151' }} > <AttachFileIcon /><Box style={{ position: 'absolute', left: '50px', display: 'inline-Block', }}>Add File</Box></Box>
                                </Paper>
                                <Paper >
                                    <Box component='p' sx={{ p: 1, position: 'relative', color: '#525151', height: '60px' }} >Add Note</Box>
                                </Paper>
                            </Box>
                        </Box> :
                        null
                }
            </Box>
        </Box >
    )
}

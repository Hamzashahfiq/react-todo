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
import RightSideBar from '../../component/rightSidebar/RightSideBar';
import Modal from '@mui/material/Modal';

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

// for model style
const style = {
    width: '320px',
    height: '100vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    zIndex: 300
};


export default function Home() {
    const [width, height] = useWindowSize()
    const [open, setOpen] = React.useState(true);
    const [openLeft, setOpenLeft] = useState(width >= 800 ? true : false)
    const [inputTask, setInputTask] = useState('')
    const [taskData, setTaskData] = useState([])
    const [updateIs, setUpdateIs] = useState(true)
    const [updatedId, setUpdatedId] = useState(0)
    const [completeTask, setCompleteTask] = useState([])
    const [rightBarOpen, setRightBarOpen] = useState(false)
    const [rightBarText, setRightBarText] = useState('')
    const [rightBartextCheck, setRightBartextCheck] = useState(true)
    const [taskShow, setTaskShow] = useState(false)
    const [completedShow, setCompletedShow] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const leftDivHandler = () => {
        setOpenLeft(false)
    }
    const leftDivHandlershow = () => {
        setOpenLeft(true)
        setOpen(true)
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
        setTaskShow(true)
        setInputTask('')
    }
    const onDeleteHandler = (uuid) => {
        let newTask = taskData.filter((item) => item.id !== uuid)

        setTaskData(newTask)
        setInputTask('')
        setUpdateIs(true)
        setRightBarOpen(false)
        alert('Deleted')
        if (newTask.length === 0) {
            setTaskShow(false)
        }
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
        setCompletedShow(true)
        setRightBarOpen(false)
        alert('Changed to Completed')
        if (newTask.length === 0) {
            setTaskShow(false)
        }
    }
    const onChangeHandlerRight = (CompItem) => {
        let compTask = {
            id: CompItem.id,
            taskDetail: CompItem.taskDetail
        }

        let newTask = taskData.filter((item) => item.id !== CompItem.id)
        setTaskData(newTask)
        setCompleteTask([...completeTask, compTask])
        setInputTask('')
        setUpdateIs(true)
        setRightBartextCheck(false)
        setCompletedShow(true)
        alert('Changed to Completed')
        if (newTask.length === 0) {
            setTaskShow(false)
        }
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
        setTaskShow(true)
        setRightBarOpen(false)
        alert('Changed to uncompleted task')
        if (newTask.length === 0) {
            setCompletedShow(false)
        }
    }
    const onChangeCompleteHandlerRight = (unCompItem) => {
        let unCompTask = {
            id: unCompItem.id,
            taskDetail: unCompItem.taskDetail
        }

        let newTask = completeTask.filter((item) => item.id !== unCompItem.id)
        setCompleteTask(newTask)
        setTaskData([unCompTask, ...taskData])
        setInputTask('')
        setUpdateIs(true)
        setRightBartextCheck(true)
        setTaskShow(true)
        alert('Changed to uncompleted task')
        if (newTask.length === 0) {
            setCompletedShow(false)
        }
    }
    const onDeleteCompletedHandler = (compTaskId) => {
        let newTask = completeTask.filter((item) => item.id !== compTaskId)
        setCompleteTask(newTask)
        setInputTask('')
        setUpdateIs(true)
        setRightBarOpen(false)
        alert('Completed task Deleted')
        if (newTask.length === 0) {
            setCompletedShow(false)
        }
    }
    const onClickDataItem = (item) => {
        setRightBarOpen(true)
        setRightBarText({ id: item.id, taskDetail: item.taskDetail })
        setRightBartextCheck(true)

    }
    const rightBarHideHandler = () => {
        setRightBarOpen(false)

    }
    const onClickDataCompItem = (item) => {
        setRightBarOpen(true)
        setRightBarText({ id: item.id, taskDetail: item.taskDetail })
        setRightBartextCheck(false)

    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', boxSizing: 'border-box', position: 'fixed' }}>
            <Box >
                <PrimarySearchAppBar />
            </Box>
            <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row', boxSizing: 'border-box' }}>

                {/* App bar box  */}
                {openLeft ?
                    width >= 800 ?
                        <Box sx={{ height: '100%', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                            <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                            <SideNavBar />
                        </Box> :
                        // :<Box sx={{ height: '100%', display: 'none', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                        //     <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                        // </Box> 
                        <div>
                            <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Box sx={{ height: '100%', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                                        <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                                        <SideNavBar />
                                    </Box>
                                    {/* <Box sx={{ height: '100%', display: 'none', minWidth: '250px', bgcolor: '#EAEAEA', pt: '70px', px: 1, boxSizing: 'border-box' }}>
                                    <IconBtn icon={<MenuIcon />} onClickHandler={leftDivHandler} btnStyle={{ marginLeft: { xs: '0', sm: '7px' } }} />
                                </Box> */}
                                </Box>
                            </Modal>
                        </div> :
                    null
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
                        {taskShow ? <Box component='h4' sx={{ my: 1 }}> Tasks  </Box> : null}
                        {
                            taskData.map((item) => {
                                return (
                                    <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content" }}>

                                        <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }}><BootstrapTooltip title="Mark as completed" placement="top"><Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} onChange={() => onChangeHandler(item)} /></BootstrapTooltip></Grid>
                                        <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                            <Box>
                                                <Button className='hoverColor' onClick={() => onClickDataItem(item)} sx={{ color: 'black', textTransform: 'none', display: 'inline-block', backgroundColor: 'inherit', border: 0, width: '100%', padding: '7px 7px', textAlign: 'left' }}>{item.taskDetail} </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                            <Tooltip title="Update" placement="bottom"><IconButton onClick={() => onUpdate(item)} aria-label="delete" color="primary"> <EditIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                            <Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteHandler(item.id)} aria-label="delete" color="error"><DeleteIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                        </Grid>

                                    </Grid>
                                )
                            })
                        }
                        <Box sx={{}}>
                            {completedShow ? <Box component='h4' sx={{ mb: 1, mt: 2 }}> Completed  </Box> : null}
                            {
                                completeTask.map((item) => {
                                    return (
                                        <Grid key={item.id} className='hoverColor' container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", }}>
                                            <Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right', }} ><BootstrapTooltip title="Mark as not completed" placement="top" ><Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} onChange={() => onChangeCompleteHandler(item)} /></BootstrapTooltip></Grid>
                                            <Grid item xs={6} sm={7} md={9} sx={{ color: 'black', textAlign: 'left' }}>
                                                <Box>
                                                    <Button className='hoverColor' onClick={() => onClickDataCompItem(item)} sx={{ display: 'inline-block', textTransform: 'none', backgroundColor: 'inherit', border: 0, color: 'black', width: '100%', padding: '7px 7px', textAlign: 'left' }}><del>{item.taskDetail}</del></Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4} sm={3} md={2} sx={{ textAlign: 'center' }}>
                                                <Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteCompletedHandler(item.id)} aria-label="delete" color="error"><DeleteIcon sx={{ fontSize: 20 }} /></IconButton></Tooltip>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }

                        </Box>
                    </Box>
                </Box>
                {
                    rightBarOpen ?
                        <RightSideBar rightBarText={rightBarText} rightBarHideHandler={rightBarHideHandler} rightBartextCheck={rightBartextCheck}
                            onChangeHandlerRight={onChangeHandlerRight} onChangeCompleteHandlerRight={onChangeCompleteHandlerRight} onDeleteHandler={onDeleteHandler}
                            onDeleteCompletedHandler={onDeleteCompletedHandler} /> :
                        null
                }
            </Box>

        </Box >
    )
}

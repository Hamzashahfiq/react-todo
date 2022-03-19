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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SideNavBar from '../../component/sideNavBar/SideNavBar'
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


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
  const [openLeft, setOpenLeft] = useState(true)
  // const [inputTask, setInputTask] = useState('')
  // const [taskData, setTaskData] = useState([])
  // const [updateIs, setUpdateIs] = useState(true)
  // const [updatedId, setUpdatedId] = useState(0)
  // const [completeTask, setCompleteTask] = useState([])


  const leftDivHandler = () => {
    setOpenLeft(false)
  }
  const leftDivHandlershow = () => {
    setOpenLeft(true)
  }


  // const onSubmitHandler = () => {
  //   if (!inputTask) {
  //     alert("please add some task in input field")
  //     return
  //   }
  //   let task = {
  //     id: uuidv4(),
  //     taskDetail: inputTask
  //   }
  //   setTaskData([task, ...taskData])
  //   setInputTask('')
  // }
  // const onDeleteHandler = (uuid) => {
  //   let newTask = taskData.filter((item) => item.id !== uuid)

  //   setTaskData(newTask)
  //   setInputTask('')
  //   setUpdateIs(true)
  //   alert('Deleted')
  // }

  // const onUpdate = (item) => {
  //   setInputTask(item.taskDetail)
  //   setUpdatedId(item.id)
  //   setUpdateIs(false)
  // }


  // const updateHandler = () => {
  //   let task = {
  //     id: updatedId,
  //     taskDetail: inputTask

  //   }
  //   let newTaskData = taskData.map((item) => {
  //     if (item.id === updatedId) {
  //       return task
  //     } else {
  //       return item
  //     }

  //   })

  //   setTaskData(newTaskData)
  //   setInputTask('')
  //   setUpdateIs(true)
  //   alert('updated')

  // }
  // const onChangeHandler = (CompItem) => {
  //   let compTask = {
  //     id: CompItem.id,
  //     taskDetail: CompItem.taskDetail
  //   }

  //   let newTask = taskData.filter((item) => item.id !== CompItem.id)
  //   setTaskData(newTask)
  //   setCompleteTask([...completeTask, compTask])
  //   setInputTask('')
  //   setUpdateIs(true)
  //   alert('Changed to Completed')
  // }
  // const onChangeCompleteHandler = (unCompItem) => {
  //   let unCompTask = {
  //     id: unCompItem.id,
  //     taskDetail: unCompItem.taskDetail
  //   }

  //   let newTask = completeTask.filter((item) => item.id !== unCompItem.id)
  //   setCompleteTask(newTask)
  //   setTaskData([unCompTask, ...taskData])
  //   setInputTask('')
  //   setUpdateIs(true)
  //   alert('Changed to uncompleted task')
  // }

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
              Task
            </Box>
            <Box component="p" sx={{ typography: 'subtitle2', fontWeight: 'light', marginTop: '5px' }}>
              {dayName},{monthName} {currentDate}
            </Box>
            {/* <InputTask inputTask={inputTask} setInputTask={setInputTask} updateIs={updateIs} updateHandler={updateHandler} onSubmitHandler={onSubmitHandler} /> */}
          </Box>
          {/* <Box sx={{ px: 4, overflowY: 'auto', height: { xs: '50vh', md: '63vh' } }} >
            <Box component='h4'> Tasks  </Box>
            {
              taskData.map((item) => {
                return (
                  <Button sx={{ display: 'inline-block', width: '100%', m: 0, p: 0, }}>
                    <Grid key={item.id} container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", pb: 1 }}>

                      <Grid item xs={1} md={1}><BootstrapTooltip title="Mark as completed" placement="top"><Checkbox onChange={() => onChangeHandler(item)} /></BootstrapTooltip></Grid>
                      <Grid item xs={12} md={9} sx={{ pt: 1, color: 'black', textAlign: 'left' }}>{item.taskDetail}</Grid>
                      <Grid item xs={12} md={2}>
                        <Tooltip title="Update" placement="bottom"><IconButton onClick={() => onUpdate(item)} aria-label="delete" color="primary"> <EditIcon /></IconButton></Tooltip>
                        <Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteHandler(item.id)} aria-label="delete" color="error"><DeleteIcon /></IconButton></Tooltip>

                        {/* <Grid container spacing={3} justifyContent='center'>
                                                <Grid item xs={1} md={4} ><Tooltip title="Update" placement="bottom"><IconButton onClick={() => onUpdate(item)} aria-label="delete" color="primary">
                                                    <EditIcon />
                                                </IconButton></Tooltip></Grid>
                                                <Grid item xs={1} md={4}><Tooltip title="Delete" placement="bottom"><IconButton onClick={() => onDeleteHandler(item.id)} aria-label="delete" color="error">
                                                    <DeleteIcon />
                                                </IconButton></Tooltip></Grid>
                                            </Grid> */}
                      {/* </Grid>
                    </Grid>
                  </Button>
                )
              })
            }
            <Box sx={{}}>
              <Box component='h4'> Completed  </Box>
              {
                completeTask.map((item) => {
                  return (
                    <Button sx={{ display: 'inline-block', width: '100%', m: 0, p: 0 }}>
                      <Grid key={item.id} container sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', minHeight: "fit-content", pb: 1 }}>
                        <Grid item xs={12} md={1} ><BootstrapTooltip title="Mark as not completed" placement="top" ><Checkbox defaultChecked onChange={() => onChangeCompleteHandler(item)} /></BootstrapTooltip></Grid>
                        <Grid item xs={12} md={11} sx={{ pt: 1, color: 'black', textAlign: 'left' }}><del>{item.taskDetail}</del></Grid>
                      </Grid>
                    </Button>
                  )
                })
              }

            </Box>
          </Box> */}
        </Box>
        {/* <Box sx={{ height: '100%', width: '200px', px: 1, overflowX: 'auto', pt: '80px', boxSizing: 'border-box', bgcolor: '#EAEAEA' }}>
                   <Box>

                       <Paper >
                            <Box component='h4' > <Checkbox /> Test </Box>
                            <Box component='p' sx={{pl:1,position:'relative' }} > <AddBoxOutlinedIcon /><a href='#' style={{position:'absolute',top:-1,left:'50px', textDecoration:'none',display:'inline-Block',}}>Add step</a></Box>
                       </Paper>
                       <Paper >
                            <Box component='h4' sx={{p:2,pl:1,position:'relative' }} > <LightModeOutlinedIcon /> Test </Box>
                           
                       </Paper>
                       <Paper >
                            <Box component='h4' > <Checkbox /> Test </Box>
                            <Box component='p' sx={{pl:1,position:'relative' }} > <AddBoxOutlinedIcon /><a href='#' style={{position:'absolute',top:-1,left:'50px', textDecoration:'none',display:'inline-Block',}}>Add step</a></Box>
                       </Paper>
                       <Paper >
                            <Box component='h4'  > <Checkbox /> Test </Box>
                            <Box component='p' sx={{pl:1,position:'relative' }} > <AddBoxOutlinedIcon /><a href='#' style={{position:'absolute',top:-1,left:'50px', textDecoration:'none',display:'inline-Block',}}>Add step</a></Box>
                       </Paper>
                       <Paper >
                            <Box component='h4' > <Checkbox /> Test </Box>
                            <Box component='p' sx={{pl:1,position:'relative' }} > <AddBoxOutlinedIcon /><a href='#' style={{position:'absolute',top:-1,left:'50px', textDecoration:'none',display:'inline-Block',}}>Add step</a></Box>
                       </Paper>
                   </Box>
                </Box> */}
      </Box>
    </Box >
  )
}

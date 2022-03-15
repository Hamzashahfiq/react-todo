import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { v4 as uuidv4 } from 'uuid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Grid from '@mui/material/Grid';
import EditOffTwoToneIcon from '@mui/icons-material/EditOffTwoTone';



const drawerWidth = 240;
const ariaLabel = { 'aria-label': 'description' };

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

// custome js for date 

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



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const iconList = [<WbSunnyOutlinedIcon />, <StarBorderOutlinedIcon />, <CalendarTodayIcon />, <PermContactCalendarOutlinedIcon />, <HomeOutlinedIcon />]

  const [inputTask, setInputTask] = useState('')
  const [taskData, setTaskData] = useState([])

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



  return (
    <Box sx={{border:1}}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar> */}
      <Box sx={{ position: "fixed", top: "70px", left: { xs: "20px", sm: '28px' }, border:2 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#EAEAEA'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ marginTop: '60px', marginRight: { xs: '184px', sm: '175px' } }}>
          <Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {['My Day', 'Important', 'Planned', 'Assigned to me', 'Tasks'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {iconList[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
          <Box sx={{ marginLeft: { xs: '234px', sm: '242px' }, mt: 2, border: 2 }}>
            <Box component="h3" mb='0'>
              My Day
            </Box>
            <Box component="p" sx={{ typography: 'subtitle2', fontWeight: 'light', marginTop: '5px' }}>
              {dayName},{monthName} {currentDate}
            </Box>
            <Box>
              <InputTask inputTask={inputTask} setInputTask={setInputTask} onSubmitHandler={onSubmitHandler} />
            </Box>
          </Box>

          <Box sx={{ marginLeft: { xs: '234px', sm: '242px' }, px: 4, maxHeight: { xs: '50vh', md: '60vh' }, overflow: "auto", border: 1, mt: { xs: 28, md: 22 }, mr: { xs: 0, md: 2 } }} >
            {
              taskData.map((item) => {
                return (<Box sx={{ borderBottom: 1, wordWrap: 'break-word', borderColor: '#e0e0e0', width: "100%", minHeight: "fit-content" }}><Grid container> <Grid item xs={12} md={10} sx={{ py: 2, px: 2 }}>{item.taskDetail}</Grid>
                  <Grid item xs={6} md={1} sx={{ py: { xs: 0, md: 1 }, borderTop: { xs: 1, md: 0 }, borderColor: { xs: '#e0e0e0', md: 'none' } }}>
                    <IconButton sx={{ p: 0, m: 0, px: 1, py: { xs: 1, md: 1 }, float: 'right' }} aria-label="Update">
                      <EditOffTwoToneIcon sx={{ color: '#003c8f' }} />
                    </IconButton></Grid>
                  <Grid item xs={6} md={1} sx={{ py: { xs: 0, md: 1 }, borderTop: { xs: 1, md: 0 }, borderColor: { xs: '#e0e0e0', md: 'none' } }}>
                    <IconButton sx={{ p: 0, m: 0, px: 1, py: { xs: 1, md: 1 }, }} aria-label="delete">
                      <DeleteTwoToneIcon sx={{ color: '#ba000d' }} />
                    </IconButton>
                  </Grid></Grid>
                </Box>)
              })
            }
          </Box>
      </Main>
    </Box>
  );
}

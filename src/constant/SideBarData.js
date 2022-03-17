import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const SideBarData = [
    {
        name: 'My Day',
        icon: <LightModeOutlinedIcon />
    },
    {
        name: 'Important',
        icon: <GradeOutlinedIcon />
    },
    {
        name: 'Planned',
        icon: <PermContactCalendarOutlinedIcon />
    },
    {
        name: 'Assigned to me',
        icon: <PermIdentityOutlinedIcon />
    },
    {
        name: 'Task',
        icon: <HomeOutlinedIcon/>
    },
]
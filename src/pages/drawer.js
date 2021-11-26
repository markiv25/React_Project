import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import FindInPageIcon from '@mui/icons-material/FindInPage';
import { Link } from "react-router-dom";
import ControlledOpenSpeedDial from '../component/SpeedDial.js';
import ExploreIcon from '@mui/icons-material/Explore';

//import { People } from '@material-ui/icons';
//import { useRouter } from "react-router-dom";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 11),
  color: 'black',
  boxShadow: 3,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({


  background: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 10,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();

  < ControlledOpenSpeedDial />
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)', maxHeight: '100%' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <img src="https://www.rit.edu/fa/humanresources/sites/rit.edu.fa.humanresources/themes/rit_fa_bootstrap/images/RIT_header.png" height='40px' />
          <Typography variant="h6" sx={{ marginLeft: "550px" }}>
            IST Department @ Rochester Institute of Technology
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} PaperProps={{
        sx: {
          marginTop: '100px',
          height: "550px",
          background: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
          color: "black",
          borderRadius: '20px',
          boxShadow: 30,
        }
      }}>
        <Divider />

        <List onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          <ListItem >

            <IconButton
              color="info"
              aria-label="open drawer"
              onMouseEnter={handleDrawerOpen}
              size="large"
              edge="start"
              sx={{

                ...(open && { display: 'none' }),
              }}
            >< MenuIcon />
            </IconButton>

            <IconButton color='error'>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon color="info"
                size="large"
                aria-label="open drawer"
                onMouseEnter={handleDrawerOpen}
                edge="start"
                sx={{
                  ...(!open && { display: 'none' }),
                }}
              ></ChevronLeftIcon>}
            </IconButton>
          </ListItem>

          <ListItem >
            <ListItemIcon >
              <Link to="/">
                <HomeOutlinedIcon color='error'></HomeOutlinedIcon>
              </Link>
            </ListItemIcon>
            <ListItemText primary="HOME" secondary="IST-Department" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link to="/Deg">
                <CastForEducationIcon color='error' />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Degree's" secondary="Degrees offered" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link to="/M_Deg">
                <AddModeratorIcon color='error' />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Minor Degrees" secondary="Minor Degrees offered" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link to="/People">
                <SupervisedUserCircleIcon color='error' />
              </Link>
            </ListItemIcon>
            <ListItemText primary="People" secondary="People Working" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link to="/Research">
                <FindInPageIcon color='error' />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Research" secondary="Research Topics " />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Link to="/Map">
                <ExploreIcon color='error' />
              </Link>
            </ListItemIcon>
            <ListItemText primary="Map" secondary="Map of I-School" />
          </ListItem>

        </List>

        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      </Box>

    </Box>


  );
}
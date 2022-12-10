import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBarImage from '../../assets/images/NavBarImage.png'



const drawerWidth = 240;
const navItems = [
  {
    name: "GROW",
    link: "#Grow"
  },
  {
    name: "MEET ME",
    link: "#MeetMe"
  },
  {
    name: "OFFERINGS",
    link: "#Offerings"
  },
  {
    name: "REVIEWS",
    link: "#Reviews"
  },
  {
    name: "CONTACT",
    link: "#Contact"
  },
  {
    name: "FAQ",
    link: "/faq"
  },
];

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <Typography className="navIcon" variant="h6" sx={{ my: 2 }}>
      <a href="/">
      <img className="navImage" alt="lotus flower home button" src={NavBarImage}></img>
        </a>
      </Typography>
      
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem className="navText" key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}
            component="a" href={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <a href="/">
            <img className="navImage" alt="lotus flower home button" src={NavBarImage}></img>
            </a>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <a className="navButton" href={item.link} key={item.name} sx={{ color: '#fff' }}>
                {item.name} 
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Nav;
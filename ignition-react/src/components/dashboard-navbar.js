import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Link, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { theme } from 'src/theme';
import { Logo } from './logo';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const LogoImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  maxWidth: '100%',
  height: 40,
  [theme.breakpoints.up('md')]: {
    height:70,
  },
  [theme.breakpoints.down('md')]: {
    height:50,
  },
  margin:20
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          borderBottom: '6px solid #06313d',
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          // disableGutters
          sx={{
            minHeight: 100,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Igntion Dashboard">
              {/* <Box
                component="img" 
                src="/static/images/ignitionLogo.png" 
                sx={{
                  minHeight: 100,
                  margin:5,
                }}
              /> */}

        <Box sx={{ textAlign: 'center' }}>
        <Link href="/">
        <LogoImage
              alt="Ignition Dashboard"
              src="/static/images/ignitionLogo.png"
            />
          </Link>
          <Link href="/">
          <LogoImage
              alt="University of Salford"
              src="/static/images/salfordLogo.png"
             
            />
          </Link>

          <Link href="/">
          <LogoImage
              alt="UIA"
              src="/static/images/UIA.png"
            />
          </Link>
          <Link href="/">
          <LogoImage
              alt="EU"
              src="/static/images/EU-01.jpg"
            />
          </Link>
            </Box>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar> */}
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

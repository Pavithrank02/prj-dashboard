import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FETCHAPI } from '../utils/constants';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Logout from './Logout';
import { Grid } from '@mui/material';



const Header = (props) => {
  const {name} = props
  // console.log(props.name)
  const { id } = props.id
  // console.log('sss',name)
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState("");
  // console.log("ffs", user)

  useEffect(() => {
    fetchAPI()
  })

  const fetchAPI = async () => {
    const data = await fetch(FETCHAPI);
    const res = await data.json()
    // console.log(res);
    const result = res.users.find(i => {
      // console.log(i.id)
      if (i.id == id) {
        return i
      }
    }
    )
    setUser(result)

  }

  const handleUserinfo = () => {
    setToggle(!toggle)

  }
  if (toggle === true) {
    return (
      <Grid>
        <Grid position='absolute' sx={{ marginTop: 5, marginLeft: 100, width: 320 }}>
          <Logout data = {user}/>
        </Grid>
        <Grid >
          <AppBar position='static' color='transparent' elevation={1} sx={{ width: 1150 }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mt: -5,
                    ml: -3,
                    fontSize: 22,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Roboto',
                    fontWeight: 600,
                    color: 'grey-800',
                    textDecoration: 'none',
                    justifyContent: 'flex-start'
                  }}
                >
                    {name}
                </Typography>
                  <Tooltip title="Profile">
                    <IconButton onClick={handleUserinfo} sx={{ mt: -6, ml: '50vw' }}>
                      <Avatar alt="Remy Sharp" src={user.profilepicture} sx={{ width: "35px", height: '35px' }} />
                    </IconButton>
                  </Tooltip>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  onClick={handleUserinfo}
                  sx={{
                    mt: -7,
                    ml: 1,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {user.name}
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
      </Grid>

    )

  } else {
    return (
      <AppBar position='static' color='transparent' elevation={1} sx={{ width: 1150 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mt: -5,
                ml: -3,
                fontSize: 22,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 600,
                color: 'grey-800',
                textDecoration: 'none',
                justifyContent: 'flex-start'
              }}
            >
              {name}
            </Typography>

              <Tooltip title="Profile">
                <IconButton onClick={handleUserinfo} sx={{ mt: -6, ml: '50vw' }}>
                  <Avatar alt="Remy Sharp" src={user.profilepicture} sx={{ width: "35px", height: '35px' }} />
                </IconButton>
              </Tooltip>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleUserinfo}
              onBlur={handleUserinfo}
              sx={{
                mt: -6,
                ml: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {user.name}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    )
  }


}

export default Header
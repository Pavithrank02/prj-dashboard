import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useAPI from './useAPI';
import { useNavigate } from 'react-router';


const Logout = (props) => {
  // console.log(props)
  const { name, profilepicture, email } = props.data
  const navigate = useNavigate();
  const user = useAPI()
  const handleSubmit = (id) => {
    navigate(`/home/${id}`)
    window.location.reload()

  }

  return (
    <Grid sx={{ flexGrow: 1, }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card sx={{ width: 320, height: 450, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 5, GridShadow: 10, borderColor: 'white' }}>
            <CardContent>
              <Avatar alt="Remy Sharp" style={{ height: '100px', width: '100px' }} sx={{ ml: '50px' }} src={profilepicture} />
              <Typography sx={{ fontSize: 20, fontWeight: '', ml: 4 }} color="grey" gutterBottom>
                {name}
              </Typography>
              <Typography variant="h5" component="div">
              </Typography>
              <Typography sx={{ mb: 1.5, ml: 7 }} color="text.secondary">
                {email}
              </Typography>
              {user && user.users.filter((f) => f.id < 3).map((u) =>
                <List sx={{ width: '120%', minWidth: 160, bgcolor: 'background.paper', mt: -2, ml: 0 }}>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={u.profilepicture} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline', width: '90px' }}
                            component="span"
                            variant="body"
                            color="text.primary"
                            onClick={() => {
                              // setId(user.id)
                              handleSubmit(u.id)
                            }
                            }
                          >
                            {u.name}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              )}
            </CardContent>
            <CardActions>
              <Button size="small" href="/" style={{ p: '100px', backgroundColor: 'red', color: 'white', borderRadius: '10px' }} sx={{ ml: '20px', mt: '20px' }}>Sign Out</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Logout
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { FETCHAPI } from '../utils/constants';

export default function UsersList() {

  const [users, setUser] = useState("");
  // const [id, setId] = useState("");
  const navigate = useNavigate();

  // console.log(users);


  const fetchAPI = async () => {
    const data = await fetch(FETCHAPI);
    const res = await data.json()
    // console.log(res)
    setUser(res)
  }
  useEffect(() => {
    fetchAPI()
  })
  const handleSubmit = (id) => {
    navigate(`/home/${id}`)
  }

  return (
    <>
      {users && users.users.map((user) =>
        <List sx={{ width: '100%', minWidth: 560, bgcolor: 'background.paper' }}>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={user.profilepicture} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="h5"
                    color="text.primary"
                    onClick={() => {
                      // setId(user.id)
                      handleSubmit(user.id)
                    }

                    }
                  >
                    {user.name}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      )}

    </>


  );
}
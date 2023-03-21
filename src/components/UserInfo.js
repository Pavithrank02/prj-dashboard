import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { FETCHAPI } from '../utils/constants';
import { Grid, Typography } from '@mui/material';
import img1 from '../assets/image/map.PNG'


const UserInfo = (props) => {
  const [user, setUser] = useState("");
  const { id } = props.id

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const data = await fetch(FETCHAPI);
    const res = await data.json()
    const result = res.users.find(i => {
      if (i.id == id) {
        return i
      }
    }
    )
    setUser(result)
  }
  let info = user && Object.entries(user.company)
  let add = user && Object.entries(user.address)
  return (
    <Grid>
      {user && (
        <Grid sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} sx={{ height: 650, mt: 2 }}>
            <Grid item xs={4.3} sx={{ borderRight: 1, borderColor: 'lightgrey' }}>
              <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '60px' }} src={user.profilepicture} />
              <Typography sx={{ mt: 1, ml: 11, display: 'flex', alignItems: 'center', fontSize: 22, fontWeight: 600, color: '#696969' }}>
                {user.name}
              </Typography>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>Username :</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: '#5c5b58', fontWeight: 600 }}>{user.username}</Typography>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>email :</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: '#5c5b58', fontWeight: 600 }}>{user.email}</Typography>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>Phone :</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: '#5c5b58', fontWeight: 600 }}>{user.phone}</Typography>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>Website :</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography sx={{ padding: '7px', fontSize: 20, color: '#5c5b58', fontWeight: 600 }}>{user.website}</Typography>
                </Grid>
              </Grid>
              {/* {userdetails.map((e) => {
                return <Typography sx={{ padding: '8px', justifyContent: 'left', fontSize: 20, color: 'grey' }}>{e}</Typography>
              })}*/}
              <Typography sx={{ mt: 1, ml: 11, display: 'flex', alignItems: 'center', fontSize: 22, fontWeight: 600, color: 'grey' }}>
                Company
              </Typography>
              {info && info.map(([key, value]) => {
                // console.log(value.length)
                return (
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>{key}:</Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <Typography sx={{ padding: '7px', fontSize: 20, color: '#5c5b58', fontWeight: 600 }}>{value}</Typography>
                    </Grid>
                  </Grid>
                )
              })}
              {/* {companyDetails.map((e) => {
                return <Typography sx={{ padding: '8px', justifyContent: 'left', fontSize: 20, color: 'grey' }}>{e}</Typography>
              })} */}
            </Grid>
            <Grid item xs={7}>
              <Typography sx={{ mt: 1, display: 'flex', alignItems: 'center', fontSize: 22, fontWeight: 400, color: 'grey' }}>
                Address:
              </Typography>
              {add && add.map(([key, value]) => {
                console.log("val", value)
                if (typeof value === 'string') {
                  return (
                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>{key}:</Typography>
                      </Grid>
                      <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ padding: '7px', fontSize: 20, color: '#5c5b58', fontWeight: 600 }}>{value}</Typography>
                      </Grid>
                    </Grid>
                  )
                }
              })}
              <img src={img1} alt="gshs" style={{ height: '400px', width: '600px', zIndex: -100 }} />
            </Grid>

          </Grid>
        </Grid>

      )}
    </Grid>
  )
}

export default UserInfo



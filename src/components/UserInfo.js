import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { FETCHAPI } from '../utils/constants';
import { Grid, Typography } from '@mui/material';

// const userdetails = ['Username :', 'email :', 'Phone :', 'Website :'];
// const companyDetails = ['Name :', 'catchphrase :', 'bs :']
// const address = ['Street :', 'Suite :', 'City :', 'ZipCode :']

const UserInfo = (props) => {
  const [user, setUser] = useState("");
  // console.log("user", user)
  const { id } = props.id
  // const { users } = user

  const dummy = [
    [
      "street",
      "Kulas Light"
    ],
    [
      "suite",
      "Apt. 556"
    ],
    [
      "city",
      "Gwenborough"
    ],
    [
      "zipcode",
      "92998-3874"
    ]
  ]
  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
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
  let info = user && Object.entries(user.company)
  let profile = user && Object.entries(user)
  let add = user && Object.entries(user.address)
  // console.log("info", profile)
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
              {/* {profile && profile.filter((e) => {
                if (e.length<2) {
                  return e;
                } else {  
                  // console.log(e)
                }
              }).map(([key, value]) => {
                console.log("key",key, value)
                if(value.length < 100){

                  return (
                    <>
                      <Typography sx={{ padding: '7px', justifyContent: 'left', fontSize: 20, color: 'grey' }}>{key}:</Typography>
                      <Typography sx={{ padding: '7px', justifyContent: 'left', fontSize: 20, color: 'grey', fontWeight: 600 }}>{value}</Typography>
                    </>
                  )

                }else{
                  console.log()
                }
              })} */}
              {/* {userdetails.map((e) => {
                return <Typography sx={{ padding: '8px', justifyContent: 'left', fontSize: 20, color: 'grey' }}>{e}</Typography>
              })} */}
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
                      <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey', fontWeight: 600 }}>{value}</Typography>
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
                console.log("val",value)
                if(typeof value === 'string'){
                  return (
                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>{key}:</Typography>
                      <Typography sx={{ padding: '7px', fontSize: 20, color: 'grey' }}>{value}</Typography>
                    </Grid>
                  )
                }
              })}
            </Grid>
          </Grid>
        </Grid>

      )}
    </Grid>
  )
}

export default UserInfo


{/* <div>
          <div className='left'>
            <Avatar alt="Remy Sharp" style={{ height: '220px', width: '220px' }} sx={{ ml: '50px' }} src={user.profilepicture} />
            <p> {user.name}</p>
            <ul className='li'>
              <l1 className='list'>Username : {user.username}</l1>
              <l1 className='list'>email : {user.email}</l1>
              <l1 className='list'>Phone : {user.phone}</l1>
              <l1 className='list'>Website : {user.website}</l1>
            </ul>
            <h2>Company</h2>
            <ul className='li'>
              <l1 className='list'>Name : {user.company.name}</l1>
              <l1 className='list'>catchphrase : {user.company.catchPhrase} </l1>
              <l1 className='list'>bs : {user.company.bs}</l1>
            </ul>
          </div>
          <div className='right'>
            <h2>Address:</h2>
            <ul className='li'>
              <l1 className='list'>Street :</l1>
              <l1 className='list'>Suite :</l1>
              <l1 className='list'> City :</l1>
              <l1 className='list'>ZipCode :</l1>
            </ul>
            <img src={img1} alt="gshs" style={{ height: '400px', width: '600px', zIndex: -100 }} />
          </div>
        </div> */}

import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UsersList from '../components/UsersList'
import img from '../assets/image/wave.png'

export const BasicCard = (props) => {

  return (

    <Grid sx={{ flexGrow: 1}} >
      <img style={{ width: '1600px', height: '100%', minWidth: '400px' }} src={img} alt="gshs" />
      <Grid container spacing={1}
        marginTop="-400px"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid xs={4} sx>
          <Card style={{
            overflow: 'scroll',
            overflowX: 'hidden',
            margin: 0,
            border: '1px',

            padding: 0,

          }} sx={{
            minWidth: 430,
            borderRadius: '30px',
            height: '600px',
            "&::-webkit-scrollbar": {
              width: 10,

            },
            "&::-webkit-scrollbar-track": {
              mt: 13,
              mb: 2,
              backgroundColor: "transparent"
            },
            "&::-webkit-scrollbar-thumb": {
              overflowX: 'hidden',
              backgroundColor: "lightgrey",
              borderRadius: 1,
              marginTop: '20px'
            }
          }}>
            <CardContent sx={{
              position: 'relative',
            }} >
              <Typography variant="h5" color="text.secondary" gutterBottom align='center' fontWeight={500} >
                Select an account
              </Typography>
            </CardContent>
            <CardContent >
              <UsersList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>

  )
}

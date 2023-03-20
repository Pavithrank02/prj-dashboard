
import { Link, useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import queryString from 'query-string';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';



const Sidebar = () => {
  const userId = useParams();
  const { id, profile } = userId
  console.log("loc", userId);


  const handleIcon = () => {

    return (
      <Grid sx={{
        position: 'absolute', left: 308,
        width: 20,
        height: 54,
        borderTop: ' 10px solid transparent',
        borderBottom: '10px solid transparent',
        borderRight: '10px solid white'
      }}>
        <ChevronRightIcon sx={{ p: 1, backgroundColor: 'white', color: 'lightgrey', borderRadius: '50%', position: 'absolute', left: -7, top: -3 }} />
      </Grid>
    )
  }
  return (
    <Grid sx={{
      display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #4d4dff, #8533ff)',
      width: 280, height: 750, color: 'white', borderRadius: 8
    }}>
      <Grid sx={{ marginTop: 35 }}>
        <Link to={`/home/profile/${id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, borderBottom: 1, borderColor: "grey.500", width: 190, mt: 4 }}>
            Profile
            {profile === "profile" &&
              handleIcon()
            }
          </Typography>
        </Link>
        <Link to={`/home/post/${id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, borderBottom: 1, borderColor: "grey.500", width: 190, mt: 2 }}>
            Posts
            {profile === "post" &&
              handleIcon()
            }
          </Typography>
        </Link>
        <Link to={`/home/gallery/${id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, borderBottom: 1, borderColor: "grey.500", width: 190, mt: 2 }}>
            Gallery
            {profile === "gallery" &&
              handleIcon()

            }
          </Typography> </Link>
        <Link to={`/home/todo/${id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, mt: 2 }}>
            ToDo
            {profile === "todo" &&
              handleIcon()
            }
          </Typography> </Link>

      </Grid>
    </Grid>


  )
}

export default Sidebar
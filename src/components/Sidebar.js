
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useHistory, useLocation } from 'react-router';

const Sidebar = () => {
  const userId = useParams();
  const location = useLocation(); //using location to navigate
  const path = location.pathname
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
  //Displaying and rendering sidebar component.
  return (
    <Grid sx={{
      display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #4d4dff, #8533ff)',
      width: 280, height: 750, color: 'white', borderRadius: 8
    }}>
      <Grid sx={{ marginTop: 35 }}>
        <Link to={`/profile/${userId.id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, borderBottom: 1, borderColor: "grey.500", width: 190, mt: 4 }}>
            Profile
            {path.includes("profile") &&
              handleIcon()
            }
          </Typography>
        </Link>
        <Link to={`/post/${userId.id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, borderBottom: 1, borderColor: "grey.500", width: 190, mt: 2 }}>
            Posts
            {path.includes("post") &&
              handleIcon()
            }
          </Typography>
        </Link>
        <Link to={`/gallery/${userId.id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, borderBottom: 1, borderColor: "grey.500", width: 190, mt: 2 }}>
            Gallery
            {path.includes("gallery") &&
              handleIcon()
            }
          </Typography>
        </Link>
        <Link to={`/todo/${userId.id}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h2" sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '17px', ml: 6, mt: 2 }}>
            ToDo
            {path.includes("todo") &&
              handleIcon()
            }
          </Typography>
        </Link>

      </Grid>
    </Grid>


  )
}

export default Sidebar
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Box from '@mui/material/Box';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar';
import useAPI from './useAPI';
import { Drawer, Grid } from '@mui/material';
import { useState } from 'react';
import { Global } from '@emotion/react';

const shapeStyles = { bgcolor: 'green', width: 10, height: 10, mt: '12px', position: 'absolute', right: 20 };
const shapeCircleStyles = { borderRadius: '50%' };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const user = useAPI(); //Fetch API

  if (open) {

    //Display Chatbot

    return (
      <Grid sx={{ ml: 90, mt: 15 }}>
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `5%`,
              position: 'absolute',
              background: "white",
              top: '80vh',
              width: `20%`,
              left: '70%',
              overflow: 'visible',
            },
          }}
        />
        <Drawer
          // container={container}
          anchor="bottom"
          variant="persistent"
          position='absolute'
          onBackdropClick={toggleDrawer}
          hideBackdrop={true}
          open={open}
          onClose={open}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'left', p: 1, backgroundColor: 'rgb(48,92,212)', borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
            <ChatBubbleOutlineIcon style={{ color: 'white' }} />
            <Typography sx={{ width: '33%', flexShrink: 10, color: 'white', ml: 1 }}>
              Chat
            </Typography>
            <Typography>
              {open ? <ExpandMoreIcon onClick={toggleDrawer(open)} sx={{ ml: 19 }} style={{ color: 'white' }} /> : <ExpandLessIcon onClick={toggleDrawer(!open)} sx={{ ml: 19 }} style={{ color: 'white' }} />}
            </Typography>

          </Box>

          <Grid style={{ backgroundColor: 'white', color: 'black', borderColor: 'rgb(48,92,212)' }}>
            <Typography sx={{ color: 'text.secondary' }}>
              {user && user.users.map((u) => {
                return (
                  <Grid>
                    <Grid container sx={{ display: 'flex', flexDirection: 'row', p: 1, mr: 1 }}>
                      <Avatar alt="Remy Sharp" src={u.profilepicture} style={{ p: '0px' }} />
                      <Typography sx={{ color: 'text.secondary', ml: 2, mt: 1 }} >
                        {u.name}
                      </Typography>
                      {circle}
                    </Grid>
                  </Grid>)
              }
              )}
            </Typography>
          </Grid>
        </Drawer>
        <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'left', p: 1, backgroundColor: 'rgb(48,92,212)', width: 300, borderTopRightRadius: 10, borderTopLeftRadius: 10, ml: "7px" }}>
          <ChatBubbleOutlineIcon style={{ color: 'white' }} />
          <Typography sx={{ width: '33%', flexShrink: 10, color: 'white', ml: 1 }}>
            Chat
          </Typography>
          <Typography>
            {open ? <ExpandMoreIcon onClick={toggleDrawer(open)} sx={{ ml: 19 }} style={{ color: 'white' }} /> : <ExpandLessIcon onClick={toggleDrawer(!open)} sx={{ ml: 19 }} style={{ color: 'white' }} />}
          </Typography>
        </Box>
      </Grid>
    )
  } else {
    //Display only blank drawer
    return (
      <Grid sx={{ ml: 90, mt: 15 }}>
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `5%`,
              position: 'absolute',
              background: "white",
              top: '80vh',
              width: `20%`,
              left: '70%',
              overflow: 'visible',
            },
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'left', p: 1, backgroundColor: 'rgb(48,92,212)', width: 300, borderTopRightRadius: 10, borderTopLeftRadius: 10, ml: "7px" }}>
          <ChatBubbleOutlineIcon style={{ color: 'white' }} />
          <Typography sx={{ width: '33%', flexShrink: 10, color: 'white', ml: 1 }}>
            Chat
          </Typography>
          <Typography>
            {open ? <ExpandMoreIcon onClick={toggleDrawer(open)} sx={{ ml: 19 }} style={{ color: 'white' }} /> : <ExpandLessIcon onClick={toggleDrawer(!open)} sx={{ ml: 19 }} style={{ color: 'white' }} />}
          </Typography>
        </Box>
      </Grid>
    )
  }


}

export default Chatbot


// import React, { useState } from 'react'
// import { Global } from '@emotion/react';
// import { styled } from '@mui/material/styles';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import useAPI from './useAPI';
// import { Button, Drawer, Grid } from '@mui/material';

// const shapeStyles = { bgcolor: 'green', width: 10, height: 10, mt: '12px', position: 'absolute', right: 30 };
// const shapeCircleStyles = { borderRadius: '50%' };
// const circle = (
//   <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
// );

// const drawerBleeding = 20;

// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'white' ? 'white' : theme.palette.background.default,
// }));

// function SwipeableEdgeDrawer(props) {
//   const [open, setOpen] = useState(false);
//   const user = useAPI();

//   // console.log(user)

//   const toggleDrawer = () => () => {
//     setOpen(!open);
//   };


//   return (
//     <Grid>

//       <Global
//         styles={{
//           '.MuiDrawer-root > .MuiPaper-root': {
//             height: `calc(50% - ${drawerBleeding}px)`,
//             position: 'absolute',
//             background: "white",
//             scrollMargin: '50%',
//             top: '60%',
//             width: `20%`,
//             left: '70%',
//             overflow: 'visible',
//           },
//         }}
//       />
//       <Box sx={{ textAlign: 'center', pt: 1 }}>
//         <Button onClick={toggleDrawer(true)}>Open Chat</Button>
//         <Drawer
//           // container={container}
//           anchor="bottom"
//           position='fixed'
//           top='100px'
//           hideBackdrop={true}
//           open={open}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >

//           <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'left', p: 1, backgroundColor: 'rgb(48,92,212)' }}>
//             <ChatBubbleOutlineIcon style={{ color: 'white' }} />
//             <Typography sx={{ width: '33%', flexShrink: 0, ml: 1 }} style={{ color: 'white' }}>
//               Chat
//             </Typography>
//             <Typography>
//               {open ? <ExpandMoreIcon onClick={toggleDrawer(true)} sx={{ ml: 19 }} style={{ color: 'white' }} /> : <ExpandLessIcon onClick={toggleDrawer(false)} sx={{ ml: 19 }} style={{ color: 'white' }} />}
//             </Typography>

//             {/* <Button onClick={toggleDrawer(false)}>Open</Button> */}
//           </Box>

//           <Typography sx={{ color: 'text.secondary' }}>
//             {user && user.users.map((u) => {
//               return (
//                 <Grid>
//                   <Grid container sx={{ display: 'flex', flexDirection: 'row', p: 1, mr: 1, ml: 1 }}>
//                     <Avatar alt="Remy Sharp" src={u.profilepicture} style={{ p: '0px' }} />
//                     <Typography sx={{ color: 'text.secondary', ml: 2, mt: 1 }} >
//                       {u.name}
//                     </Typography>
//                     {circle}
//                   </Grid>
//                 </Grid>)
//             }
//             )}
//           </Typography>
//         </Drawer>
//       </Box>
//     </Grid>

//   );
// }

// export default SwipeableEdgeDrawer;


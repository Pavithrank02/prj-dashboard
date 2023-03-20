import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import useAPI from './useAPI';
import { Grid } from '@mui/material';

const shapeStyles = { bgcolor: 'green', width: 10, height: 10, mt: '12px', position: 'absolute', right: 20 };
const shapeCircleStyles = { borderRadius: '50%' };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Chatbot = () => {

  const user = useAPI();

  // console.log(user)

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid sx={{ ml: 100, mt: 15 }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '290px' }} style={{ backgroundColor: 'rgb(48,92,212)', color: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white', }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <ChatBubbleOutlineIcon />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Chat
          </Typography>
        </AccordionSummary >
        <AccordionDetails sx={{ backgroundColor: 'white', color: 'black', border: 1, borderColor: 'rgb(48,92,212)' }}>
          <Typography sx={{ color: 'text.secondary' }}>
            {user && user.users.map((u) => {
              return (
                <Grid>
                  <Grid container sx={{ display: 'flex', flexDirection: 'row', p: '2px', mr: 1 }}>
                    <Avatar alt="Remy Sharp" src={u.profilepicture} sx={{ p: '0px' }} />
                    <Typography sx={{ color: 'text.primary', ml: 2, mt: 1 }} >
                      {u.name}
                    </Typography>
                    {circle}
                  </Grid>
                </Grid>)
            }
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default Chatbot
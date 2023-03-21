import React from 'react'
import Grid from '@mui/material/Grid';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import { useParams } from "react-router-dom";
import Chatbot from '../components/Chatbot';

const Todo = () => {
  const userId = useParams();
  console.log("to", userId);
  return (
    <Grid sx={{ width: 1 }}>
      <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Grid gridColumn="span 3" sx={{ marginTop: 5, marginLeft: 6 }}>
          <Sidebar />
        </Grid>
        <Grid gridColumn="span 9" sx={{ marginTop: 9, marginLeft: -2 }} >
          <Header name={"ToDo"} id={userId} />
          <Body />
          <Chatbot />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Todo
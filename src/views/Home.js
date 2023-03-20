import React from 'react'
import Grid from '@mui/material/Grid';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Chatbot from '../components/Chatbot'
import UserInfo from '../components/UserInfo'
import { useParams } from "react-router-dom";

const Home = (props) => {
  const userId = useParams();
  // console.log("id", userId)
  // console.log("home", user);
  return (
    <Grid sx={{ width: 1 }}>
      <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Grid gridColumn="span 3" sx={{ marginTop: 5, marginLeft: 6 }}>
          <Sidebar />
        </Grid>
        <Grid gridColumn="span 9" sx={{ marginTop: 9, marginLeft: -2 }} >
          <Header name={"Profile"}  id={userId} />
          <UserInfo id={userId} />
          <Chatbot />
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Home
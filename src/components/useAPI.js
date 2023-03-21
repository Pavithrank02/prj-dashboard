import { useState, useEffect } from "react";
import { FETCHAPI } from '../utils/constants';

const useAPI = () => {

  const [users, setUser] = useState("");

  // Custom Hook 


  const fetchAPI = async () => {
    const data = await fetch(FETCHAPI);
    const res = await data.json()
    // console.log(res)
    setUser(res)
  }
  useEffect(() => {
    fetchAPI()
  }, [])
  return users
}

export default useAPI
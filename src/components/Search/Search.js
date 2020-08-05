import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Map from './map/map'

import "./Search.css"
import UserInd from "./User_Comp/User.js"
import Image from 'react-bootstrap/Image';

const Search = (props) => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('/users')
    .then(res => setUsers(res.data))
    
    
  },[])

const userList = users.map (user => <UserInd user={user}/>)

return (

<>
  <Map users={users} />

  {userList}
</>
)
}


export default Search;
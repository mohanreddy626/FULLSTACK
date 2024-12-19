import React, { useEffect, useState } from 'react'

export default function App() {

  const [user,setUser] = useState([]);
  const getUser = () =>{
    fetch('/api/user')
    .then(res => res.json())
    .then(json => setUser(json))
  }

  useEffect(() =>{
    getUser()
  },[])
  return (
    <div>
   {user.map((data) =>{
    return<>
    <div style={{border:'1px solid gray',width:'500px'}}>
    <h1>Name:{data.name}</h1>
    <h1>Username :{data.username}</h1>
    <h1>Email :{data.email}</h1>
    </div>
    </>
   })}
   
    </div>
  )
}

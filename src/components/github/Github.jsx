import React, { useEffect, useState } from 'react'

function Github() {
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/arpitbhatia23')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setdata(data)
        })
    })
  return (
    <div className='text-center text-white m-4 bg-gray-600 text bg-white p-4'>
        github follower:{data.followers}
<img src={data.avatar_url} alt="git pic" width={200}/>
      
    </div>
  )
}

export default Github

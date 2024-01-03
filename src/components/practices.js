
//async practice
import { useState ,useEffect} from "react"
import React from 'react'


function App(){

const [msg,setMsg]= useState('')
const whole=async()=>{

    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    const final=await data.json();
    setMsg(final)
    console.log(final)

    }
useEffect(()=>{
    whole();

},[])

return(

<div>
    <h2>List</h2>
    <p>{msg.message}</p>
</div>
)
}

export default App;
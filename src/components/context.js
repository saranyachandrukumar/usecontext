// useContext is a React hook that provides a way to share data (context) across multiple components without explicitly passing it through props.
import React,{createContext,useContext,useState} from 'react'

const UserContext = createContext()

export default function Context() {
    const [user]=useState('React')
  return (
   <UserContext.Provider value={user}>
       <h2>context</h2>
       <Component1 user={user}/>

    </UserContext.Provider>

  )
}
function Component1(){
    return(
        <>
          <h3>component 1</h3>
          <Component2 />

        </>
    )
}

function Component2({user}){
    return(
        <>
          <h3>component 2</h3>
          <Component3 />

        </>
    )
}
function Component3(){
    const user =useContext(UserContext)
    return(
        
        <>
          <h3>component 3</h3>
          <h3>{`user is ${user}`}</h3>

        </>
    )
}

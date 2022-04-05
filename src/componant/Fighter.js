import { useState } from "react"



export default({name,color,setvisible})=>{
    return(
        <div
        onClick={()=>{setvisible(true)}}
        className='fighter' 
        style={{backgroundColor:color,
        backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${name.toLowerCase()}/main.png)`}}>
        <h4>{name}</h4>
      </div>
    )
}
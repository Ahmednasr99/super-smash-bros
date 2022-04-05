import { useState } from "react"



// eslint-disable-next-line import/no-anonymous-default-export
export default({name,color,setvisible,selectedCharacter})=>{
    return(
        <div
        onClick={()=>{
            setvisible(true)
            selectedCharacter({name:name,color:color})}
        }
        className='fighter' 
        style={{backgroundColor:color,
        backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${name.toLowerCase()}/main.png)`}}>
        <h4>{name}</h4>
      </div>
    )
}
// eslint-disable-next-line import/no-anonymous-default-export
export default ({name,color,isVisible,selectedCharacter})=>{
    return(
        <div className='fighter-screen' style={{display:isVisible?"block":"none"}}>
        <h2>{selectedCharacter.name}</h2>
        <img width="100" height="100" alt="" src={`https://www.smashbros.com/assets_v2/${selectedCharacter.name}/fighter/roy/main.png`}/>
        <p>
          lorem
        </p>
        </div>
    )
}
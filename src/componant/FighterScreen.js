export default ({name,color,isVisible})=>{
    return(
        <div className='fighter-screen' style={{display:isVisible?"block":"none"}}>
        <h2>roy</h2>
        <img width="100" height="100" src='https://www.smashbros.com/assets_v2/img/fighter/roy/main.png'/>
        <p>
          lorem
        </p>
        </div>
    )
}
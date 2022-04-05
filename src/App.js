
import { useState } from 'react';
import './App.css';
import Fighter from './componant/Fighter';
import FighterScreen from './componant/FighterScreen';
const characters = [
  {name:'roy',color:'red'},
  {name:'fox',color:'red'},
  {name:'ganondorf',color:'red'},
  {name:'sheik',color:'red'},

]
// this is a component
function App() {
  const [visible,setvisible]=useState(false)
  const [selectedCharacter,setselectedCharacter]=useState({})
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {characters.map((element, i)=>{
          return (<Fighter name={element.name} color={element.color}  setvisible={setvisible} setselectedCharacter={setselectedCharacter}/>)

        })}
        

      </div>
      <div>
      <FighterScreen isVisible={visible} setvisible={setvisible} selectedCharacter={selectedCharacter}/>


      </div>
      



    </div>
  );
}
//this is exposes the components 
export default App;

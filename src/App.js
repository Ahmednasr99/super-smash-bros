
import { useState } from 'react';
import './App.css';
import Fighter from './componant/Fighter';
import FighterScreen from './componant/FighterScreen';
// this is a component
function App() {
  const [visible,setvisible]=useState(false)
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        <Fighter name={'roy'} color={'red'} img={''} setvisible={setvisible}/>
        <Fighter name={'fox'} color={'yellow'} img={''}/>
        <Fighter name={'ganondorf'} color={'green'} img={''}/>
        <Fighter name={'sheik'} color={'bluesky'} img={''}/>
      </div>
      <div>
      <FighterScreen isVisible={visible} setvisible={setvisible}/>


      </div>
      



    </div>
  );
}

export default App;

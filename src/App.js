
import './App.css';
import Fighter from './componant/Fighter';
// this is a component
function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        <Fighter name={'roy'} color={'red'} img={''}/>
        <Fighter name={'fox'} color={'yellow'} img={''}/>
        <Fighter name={'ganondorf'} color={'green'} img={''}/>
      

        

      </div>

    </div>
  );
}

export default App;

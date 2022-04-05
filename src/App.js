
import './App.css';
import Fighter from './componant/Fighter';
// this is a component
function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        <Fighter name={'roy'} color={'red'}/>
        <Fighter name={'fox'} color={'yellow'}/>
        <Fighter name={'gandolf'} color={'green'}/>
      

        

      </div>

    </div>
  );
}

export default App;

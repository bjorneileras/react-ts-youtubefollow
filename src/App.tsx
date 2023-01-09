import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet isLoggedIn={true} name={"Petter"} messageCount={10}/>
    </div>
  );
}

export default App;

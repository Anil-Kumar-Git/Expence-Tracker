import ExpenceTracker from "./Components/ExpenceTracker";
import './App.css'

function App() {
  
  // console.log("LOCAL STORAGE === ",localStorage.getItem('expenceTracerState'));

  return (
    <div className="App">
      <ExpenceTracker />
    </div>

  );
}

export default App;

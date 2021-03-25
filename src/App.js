import Home from './Home';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
           <Navbar />
      <div className="content">
        <h1>App component</h1>
        <Home/>
      </div>
      
    </div>
  );
}

export default App;

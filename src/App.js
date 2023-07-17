
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Header name="Birender" color="black" />
      <Main greet="Hey!!" />
      <Sidebar wish="Hello" />
    </div>

  );
}
export default App;


import './App.css';
import Navbar from './components/Navbar';
// import Textarea from './components/Textarea';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="Birender's TextUtils" />
      {/* <Textarea heading="Enter text here to analyze" /> */}
      <About />
    </>

  );
}
export default App;

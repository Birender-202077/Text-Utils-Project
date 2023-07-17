
import './App.css';

// function Header() {
//   return <h1>Hello World!</h1>
// }
// function App() {
//   return <Header />
// }

// export default App;

function App(props) {
  return (
    <h1>{props.title}</h1>
  );
}
export default App;

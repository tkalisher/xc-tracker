import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <StartButton />
    </div>
  );
}
function StartButton(props) {
  return <button type={"button"} onClick={function(){return <Clock />}}>Start</button>
}

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  };
//   }
//   render() {
//     return (
      
//     );
//   }
// }

export default App;

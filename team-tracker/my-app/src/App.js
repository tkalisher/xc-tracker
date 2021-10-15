import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <StartButton />
    </div>
  );
}
class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started : false};
  }
  render() {
    return (
      {this.state.started && <Clock />}
      <button type={"button"} onClick={handleClick()}}>Start</button>
  );
  }
  handleClick = () => {
    this.setState({started : true})
  }
}


export default App;

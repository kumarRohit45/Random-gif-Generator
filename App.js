import './App.css';
import Random from './componets/Random';
import Tag from './componets/Tag';

function App() {
  return (
    <div className="App">
        <div className='heading'>RANDOM GIF</div>
        <Random></Random>
        <Tag></Tag>
    </div>
  );
}

export default App;

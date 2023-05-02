import logo from './logo.svg';
import './App.css';
import FilterComponent from './components/FilterComponent';
import { useState } from 'react';
import DetailComponent from './components/DetailComponent';

function App() {
  const [data, setData] = useState();
  const sendData = (data) => {
    setData(data);
  }

  return (
    <div className="App">
      {
        !data ? 
          <FilterComponent sendData={(data) => sendData(data)} />
          :
          <DetailComponent data={data} />
      }

      {
        data &&
          <input type='text'></input>
      }
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';
import './App.css';

function App() {
  const [value1,setValue] = useState([{name:"India"},{name:"England"}])
  const [options,setOptions] = useState([{name:"India"},{name:"Australia"},{name:"England"},{name:"Srilanka"},{name:"Pakisthan"},{name:"Afganisthan"},{name:"Italy"},{name:"Irland"},{name:"WestIndies"},{name:"Russia"}]);

  return (
    <div className='container'>
      <Multiselect className="dropDown" selectedValues={value1} options={options} disable={false} disablePreSelectedValues={true} displayValue="name" showCheckbox='true'/>
    </div>
  );
}

export default App;

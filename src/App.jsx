import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';


function App() {
  const [category,setCategory] = useState("general")
  return (
    <>
     <Navbar setCategory={setCategory}/>
     <News category={category}/>
    </>
  );
}

export default App;

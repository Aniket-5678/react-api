import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/pages/Home";
import SingleDog from "./components/pages/SingleDog";





function App() {


  return (
    <div className='app-container'>
      <BrowserRouter>
       <Routes>
        
        <Route path="/"   element={<Home/>} />
        <Route path="/:name"   element={<SingleDog/>} />


       </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;

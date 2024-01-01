
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AddStudent from './Components/AddStudent';
import Home from './Components/Home';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addStudent' element={<AddStudent />}></Route>
        <Route path='/editStudent/:id' element={<EditStudent />}></Route>
      </Routes>
    </>

  );
}

export default App;

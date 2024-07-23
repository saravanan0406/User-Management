import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Users from './component/Users';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

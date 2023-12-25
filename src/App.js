import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar';
import Home from './Components/Home';
import Course from './Components/Course';
import Register from './Components/Register.js';


function App() {
  return (
   <div>


<BrowserRouter>
<Topbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/course' element={<Course/>}/>
<Route path='/register' element={<Register/>}/>

</Routes>
</BrowserRouter>




   </div>
  );
}

export default App;

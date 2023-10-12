import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../src/componentes/Dashboard';
import Compra from './componentes/Compra';
import {Link} from 'react-router-dom';
import Venta from './componentes/Venta';
import Login from './componentes/Login';
import Editar from './componentes/Editar';
import Informacion from './componentes/Informacion';



function App() {
  return (
    <div className="container" style={{ height: '100vh'}}>
      <nav className='nav mt-6' style={{display: "flex", justifyContent:"space-between", margin:"10px", alignItems:"center"}}>
          <Link to="/" style={{width:"100px", height:"50px", color:"black", paddingTop:"10px", fontSize: "xx-large", textDecoration: "none"}}>←</Link>
          <h1 style={{display: "flex", textAlign: "center", fontFamily: 'font-family PermanentMarker cursive', fontSize: "xxx-large"}}>Tu Closet by Dojo</h1>
      </nav>
      <Routes>
        <Route path='/' exact element={<Dashboard/>}></Route>
        <Route path='/compra' exact element={<Compra/>}></Route>
        <Route path='/venta' exact element={<Venta/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/informacion/:id' exact element={<Informacion/>}></Route>
        <Route path='/editar/:id' exact element={<Editar/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

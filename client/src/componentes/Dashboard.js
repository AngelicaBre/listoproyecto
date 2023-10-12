import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import closet from '../img/closet.jpg';


const Tienda = () => {
    const [tiendas, setTiendas] = useState([]);
    

useEffect(()=> {
    axios.get("http://localhost:8000/api/tiendas")
        .then(res => setTiendas(res.data))
        .catch(err => console.log(err));
}, [])



return(
        <div className='contenido'style={{ width:'100%'}}>
            <h2 style={{color:'black', paddingLeft:'20px', paddingTop: '20px', display:'flex', justifyContent: 'center'}}>Nuestra misión es darle una segunda oportunidad a tus prendas</h2>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <Link style={{color:"#2BB0E6", textDecoration: "none", width: '65px', height:'30px', padding: '2px', fontSize: 'x-large'}} to={`/compra/`}>Compra</Link>
            <Link style={{ color:"#2BB0E6", textDecoration: "none", width: '150px', height:'50px', padding: '2px', fontSize: 'x-large'}} to={`/login/`}>Venta</Link></div>
            <div className='contenido' style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <p style={{fontSize: "xx-large", color: 'black', paddingLeft:'50px', paddingTop: '100px', textAlign: 'center' }}>Ropa y zapatos de segunda,
                más rápido y seguro</p>
                <img src={closet} style={{width: '60%', padding: '10px'}}></img>
            </div>
        </div>
        )
    }

export default Tienda;
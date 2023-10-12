import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


    const Compra = () => {
    const [tiendas, setTiendas] = useState([]);
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/tiendas")
            .then(res => setTiendas(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <Link style={{ margin: '10px', color:'#2F9FAD', textDecoration: "none", width:"80px", height:"40px", fontSize: 'large'}}to="/venta">Venta</Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Contacto</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tiendas.map((tienda, index) => (
                                <tr key={index}>
                                    <td>{tienda.nombre}</td>
                                    <td>{tienda.tipo}</td>
                                    <td>{tienda.descripcion}</td>
                                    <td>{tienda.precio}</td>
                                    <td>{tienda.contacto}</td>
                                    <td><img style={{width: 100, height: 100}} src={tienda.imagen} alt='tienda' className="img-fluid custom-img"/></td>
                                <td>
                                <Link style={{ margin: '10px', color:'#2F9FAD', textDecoration: "none", width:"100px", height:"50px", fontSize: 'large'}} to={`/editar/${tienda._id}`}>Editar</Link>
                                <Link style={{ margin: '10px', color:'#2F9FAD', textDecoration: "none", width:"100px", height:"50px", fontSize: 'large'}} to={`/informacion/${tienda._id}`}>Información</Link>
                                </td> 
                                </tr>
                    ))
                    }
                    </tbody>
            </table>
        </div>      
    )      
}    

export default Compra;
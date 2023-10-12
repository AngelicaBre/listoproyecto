import React,{ useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const Informacion = ()=> {
    const [tiendas, setTiendas] = useState([])
    const {id}= useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8000/api/tiendas/" +id)
        .then((res) => {
            setTiendas(res.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [id])

    const vendida = id => {
        axios.delete("http://localhost:8000/api/tiendas/"+id,{withCredentials: true})
            .then(res =>navigate("/compra"))
            .catch(err=>console.log(err));
            }

            return (
                <div>
                    <h2>Informacion de {tiendas.nombre}</h2>
                    <p>Nombre: {tiendas.nombre}</p>
                    <p>Tipo: {tiendas.tipo}</p>
                    <p>Descripción: {tiendas.descripcion}</p>
                    <p>Precio: ₡{tiendas.precio}</p>
                    <p>Contacto: {tiendas.contacto}</p>
                    <p><img style={{width: 100, height: 100}} src={tiendas.imagen} alt='tienda' className="img-fluid custom-img"></img></p>
                    <button style={{ backgroundColor:'#2F9FAD',color: 'white', margin: '10px', border: 'none', borderRadius:'50px'}}  onClick={()=> vendida(tiendas._id) }>¡Ya está vendida!</button>
            </div>
    );
}

export default Informacion;


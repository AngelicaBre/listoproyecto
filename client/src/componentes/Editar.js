import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import ButtonLogout from './ButtonLogout';

const EditarVenta = () => {
    
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState();
    const [contacto, setContacto] = useState();
    const [imagen, setImagen] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/tiendas/"+id)
            .then(res=>{
                setNombre(res.data.nombre);
                setTipo(res.data.tipo);
                setDescripcion(res.data.descripcion);
                setPrecio(res.data.precio);
                setContacto(res.data.contacto);
                setImagen(res.data.imagen);
            })
            .catch(err=> console.log(err));
    }, [id])

    const actualizarVenta = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/tiendas/"+id, {
            nombre,
            tipo,
            descripcion,
            precio,
            contacto,
            imagen,
        }, {withCredentials: true})
            .then(res => navigate("/compra"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h3>Editar Prenda</h3>
            <form onSubmit={actualizarVenta}>
            <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={nombre} className="form-control" onChange={e => setNombre(e.target.value)} />
                </div>
                <div>
                    <label>Tipo:</label>
                    <input type="text" name="tipo" value={tipo} className="form-control" onChange={e => setTipo(e.target.value)} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" name="descripcion" value={descripcion} className="form-control" onChange={e => setDescripcion(e.target.value)} />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" name="precio" value={precio} className="form-control" onChange={e => setPrecio(e.target.value)} />
                </div>
                <div>
                    <label>Contacto:</label>
                    <input type="number" name="contacto" value={contacto} className="form-control" onChange={e => setContacto(e.target.value)} />
                </div>
                <div>
                    <label>URL de Imagen:</label>
                    <input type="text" name="imagen" value={imagen} className="form-control" onChange={e => setImagen(e.target.value)}/>
                    <img style={{width: 100, height: 100}} className="img-fluid" alt="prenda" src={imagen} />
                </div>
                <div>
                <input type="submit" style={{  backgroundColor:'#2F9FAD',color: 'white', borderRadius:'50px', border: 'none',width:'130px', height: '30px', margin:'10px'}} value="Guardar" />
                </div>
                <div>
                <input type="submit" style={{  backgroundColor:'#2F9FAD',color: 'white', borderRadius:'50px', border: 'none',width:'130px', height: '30px', margin:'10px'}} value="Regresar" />
                </div>
                    <ButtonLogout to="/productos" />
            </form>
        </div>
    )
}

export default EditarVenta;
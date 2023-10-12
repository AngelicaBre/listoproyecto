import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import ButtonLogout from './ButtonLogout';




const Venta = () => {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState();
    const [contacto, setContacto] = useState();
    const [imagen, setImagen] = useState("");
    const [errors, setErrors] = useState([]);
    

    const navigate = useNavigate();

    const guardarPrenda = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/tiendas",{
            nombre,
            tipo,
            descripcion,
            precio,
            contacto,
            imagen
        
        },{withCredentials: true})
            .then(res => navigate("/compra"))
            .catch(err => setErrors(err.response.data.errors)
            )
    }

    return (
        <div >
            <form onSubmit={guardarPrenda}className='mt-4'>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={nombre} className="form-control" onChange={e => setNombre(e.target.value)} />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div>
                    <label>Tipo:</label>
                    <input type="text" name="tipo" value={tipo} className="form-control" onChange={e => setTipo(e.target.value)} />
                    {errors.tipo ? <span className="text-danger">{errors.tipo.message}</span> : null}
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" name="descripcion" value={descripcion} className="form-control" onChange={e => setDescripcion(e.target.value)} />
                    {errors.descripcion ? <span className="text-danger">{errors.descripcion.message}</span> : null}
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" name="precio" value={precio} className="form-control" onChange={e => setPrecio(e.target.value)} />
                    {errors.precio ? <span className="text-danger">{errors.precio.message}</span> : null}
                </div>
                <div>
                    <label>Contacto:</label>
                    <input type="number" name="contacto" value={contacto} className="form-control" onChange={e => setContacto(e.target.value)} />
                    {errors.contacto ? <span className="text-danger">{errors.contacto.message}</span> : null}
                </div>
                <div>
                    <label>URL de Imagen:</label>
                    <input type="text" name="imagen" value={imagen} className="form-control" onChange={e => setImagen(e.target.value)}></input>
                </div>
                <input type="submit" className='mt-3' value="Añadir prenda" style={{backgroundColor: '#2F9FAD', color: 'white', borderRadius:'50px', border: 'none', width:'130px', height: '30px', margin: '10px'}}/>
                <div className='mt-3'>
                <ButtonLogout  to="/productos"/>
                </div>
                    
    
            </form>
        </div>
    )

}
export default Venta;
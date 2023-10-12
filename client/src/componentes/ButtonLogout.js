import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ButtonLogout = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => navigate("/"))
            .catch(err => console.log(err));
    }
    return(
        <button className='float-right'style={{  backgroundColor:'#2F9FAD',color: 'white', borderRadius:'50px', border: 'none',width:'130px', height: '30px',margin:'10px'}} onClick={cerrarSesion}>Cerrar Sesión</button>
    )
}
export default ButtonLogout;
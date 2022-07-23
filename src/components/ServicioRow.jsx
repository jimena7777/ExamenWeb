import {FaTrash,FaRegEye} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { deleteServicios } from '../mutations/servicioMutation';
import { GET_Servicios } from '../queries/serviciosQueries';


export default function ServicioRow({  servicio}) {
    const [deleteServicio]= useMutation(deleteServicios,{
        variables: { id: servicio.id },
        refetchQueries: [{ query: GET_Servicios }],
      
  });
  return (
    <tr>
        
            <td>{servicio.bano}</td>
            <td>{servicio.recorte_pelo}</td>
            <td>{servicio.revision_veterinaria}</td>
            <td>{servicio.actividad_canina}</td>
            


            <td>
               
                <button className="btn btn-danger btn-sm" onClick={deleteServicio}>
                  <FaTrash />
                </button>
            </td>

            <td>
              <a className="btn btn-info btn-sm"href={`/infoservicios/${servicio.id}`} >
              <FaRegEye />
              </a>

            </td>
        
    </tr>
  );
}
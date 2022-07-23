import {FaTrash,FaRegEye} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { deletePersonas } from '../mutations/personaMutation';
import { GET_Personas } from '../queries/personasQueries';


export default function PersonaRow({  persona}) {
    const [deletePersona]= useMutation(deletePersonas,{
        variables: { id: persona.id },
        refetchQueries: [{ query: GET_Personas }],
      
  });
  return (
    <tr>
        
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.documento}</td>
            <td>{persona.direccion}</td>
            <td>{persona.celular}</td>


            <td>
               
                <button className="btn btn-danger btn-sm" onClick={deletePersona}>
                  <FaTrash />
                </button>
            </td>

            <td>
              <a className="btn btn-info btn-sm" href={`/infopersonas/${persona.id}`} >
              <FaRegEye />
              </a>

            </td>
        
    </tr>
  );
}
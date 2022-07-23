import { useQuery  } from '@apollo/client';
import PersonaRow from './PersonaRow';
import Spinner from './Spinner';
import {GET_Personas} from '../queries/personasQueries';



export default function Personas() {
  const{loading,error,data} = useQuery(GET_Personas)
 if (loading)return <Spinner/>
 if (error)return <p>Error..</p>
  return (
    <section>
    {!loading && !error && (
    <table className="table table-hover mt-3">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Documento</th>
            <th>Direccion</th>
            <th>Celular</th>
            <th>Eliminar</th>
            <th>Ver</th>       
        </tr>
    </thead>
    <tbody>
        {data.personas.map(  persona=>
            <PersonaRow key={  persona.id}   persona={  persona}/>
            )}
    </tbody>
</table>)}
    </section>
  )
}

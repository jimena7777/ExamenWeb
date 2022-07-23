import { useQuery } from '@apollo/client';
import ServicioRow from './ServicioRow';
import Spinner from './Spinner';
import {GET_Servicios} from '../queries/serviciosQueries';


export default function Servcios() {
  const{loading,error,data} = useQuery(GET_Servicios)
 if (loading)return <Spinner/>
 if (error)return <p>Error..</p>
  return (
    <section>
    {!loading && !error && (
    <table className="table table-hover mt-3">
    <thead>
        <tr>
            <th>Baño</th>
            <th>Recorte Pelo</th>
            <th>Revision Veterinaria</th>
            <th>Actividad Canina</th>
          
            <th>Eliminar</th>
            <th>Ver</th>       
        </tr>
    </thead>
    <tbody>
        {data.servicios.map(  servicio=>
            <ServicioRow key={  servicio.id}   servicio={  servicio}/>
            )}
    </tbody>
</table>)}
    </section>
  )
}
